$.isOnline = function(channel) {
    var stream = $.twitch.GetStream(channel);
    if (!stream.toString().contains('"stream":"null"')) {
        return true;
    }

    return false;
}

$.getStatus = function(channel) {
    var channelData = $.twitch.GetChannel(channel);
    
    return channelData.getString("status");
}

$.getGame = function(channel) {
    var channelData = $.twitch.GetChannel(channel);
    
    return channelData.getString("game");
}

$.getUptime = function(channel) {
    var stream = $.twitch.GetStream(channel);
    
    //first get created_at from twitch
    var createdAt = stream.getJSONObject("stream").getString("created_at");
    
    //initiate date formatter
    var df = new java.text.SimpleDateFormat( "yyyy-MM-dd'T'hh:mm:ssz" );
    //parse created_at from twitch, which is received in GMT
    if ( createdAt.endsWith( "Z" ) ) {
            createdAt = createdAt.substring( 0, createdAt.length() - 1) + "GMT-00:00";
            //$.say(createdAt);
        } else {
            var inset = 6;
            var s0 = createdAt.substring( 0, createdAt.length() - inset );
            //$.say(s0);
            var s1 = createdAt.substring( createdAt.length() - inset, createdAt.length() );
            //$.say(s1);
            createdAt = s0 + "GMT" + s1;     
    }

    var datefmt = new java.text.SimpleDateFormat("EEEE MMMM d, yyyy @ h:mm a z");
    var gtf = new java.text.SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
    datefmt.setTimeZone(java.util.TimeZone.getTimeZone($.timezone));
    var cal = java.util.Calendar.getInstance(java.util.TimeZone.getTimeZone($.timezone));
    var now = cal.getTime();
    var timestamp = datefmt.format(df.parse( createdAt ));

    var starttime = new java.util.Date(gtf.format(df.parse( createdAt )));
    var currenttime = new java.util.Date(gtf.format(now));
    
    var diff = (currenttime.getTime() - starttime.getTime())
    var diffHrs = diff / (60 * 60 * 1000) % 24;
    var diffMinutes = diff / (60 * 1000) % 60;
    
    diffHrs = diffHrs.toString().substring(0, diffHrs.toString().indexOf("."));
    diffMinutes = diffMinutes.toString().substring(0, diffMinutes.toString().indexOf("."));
    
    return diffHrs + " hrs and " + diffMinutes + " minutes since " + timestamp.toString();
}

$.getHighlight = function(channel) {
    var stream = $.twitch.GetStream(channel);
    
    //first get created_at from twitch
    var createdAt = stream.getJSONObject("stream").getString("created_at");
    
    //initiate date formatter
    var df = new java.text.SimpleDateFormat( "yyyy-MM-dd'T'hh:mm:ssz" );
    //parse created_at from twitch, which is received in GMT
    if ( createdAt.endsWith( "Z" ) ) {
            createdAt = createdAt.substring( 0, createdAt.length() - 1) + "GMT-00:00";
            //$.say(createdAt);
        } else {
            var inset = 6;
            var s0 = createdAt.substring( 0, createdAt.length() - inset );
            //$.say(s0);
            var s1 = createdAt.substring( createdAt.length() - inset, createdAt.length() );
            //$.say(s1);
            createdAt = s0 + "GMT" + s1;     
    }

    var gtf = new java.text.SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
    var date = new java.text.SimpleDateFormat("MM/dd/yyyy");
    var cal = java.util.Calendar.getInstance(java.util.TimeZone.getTimeZone($.timezone));
    var now = cal.getTime();

    var starttime = new java.util.Date(gtf.format(df.parse( createdAt )));
    var startdate = date.format(df.parse( createdAt ));
    var currenttime = new java.util.Date(gtf.format(now));
    
    var diff = (currenttime.getTime() - starttime.getTime())
    var diffHrs = diff / (60 * 60 * 1000) % 24;
    var diffMinutes = diff / (60 * 1000) % 60;
    
    diffHrs = diffHrs.toString().substring(0, diffHrs.toString().indexOf("."));
    diffMinutes = diffMinutes.toString().substring(0, diffMinutes.toString().indexOf("."));
    
    return diffHrs + "H-" + diffMinutes + "M-ON:" + startdate;
}

$.getViewers = function(channel) {
    var stream = $.twitch.GetStream(channel);

    try {
        return stream.getJSONObject("stream").getInt("viewers");
    } catch(e) {
        return 0;
    }
}

