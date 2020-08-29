const { Command } = require('discord-akairo');

class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix',],
            args: [
                {
                    id: 'prefix'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, args) {

        // Fetch the stored prefix
        const prefix = message.guild.prefix;

        // Return with the current prefix if none in arguments
        if (!args.prefix) return message.channel.send(`The prefix is currently *\*${prefix}\**\n`);

    }
}

module.exports = PrefixCommand;