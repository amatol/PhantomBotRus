$.noticeinterval = parseInt($.inidb.get('notice', 'interval'));
$.noticemessages = parseInt($.inidb.get('notice', 'reqmessages'));
$.notices_toggle = $.inidb.get('notice', 'notices_toggle');

if ($.noticeinterval == undefined || $.noticeinterval == null || isNaN($.noticeinterval) || $.noticeinterval < 2) {
    $.noticeinterval = 10;
}

if ($.noticemessages == undefined || $.noticemessages == null || isNaN($.noticemessages)) {
    $.noticemessages = 25;
}

if ($.notices_toggle == undefined || $.notices_toggle == null) {
    $.notices_toggle = true;
}

$.messageCount = 0;

$.on('ircChannelMessage', function (event) {
    $.messageCount++;
});


$.on('command', function (event) {
    var sender = event.getSender();
    var command = event.getCommand();
    var num_messages = $.inidb.get('notice', 'num_messages');
    var argsString = event.getArguments().trim();
    var args = event.getArgs();
    var action;
    var message;

    if (num_messages == null) {
        num_messages = 0;
    }

    if (command.equalsIgnoreCase("notice")) {
        if (args.length >= 1) {
            if (!$.isAdmin(sender)) {
                $.say($.getWhisperString(sender) + $.adminmsg);
                return;
            }

            action = args[0]
            message = args[1]

            if (args.length >= 2) {
                message = argsString.substring(argsString.indexOf(action) + action.length() + 1)
            }


            if (action.equalsIgnoreCase("get")) {
                if (args.length < 2) {
                    $.say($.getWhisperString(sender) + "There are " + num_messages + " notices. Say '!notice get <id>' to get a messages content. Message IDs go from 0 to " + (num_messages));
                } else {
                    if ($.inidb.get('notices', 'message_' + message) == null) {
                        $.say($.getWhisperString(sender) + "There are " + num_messages + " notices. Message IDs go from 0 to " + (num_messages) + " and " + args[1] + " isn't one of them");
                    } else {
                        $.say($.getWhisperString(sender) + $.inidb.get('notices', 'message_' + message));
                    }
                }
            }

            if (action.equalsIgnoreCase("insert")) {
                if (args.length < 3) {
                    $.say($.getWhisperString(sender) + "Insert an event into a specific slot, pushing the event currently in that slot and all others after it forward by one slot. !notice insert <id> <message>")
                } else {
                    var id = args[1]
                    message = argsString.substring(argsString.indexOf(id) + id.length() + action.length() + 2)

                    if (id < num_messages) {
                        for (var i = (num_messages - 1); i >= 0; i--) {
                            if (i > parseInt(id)) {
                                $.inidb.set('notices', 'message_' + (i + 1), $.inidb.get('notices', 'message_' + i))
                            }
                        }
                        $.inidb.set('notices', 'message_' + parseInt(id), message)
                    } else {
                        $.inidb.set('notices', 'message_' + num_messages, message)
                    }

                    $.inidb.incr('notice', 'num_messages', 1)

                    num_messages = $.inidb.get('notices', 'num_messages')

                    $.say($.getWhisperString(sender) + "Notice added! '" + message + "' There are now " + num_messages + " notices!")
                }
            }

            if (action.equalsIgnoreCase("timer") || action.equalsIgnoreCase("interval")) {
                if (args.length < 2) {
                    $.say($.getWhisperString(sender) + "The current interval is " + $.noticeinterval + " minutes. Set it with !notice timer <minutes> (Minimum is 2 minutes)");
                } else {
                    if (!isNaN(message) && parseInt(message) >= 2) {
                        $.inidb.set('notice', 'interval', message);
                        $.noticeinterval = parseInt(message);

                        $.say($.getWhisperString(sender) + "The interval between notices has been set to " + $.noticeinterval + " minutes!")
                    }
                }
            }


            if ($.inidb.get('notice', 'notices_toggle') == "true") {
                $.notices_toggle = true;
            } else if ($.inidb.get('notice', 'notices_toggle') == "false") {
                $.notices_toggle = false;
            }

            if (action.equalsIgnoreCase("config")) {
                if ($.notices_toggle == true) {
                    var notices = "Enabled"
                } else {
                    notices = "Disabled"
                }

                $.say($.getWhisperString(sender) + "[Notice Settings] - [Notices: " + notices + "] - [Interval: " + $.noticeinterval + " minutes] - [Msg Trigger: " + $.noticemessages + " messages] - [Amount: " + num_messages + " notices]")
            }

            if (action.equalsIgnoreCase("toggle")) {
                if (!$.isAdmin(sender)) {
                    $.say($.getWhisperString(sender) + $.adminmsg);
                    return;
                }

                if ($.notices_toggle == false) {

                    $.notices_toggle = true;
                    $.inidb.set('notice', 'notices_toggle', "true");
                    $.say($.getWhisperString(sender) + "Notices have been turned on!");

                } else if ($.notices_toggle == true) {

                    $.notices_toggle = false;
                    $.inidb.set('notice', 'notices_toggle', "false");
                    $.say($.getWhisperString(sender) + "Notices have been turned off!");
                }

            }


            if (action.equalsIgnoreCase("req")) {
                if (args.length < 2) {
                    $.say($.getWhisperString(sender) + "The current amount is " + $.noticemessages + " messages. Set it with !notice req <amount> (Minimum is 5 messages)")
                } else {
                    if (!isNaN(message) && parseInt(message) >= 0) {
                        $.inidb.set('notice', 'reqmessages', message);
                        $.noticemessages = parseInt(message);

                        $.say($.getWhisperString(sender) + "The minimum number messages to trigger a notice has been set to " + $.noticemessages + " messages!");
                    }
                }
            } 

        } else {
                
            if (!args[0] == ("timer") ||!args[0] == ("interval") || !args[0] == ("insert") || !args[0] == ("get") || !args[0] == ("toggle") || argsString.isEmpty()) {
                $.say($.getWhisperString(sender) + "Usage: !addnotice <message>, !delnotice <id>, !notice insert <id> <message>, !notice get [id], !notice timer <minutes>, !notice req <amount>, !notice config")
            }

        }
    }
    if (command.equalsIgnoreCase("addnotice")) {
        if (!$.isAdmin(sender)) {
            $.say($.getWhisperString(sender) + $.adminmsg);
            return;
        }

        message = argsString;

        if (message == null) {
            $.say($.getWhisperString(sender) + "Insert an notice at the end of the rotation. !notice add <message>");
        } else {
            $.inidb.incr('notice', 'num_messages', 1);

            num_messages = $.inidb.get('notice', 'num_messages');

            $.inidb.set('notices', 'message_' + (num_messages - 1), message);
            $.say($.getWhisperString(sender) + "Notice added! '" + message + "' There are now " + num_messages + " notices!");
        }
    }



    if (command.equalsIgnoreCase("delnotice")) {
        if (!$.isAdmin(sender)) {
            $.say($.getWhisperString(sender) + $.adminmsg);
            return;
        }
        if (num_messages == null) {
            $.say($.getWhisperString(sender) + "Delete the notice at the specified slot. !notice del <id>");
        } else {
            if (isNaN(num_messages) || num_messages == 0) {
                $.say($.getWhisperString(sender) + "There are no notices at this time");
                return;
            }

            if (num_messages > 1) {
                for (i = 0; i < num_messages; i++) {
                    if (i > parseInt(message)) {
                        $.inidb.set('notices', 'message_' + (i - 1), $.inidb.get('notices', 'message_' + i));
                    }
                }
            }

            $.inidb.del('notices', 'message_' + (num_messages - 1))
            $.inidb.decr('notice', 'num_messages', 1);

            num_messages = $.inidb.get('notice', 'num_messages');

            $.say($.getWhisperString(sender) + "Notice removed! There are now " + num_messages + " notices!");
        }
    }




})

