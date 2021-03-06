$.on('command', function(event) {
    var sender = event.getSender();
    var command = event.getCommand();
    var num2 = $.users.length;    
    var rnd = $.rand(num2);
    var killPerson = $.users[rnd][0];
    var argsString = event.getArguments().trim();
    var argsString2 = argsString.substring(argsString.indexOf(" ") + 1, argsString.length());
    var args = event.getArgs();
    var num_kills = parseInt($.inidb.get("kills", "num_kills"));
    var killNum = $.randRange(1, 100);
    var num;
    
    if(command.equalsIgnoreCase("kill") && args.length > 0) {

        num = $.rand(num_kills);


        if (isNaN(num_kills) || num_kills == 0) {
            $.say($.getWhisperString(sender) + "There are no kill messages at this time");
            return;
        }

        if ($.inidb.get("kills", "kill_" + num) == " ") {
            $.say($.getWhisperString(sender) + "There are only " + num_kills + " kills right now! Remember that kill messages are numbered from 0 to " + (num_kills - 1) + "!");

        } 
        
    } else if (command.equalsIgnoreCase("kill") && args.length == " "){
        var self = new Array(0)
        sender = $.username.resolve(sender, event.getTags());
 
        self.push(sender + " has somehow managed to kill himself.");
        self.push(sender + " died from unknown causes.");
        self.push(sender + " was sliced in half by Boulder (or something along those lines).");
        self.push(sender + " exploded.");
        self.push(sender + " forgot how to breathe.");
        self.push(sender + " learned that cellular respiration uses oxygen, not sand.")
        self.push(sender + " died.");
        self.push(sender + " tried to befriend a wild grizzly bear.");
        self.push(sender + " suffocated.");
        self.push(sender + " tested the bounds of time and space and lost.");
        self.push(sender + " imploded.");
        self.push(sender + " drowned.");
        self.push(sender + " ceased to be.");
        self.push(sender + " went kablewy!");
        self.push(sender + " figured out how to divide by 0!");
        self.push(sender + " took a long walk off a short pier.");
		self.push(sender + " fell off a ladder.");
		self.push(sender + " fell off a tree.");
		self.push(sender + " fell off himself.");
		self.push(sender + " bursts into flames.");
		self.push(sender + " was struck by lightening.");
		self.push(sender + " starved to death.");
		self.push(sender + " was stabbed to death by (random).");
		self.push(sender + " fell victim to gravity.");
		self.push(sender + "'s plead for death was answered.");
		self.push(sender + "'s vital organs were ruptured.");
		self.push(sender + "'s innards were made outwards.");
		self.push(sender + " was licked to death. Don't ask.");
		self.push(sender + " was deleted.");
		self.push(sender + " had to split.");
		self.push(sender + " Food is a gift from God. Spices are a gift from the devil. I guess it was a little too spicy for you.");

 
        do {
            s = $.randElement(self);
        } while (s.replace(sender, "").equalsIgnoreCase($var.lastRandom) && self.length > 1);
 
        $var.lastRandom = s.replace(sender, "");
 
        $.say(s);
       
    }
    
    if (command.equalsIgnoreCase("addkill")) {
        if (!$.isModv3(sender, event.getTags())) {
            $.say($.getWhisperString(sender) + $.modmsg);
            return;
        }
        
		
        if (num_kills == null || isNaN(num_kills)) {
            num_kills = 0;
        } 

        if (argsString.isEmpty()) {
            $.say($.getWhisperString(sender) + "Usage: !addkill <message>");
            return;
        }
        
      
        $.inidb.incr("kills", "num_kills", 1);
        $.inidb.set("kills", "kill_" + num_kills, argsString);

        
        $.say($.getWhisperString(sender) + "kill message added! There are now " + (num_kills + 1) + " kill messages!");
    }
    if (command.equalsIgnoreCase("getkill")) {
        if (!$.inidb.get("kills", "kill_" + parseInt(args[0])) == " ") {
            $.say($.inidb.get("kills", "kill_" + parseInt(args[0])));
        } else {
            $.say($.getWhisperString(sender) + "There are " + num_kills + " kill messages. Message IDs go from 0 to " + (num_kills) + " and " + args[0] + " isn't one of them");
            return;
        }
                    
                
    }
    if (command.equalsIgnoreCase("editkill")) {
        if (!$.isModv3(sender, event.getTags())) {
            $.say($.getWhisperString(sender) + $.modmsg);
            return;
        }
        
        num = parseInt(args[0]);

        if (num > num_kills) {
            $.say($.getWhisperString(sender) + "There is no kill message under that ID, " + sender + "!");
            return;
        }

        if (argsString2.isEmpty() || argsString.isEmpty() || args[1] == null) {
            $.say($.getWhisperString(sender) + "Usage: !editkill <ID> <message>");
            return;
        }


        
        $.inidb.set("kills", "kill_" + num, argsString2);
        
        $.say($.getWhisperString(sender) + "kill message #" + num + " changed to: " + $.inidb.get("kills", "kill_" + num));
        return;
    }

    if (command.equalsIgnoreCase("delkill")) {
        if (!$.isModv3(sender, event.getTags())) {
            $.say($.getWhisperString(sender) + $.modmsg);
            return;
        }
        
        if (num_kills == null || isNaN(num_kills) || num_kills == 0) {
            $.say($.getWhisperString(sender) + "There are no kills at this time");
            return;
        }
        
        if (argsString.isEmpty()) {
            $.say($.getWhisperString(sender) + "Usage: !delkill <id>");
            return;
        }
        
        if (num_kills > 1) {
            for (i = 0; i < num_kills; i++) {
                if (i > parseInt(argsString)) {
                    $.inidb.set('kills', 'kill_' + (i - 1), $.inidb.get('kills', 'kill_' + i))
                }
            }
        }

        $.inidb.del('kills', 'kill_' + (num_kills - 1));
        
        $.inidb.decr("kills", "num_kills", 1);
        
        $.say($.getWhisperString(sender) + "kill removed! There are now " + (num_kills - 1) + " kills!");
    }
    var commandCount = $.inidb.get('counter', 'kill');
    var messageCommand = $.inidb.get('kills', 'kill_' + num);
    var a = 0;



    if (messageCommand) {
        for (var i = 0; i < args.length; i++) {
            while (messageCommand.contains('(' + (i + 1) + ')')) {
                messageCommand = messageCommand.replace('(' + (i + 1) + ')', $.username.resolve(args[i]));
            }
        }

        while (messageCommand.contains('(sender)')) {
            messageCommand = messageCommand.replace('(sender)', $.username.resolve(sender, event.getTags()));
        }

        while (messageCommand.contains('(user)')) {
            messageCommand = messageCommand.replace('(user)', $.username.resolve(sender, event.getTags()));
        }

        while (messageCommand.indexOf('(count)') != -1) {
            messageCommand = messageCommand.replace('(count)', $.inidb.get('counter', command));
        }

        while (messageCommand.indexOf('(kill)') != -1) {
            messageCommand = messageCommand.replace('(kill)', $.username.resolve(killPerson));
        }
        while (messageCommand.indexOf('(#)') != -1) {
            messageCommand = messageCommand.replace('(#)', killNum);
        }

        $.say(messageCommand);
    }
});
var ar = new Array(0);
ar.push("(sender) murdered (1) with a unicorn's horn!");
ar.push("(1) was killed by a (sender)!");
ar.push("(1) was mauled by (sender) dressed up as a chicken.");
ar.push("(1) was ripped apart by (sender), Daaaaaaamn!");
ar.push("(1) was brutally murdered by (sender) with a car!");
ar.push("(sender) covered (1) in meat sauce and threw them in a cage with a starved tiger.");
ar.push("(sender) genetically modified a Venus flytrap so it grows really big and trapped (1) in a room with it.");
ar.push("(sender) shanked (1)'s butt, over and over again.");
ar.push("(sender) just wrote (1)'s name in their Death Note.");
ar.push("(sender) put (1) out of their misery.");
ar.push("(sender) destroyed (1)!");
ar.push("(sender) atacó a (1) con un consolador grande!");
ar.push("(1) was poked a bit too hard by (sender) with a spoon!");
ar.push("(sender) got his hands on a steamroller and steam rolled (1) flat! So, yeah (1) did die from that.")
ar.push("(sender) attacked (1) with a rusty spoon as the weapon...and managed to (1) with very little effort.");
ar.push("(sender) stole a car known as 'KITT' and ran over (1).");
ar.push("(sender) tickled (1) to death!");
ar.push("(1)'s skull was crushed by (sender)!");
ar.push("(1) is in several pieces after a tragic accident involving (sender) and spoons.");
ar.push("(sender) licked (1) until (sender) was squishy, yeah.. squishy.");
ar.push("(sender) catapulted a huge load of rusty spoons on to (1). (1) died.");
ar.push("(sender) ran out of rusty spoons and unicorn horns to kill (1) with and so instead used a rusty hanger.");
ar.push("(sender) came in like a mystical being of awesomeness and destroyed (1)!");
ar.push("(1) drowned whilst trying to escape from (sender)");
ar.push("(1) walked into a cactus while trying to escape from (sender)");
ar.push("(1) was attacked by (sender) behind a Taco Bell restaurant.");
ar.push("(sender) went back in time to prevent himself from killing (1), apparently the time machine landed (1) when (sender) jumped back in time.");


if ($.inidb.get("kills", "num_kills") == null || $.inidb.get("kills", "num_kills") == 0 ) {
        
    $.inidb.set("kills", "num_kills", ar.length);
    for (var i=0; i< ar.length; ++i) {
        $.inidb.set('kills', 'kill_' + i, ar[i]);
    }
}

setTimeout(function(){ 
    if ($.moduleEnabled('./commands/killCommand.js')) {
        $.registerChatCommand("./commands/killCommand.js", "kill");
    }
},10*1000);