$.getFollows = function(channel) {
    var channelData = $.twitch.GetChannel(channel);
    
    return channelData.getInt("followers").toString();
}
$.on('command', function(event) {
    var sender = event.getSender();
    var username = $.username.resolve(sender);
    var command = event.getCommand();
    var argsString = event.getArguments().trim();
    var args = event.getArgs();
    var res;

    if (command.equalsIgnoreCase("online")) {
        if (!$.isOnline($.channelName)) {
            $.say($.getWhisperString(sender) + "Stream is offline.");
        }
        else {
            $.say($.getWhisperString(sender) + "Stream is online!");
        }
    }
    
    if (command.equalsIgnoreCase("follows")) {
        if (!$.getFollows($.channelName)!=null) {
            $.say($.getFollows($.channelName));
        }
    }
	
    if (command.equalsIgnoreCase("viewers")) {
        $.say("There are currently " + $.getViewers($.channelName) + " viewers!");
    }

    if (command.equalsIgnoreCase("game")) {
        if ($.strlen(argsString) == 0) {
            $.say("Current Game: " + $.getGame($.channelName));
            return;
        }
        else if (!$.isAdmin(sender)) {
            $.say($.getWhisperString(sender) + $.castermsg);
            return;	
        }
        
        res = $.twitch.UpdateChannel($.channelName, "", argsString);
        
        if (res.getBoolean("_success")) {
            if (res.getInt("_http") == 200) {
                $.say("Changed the game to '" + res.getString("game") + "'!");
                $.logEvent("streamCommands.js", 25, username + " changed the current game to " + res.getString("game"));
            } else {
                $.say($.getWhisperString(sender) + "Failed to change the game. TwitchAPI must be having issues");
                println(res.getString("message"));
                $.logError("streamCommands.js", 29, res.getString("message"));
            }
        } else {
            $.say("Failed to change the game. TwitchAPI must be having issues");
            println(res.getString("_exception") + " " + res.getString("_exceptionMessage"));
            $.logError("streamCommands.js", 34, res.getString("_exception") + " " + res.getString("_exceptionMessage"));
        }
    }
    

    if (command.equalsIgnoreCase("title")) {
        if ($.strlen(argsString) == 0) {
            $.say("Current Status: " + $.getStatus($.channelName));
            return;
        }
        else if (!$.isAdmin(sender)) {
            $.say($.getWhisperString(sender) + $.castermsg);
            return;	
        }
        
        res = $.twitch.UpdateChannel($.channelName, argsString, "");
        
        if (res.getBoolean("_success")) {
            if (res.getInt("_http") == 200) {
                $.say("Changed the title to '" + res.getString("status") + "'!");
                $.logEvent("streamCommands.js", 54, username + " changed the current status to " + res.getString("status"));
            } else {
                $.say($.getWhisperString(sender) + "Failed to change the status. TwitchAPI must be having issues");
                println(res.getString("message"));
                $.logError("streamCommands.js", 58, res.getString("message"));
            }
        } else {
            $.say($.getWhisperString(sender) + "Failed to change the status. TwitchAPI must be having issues");
            println(res.getString("_exception") + " " + res.getString("_exceptionMessage"));
            $.logError("streamCommands.js", 63, res.getString("_exception") + " " + res.getString("_exceptionMessage"));
        }
    }
    
    if (command.equalsIgnoreCase("commercial")) {
        if (!$.isAdmin(sender)) {
            $.say($.getWhisperString(sender) + $.castermsg);
            return;
        }
        
        if (args.length > 0) {
            if (args[0].equalsIgnoreCase("disablecommand")) {
                if (!isAdmin(sender)) {
                    $.say($.getWhisperString(sender) + $.adminmsg);
                    return;
                }
                
                $.logEvent("streamCommands.js", 80, username + " disabled manual triggering of commercials");
            
                $.inidb.set("settings", "commercialcommandenabled", "0");
                
                $.say($.getWhisperString(sender) + "Manual commercials disabled!");
                return;
            }
        
            if (args[0].equalsIgnoreCase("enablecommand")) {
                if (!isAdmin(sender)) {
                    $.say($.getWhisperString(sender) + $.adminmsg);
                    return;
                }
            
                $.logEvent("streamCommands.js", 94, username + " enabled manual triggering of commercials");
            
                $.inidb.set("settings", "commercialcommandenabled", "1");
                
                $.say($.getWhisperString(sender) + "Manual commercials enabled!");
                return;
            }
        
            if (args[0].equalsIgnoreCase("autotimer")) {
                if (!isAdmin(sender)) {
                    $.say($.getWhisperString(sender) + $.adminmsg);
                    return;
                }
                
                if (args.length >= 2 && parseInt(args[1]) == 0) {
                    $.logEvent("streamCommands.js", 109, username + " disabled the automatic commercial timer");
                    
                    $.inidb.set("settings", "commercialtimer", args[1]);
                    
                    $.say($.getWhisperString(sender) + "Automatic commercial timer disabled!");
                    return;
                }
                
                if (args.length < 3 || isNaN(args[1]) || parseInt(args[1]) < 0
                    || (!args[2].equalsIgnoreCase("30") && !args[2].equalsIgnoreCase("60") && !args[2].equalsIgnoreCase("90")
                        && !args[2].equalsIgnoreCase("120") && !args[2].equalsIgnoreCase("150") && !args[2].equalsIgnoreCase("180"))) {
                    if (args.length == 1) {
                        if (!$.inidb.exists("settings", "commercialtimer") || $.inidb.get("settings", "commercialtimer").equalsIgnoreCase("0")) {
                            $.say($.getWhisperString(sender) + "Automatic commercials are disabled! To enable them, say '!commercial autotimer <interval in minutes (at least 9)> <commercial length 30, 60, 90, 120, 150, or 180> [optional message]'");
                        } else {
                            var a = $.inidb.get("settings", "commercialtimer");
                            var b = $.inidb.get("settings", "commercialtimerlength");
                            var c = $.inidb.get("settings", "commercialtimermessage");
                            
                            $.say($.getWhisperString(sender) + "Automatic commercials are enabled! They are running " + b + " seconds of ads every " + a + " minutes. To disable, say '!commercial autotimer 0'");
                            
                            if (!c.isEmpty()) {
                                $.say($.getWhisperString(sender) + "The message sent with every automatic commercial is: " + c);
                            }
                        }
                    } else {
                        $.say($.getWhisperString(sender) + "Usage: !commercial autotimer <interval in minutes (at least 9) or 0 to disable> <commercial length 30, 60, 90, 120, 150, or 180> [optional message]");
                    }
                    
                    return;
                }
                
                if (parseInt(args[1]) < 9) {
                    args[1] = 9;
                }
            
                $.inidb.set("settings", "commercialtimer", args[1]);
                $.inidb.set("settings", "commercialtimerlength", args[2]);
                
                if (args.length > 2) {
                    $.logEvent("streamCommands.js", 149, username + " set the auto commercial timer to interval " + args[1] + " minutes, length " + args[2] + " seconds, message " + argsString.substring(argsString.indexOf(args[2], argsString.indexOf(args[1]) + 1) + $.strlen(args[2]) + 1));
                    $.inidb.set("settings", "commercialtimermessage", argsString.substring(argsString.indexOf(args[2], argsString.indexOf(args[1]) + 1) + $.strlen(args[2]) + 1));
                } else {
                    $.logEvent("streamCommands.js", 152, username + " set the auto commercial timer to interval " + args[1] + " minutes, length " + args[2] + " seconds, with no message");
                    $.inidb.set("settings", "commercialtimermessage", "");
                }
                
                $.say($.getWhisperString(sender) + "Automatic commercial timer set!");
                return;
            }
            
            if (args[0].equalsIgnoreCase("help")) {
                $.say($.getWhisperString(sender) + "Usage: !commercial <commercial length 30, 60, 90, 120, 150, or 180>, !commercial enablecommand, !commercial disablecommand, !commercial autotimer");
                return;
            }
        }
        
        if ($.inidb.exists("settings", "commercialcommandenabled")
            && $.inidb.get("settings", "commercialcommandenabled").equalsIgnoreCase("0") && !isAdmin(sender)) {
            $.say($.getWhisperString(sender) + "Manual triggering of commercials is disabled!");
            return;
        }
        
        if ($.strlen(argsString) == 0) {
            argsString = "30";
        }
        
        res = $.twitch.RunCommercial($.channelName, parseInt(argsString));
        
        if (res.getBoolean("_success")) {
            if (res.getInt("_http") == 204) {
                $.say("Running a " + argsString + " second commercial!");
                $.logEvent("streamCommands.js", 181, username + " ran a " + argsString + " second commercial");
            } else if (res.getInt("_http") == 422) {
                $.say($.getWhisperString(sender) + "You must enter a valid commercial length, wait 8 minutes between commercials, and can only run commercials when the stream is online! Valid lengths are 30, 60, 90, 120, 150, and 180 seconds");
                
                if (!res.getString("message").equalsIgnoreCase("Commercials breaks are allowed every 8 min and only when you are online.")) {
                    $.logError("streamCommands.js", 186, res.getString("message"));
                }
            } else {
                $.say($.getWhisperString(sender) + "Failed to run a commercial. TwitchAPI must be having issues");
                println(res.getString("_content"));
                $.logError("streamCommands.js", 191, res.getString("_content"));
            }
        } else {
            $.say($.getWhisperString(sender) + "Failed to run a commercial. TwitchAPI must be having issues");
            println(res.getString("_exception") + " " + res.getString("_exceptionMessage"));
            $.logError("streamCommands.js", 196, res.getString("_exception") + " " + res.getString("_exceptionMessage"));
        }
    }
});