setTimeout(function(){ 
    if ($.moduleEnabled('./handlers/noticeHandler.js')) {
        $.registerChatCommand("./handlers/noticeHandler.js", "notice");
    }
},10*1000);

$.messageTime = 0;
$.messageIndex = 0;

function sendMessage() {

    var num_messages = $.inidb.get('notice', 'num_messages');

    if (isNaN(parseInt(num_messages)) || parseInt(num_messages) == 0) {
        return;
    }
	
    if ($.inidb.get('notices', 'message_' + $.messageIndex) ==  null || $.inidb.get('notices', 'message_' + $.messageIndex) ==  " ") {
        return;
    }

    var message = $.inidb.get('notices', 'message_' + $.messageIndex);
    var cmds = "";
    
    if (message.toLowerCase().startsWith("(runcommand:") && message.indexOf(")") > 12) {
        message = message.substring(12);
        cmds = message.substring(0, message.indexOf(")"));
        message = message.substring(message.indexOf(")") + 1);
    }

    $.messageIndex++;

    if ($.messageIndex >= num_messages) {
        $.messageIndex = 0;
    }
    
    if ($.strlen(cmds) > 0) {
       var cmd = cmds;
       var prm = "";
       
       if (cmd.indexOf(" ") > 0) {
           cmd = cmd.substring(0, cmd.indexOf(" "));
           prm = cmd.substring(cmd.indexOf(" "));
       }
       
       var EventBus = Packages.me.mast3rplan.phantombot.event.EventBus;
       var CommandEvent = Packages.me.mast3rplan.phantombot.event.command.CommandEvent;
       
       EventBus.instance().post(new CommandEvent($.botname, cmd, prm));
    }
    
    if ($.strlen(message) > 0) {
       $.say(message);
    }
}


$.timer.addTimer("./handlers/noticeHandler.js", "notices", true, function() {
    if (!$.moduleEnabled("./handlers/noticeHandler.js")) {
        return;
    }
        
    if (($.messageTime + ($.noticeinterval * 60 * 1000)) < System.currentTimeMillis()) {
        if(($.messageCount >= $.noticemessages)) {

            if($.notices_toggle==true) {
                sendMessage();
                $.messageCount = 0;
            }

            $.messageTime = System.currentTimeMillis();
            

        }
        
    }
}, 10000);
