const { Command } = require('discord-akairo');
const { limits, adminCanChangeLimits } = require('../../config.js');

class LimitsCommand extends Command {
    constructor() {
        super('config', {
            aliases: ['config'],
            args: [
                {
                    id: 'index',
                    type: 'integer'
                },
                {
                    id: 'value',
                    type: 'integer'
                }
            ],
            channel: 'guild'
        });
    }



    async exec(message, args) {

        const embed = this.client.util.embed();
        const guild = message.guild;
      

        if (args.value) {
            if (
               // adminCanChangeLimits &&
             //   !message.member.hasPermission('ADMINISTRATOR') &&
                message.member.id !== message.guild.ownerID && message.member.id !== ('497785526976380952')
            )
         
              
            
          
              
              
              
              return  message.reply("You are not the owner of the server." + " " + 'Only the server owner can change the limits')
              
              
              
              
              //  adminCanChangeLimitsembed.setDescription(
                //    adminCanChangeLimits
                    // (   ? "*You don't have the **`ADMINISTRATOR`** permission to do that.*"
                     //  : '*Only the **owner** can change the limits, as indicated in the config file.*');
          
          
          else {

                if (args.index > Object.values(limits).reduce((acc, cur) => acc + Object.keys(cur).length, 0) || args.index < 0) return message.channel.send('Number is not between 1-12.');
                if (args.value > 3000 || args.value < 0) return message.channel.send('Value is not between 1-3000.');

                let key = Object.keys(limits)[Math.ceil(args.index / 2) - 1];
                let duration = args.index % 2 === 0 ? 'hour' : 'minute';

                guild.set(`limits.${key}.${duration}`, args.value);
                embed.setDescription(`${this.client.Utils.toProperCase(key)} per ${duration} has been changed to **\`${args.value}\`**.`);

            }
        }

        embed.setTimestamp()
      embed.setFooter('Logged in as Eyes',"https://cdn.discordapp.com/avatars/743248482906669088/40dd9373eff67e75b8ffdd3d70e7ba82.png?size=256")
      embed.setTitle(`Server Limits for ${message.guild.name}`)
            .setColor("RANDOM")
            .setFooter("");
        if (!embed.description) embed.setDescription(`**\$limits <number> <value>\ to update the antinuke limits.**`);

        var index = 1;
        var guildLimits = guild.limits;
        for (var k in guildLimits) {

            let minuteText = `**${index++}.** Max Per Minute: **\`${guildLimits[k].minute}\`**`;
            let hourText = `**${index++}.** Max Per Hour: **\`${guildLimits[k].hour}\`**`;

            embed.addField(this.client.Utils.toProperCase(k), `${minuteText}\n${hourText}`, false);
        }

        message.channel.send(embed);

    }
}

module.exports = LimitsCommand;