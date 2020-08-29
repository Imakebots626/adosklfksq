const { Command } = require('discord-akairo');

class AntinukeCommand extends Command {
    constructor() {
        super('antinuke', {
            aliases: ['antinuke', 'antiwizz', 'safety'],
            channel: 'guild'
        });
    }

    async exec(message) {

        const embed = this.client.util.embed().setColor("RANDOM");
        


      embed.setTimestamp()
      embed.setFooter('Logged in as Eyes',"https://cdn.discordapp.com/avatars/743248482906669088/40dd9373eff67e75b8ffdd3d70e7ba82.png?size=256")
      embed.setColor('RANDOM')
      embed.addField("**Antinuke commands**","Config\nRecently\nStats\nLog")
   //  embed.setAuthor('Setup Commands', "https://cdn.discordapp.com/attachments/713800782952267856/732474967513366569/CC_20200705_201504.png")

      embed.setThumbnail("https://cdn.discordapp.com/attachments/748006921491054663/748702729320398928/giphy_9.gif")


        message.channel.send(embed);

    }
}
    


module.exports = AntinukeCommand;