setTimeout(function(){ 
if ($.moduleEnabled('./commands/streamCommands.js')) {
$.registerChatCommand("./commands/streamCommands.js", "online", "caster");
$.registerChatCommand("./commands/streamCommands.js", "game", "caster");
$.registerChatCommand("./commands/streamCommands.js", "title", "caster");
$.registerChatCommand("./commands/streamCommands.js", "commercial", "caster");
$.registerChatCommand("./commands/streamCommands.js", "commercial help", "caster");
$.registerChatCommand("./commands/streamCommands.js", "viewers");
$.registerChatCommand("./commands/streamCommands.js", "follows");

}
},10*1000);

var lastCommercial = $.inidb.get("settings", "lastCommercial");

if (lastCommercial == undefined || lastCommercial == null || lastCommercial < 0) {
    lastCommercial = System.currentTimeMillis() - (parseInt($.inidb.get("settings", "commercialtimer")) * 60 * 1000) + (2 * 60 * 1000);
}

$.timer.addTimer("./commands/streamCommands.js", "autocommercial", true, function() {
    if (!$.moduleEnabled("./commands/streamCommands.js")) {
        return;
    }
    
    if (!$.inidb.exists("settings", "commercialtimer") || $.inidb.get("settings", "commercialtimer").equalsIgnoreCase("0")) {
        return;
    }
    
    var res;
    
    if (lastCommercial + (parseInt($.inidb.get("settings", "commercialtimer")) * 60 * 1000) < System.currentTimeMillis()){
        res = $.twitch.RunCommercial($.channelName, parseInt($.inidb.get("settings", "commercialtimerlength")));
        
        if (res.getBoolean("_success")) {
            if (res.getInt("_http") == 204) {
                if ($.strlen($.inidb.get("settings", "commercialtimermessage")) > 0) {
                    $.say($.inidb.get("settings", "commercialtimermessage"));
                }
                
                $.logEvent("streamCommands.js", 228, "Ran a " + $.inidb.get("settings", "commercialtimerlength") + " second automatic commercial");
            } else if (res.getInt("_http") == 422) {
                println(res.getString("_content"));
                
                if (!res.getString("message").equalsIgnoreCase("Commercials breaks are allowed every 8 min and only when you are online.")) {
                    $.say($.getWhisperString(sender) + "Failed to run a commercial. " + res.getString("message"));
                    $.logError("streamCommands.js", 234, res.getString("message"));
                }
            } else {
                println(res.getString("_content"));
                $.say($.getWhisperString(sender) + "Failed to run a commercial. TwitchAPI must be having issues");
                $.logError("streamCommands.js", 239, res.getString("message"));
            }
        } else {
            $.say($.getWhisperString(sender) + "Failed to run a commercial. TwitchAPI must be having issues");
            println(res.getString("_exception") + " " + res.getString("_exceptionMessage"));
            $.logError("streamCommands.js", 244, res.getString("_exception") + " " + res.getString("_exceptionMessage"));
        }
        
        lastCommercial = System.currentTimeMillis();
        $.inidb.set("settings", "lastCommercial", lastCommercial);
    }
}, 60 * 1000);