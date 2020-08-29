const { Command } = require('discord-akairo');
const { adminCanChangeLimits } = require('../../config.js');

class LoggingCommand extends Command {
    constructor() {
        super('log', {
            aliases: ['log'],
            args: [
                {
                    id: 'channel',
                    type: 'channel'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, args) {
        const embed = this.client.util.embed().setColor('8A2BE2');

        // Verify Permissions
        if (
            adminCanChangeLimits &&
            !message.member.hasPermission('ADMINISTRATOR') &&
            message.member.id !== message.guild.ownerID
        )
            return message.channel.send(
                embed.setDescription(
                    adminCanChangeLimits
                        ? "You don't have the administrator permission to do that."
                        : 'Only the owner can change the limits, as indicated in the config file.*'
                )
            );

        // Verify Input
        if (!args.channel) {
            const loggingChannel = message.guild.resolveChannel(
                message.guild.get(`logsChannelID`)
            );

            return message.channel.send(
                embed.setDescription(
                    (loggingChannel
                        ? `Currently logging in <#${loggingChannel.id}>, m`
                        : 'M') +
                        'ention a channel following the command to change the logs channel.'
                )
            );
        }

        // Update Logging Channel
        message.guild.set(`logsChannelID`, args.channel.id);
        message.channel.send(
            embed.setDescription(
                `Log channel changed to <#${args.channel.id}>`
            )
        );
    }
}

module.exports = LoggingCommand;
