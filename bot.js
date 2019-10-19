const Discord = require('discord.js');
const client = new Discord.Client();
let activenum = 0;

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: ' Azmain ',
            type: "Working",
            url: "https://www.facebook.com/funfact.bd.official/"
        }
    });
});

client.on("message", function(message) {
	if(message.content.toLowerCase() == "!dmall") {
		console.log("starting")
		client.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`Attempting to DM through selfbot API`)
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send(` TEST `)
	
		});
	}
	});

client.login(process.env.token);