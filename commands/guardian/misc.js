const { Command } = require('discord-akairo');
const now = new Date();

class MiscCommand extends Command {
    constructor() {
        super('misc', {
            aliases: ['help misc', 'misc'],
            channel: 'guild'
        });
    }

    async exec(message) {

      const Discord = require ('discord.js')
    //   const embed = new Discord.MessageEmbed();
      
      const embed = this.client.util.embed().setColor("#000000");
        const prefix = message.guild.prefix;


      
  embed.setColor('RANDOM')
      embed.addField("**Misc commands**","Check-host\nHastebin\nIplookup\nUrban\nYoutube")
      embed.setTimestamp()
      embed.setFooter('Logged in as Eyes',"https://cdn.discordapp.com/avatars/743248482906669088/40dd9373eff67e75b8ffdd3d70e7ba82.png?size=256")
      embed.setThumbnail("https://cdn.discordapp.com/attachments/727927775683543120/748356497326473296/image0_13.gif")
        
      
      

        message.channel.send(embed);

    }
}

module.exports = MiscCommand