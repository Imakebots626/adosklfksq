const { Command } = require('discord-akairo');
const now = new Date();

class InfoCommand extends Command {
    constructor() {
        super('info', {
            aliases: ['help info', 'info'],
            channel: 'guild'
        });
    }

    async exec(message) {

      const Discord = require ('discord.js')
    //   const embed = new Discord.MessageEmbed();
      
      const embed = this.client.util.embed().setColor("#000000");
 


      
      embed.setColor('RANDOM')
      embed.addField("**Info commands**","Whois\nUptime\nServerinfo\nServ-roles\nPoll\nPeth\nPbtc\nChannels\nAbout");
      
      embed.setTimestamp()
      embed.setFooter('Logged in as Eyes',"https://cdn.discordapp.com/avatars/743248482906669088/40dd9373eff67e75b8ffdd3d70e7ba82.png?size=256")
      embed.setThumbnail("https://cdn.discordapp.com/attachments/739956421583569026/740420727257170000/image6.gif")
   
    //  embed.setThumbnail("https://cdn.discordapp.com/attachments/713800782952267856/722691138598862908/JPEG_20200616_195258.jpg")
      
        
      
      

        message.channel.send(embed);

    }
}

module.exports = InfoCommand