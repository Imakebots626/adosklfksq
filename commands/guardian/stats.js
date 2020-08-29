const { Command } = require('discord-akairo');

class StatsCommand extends Command {
    constructor() {
        super('stats', {
            aliases: ['stats'],
            args: [
                {
                    id: 'ID'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, args) {
        const embed = this.client.util
            .embed()
            .setColor('RANDOM')
            .setTitle(
                `Stats for ${message.guild.name} ${
                    args.ID
                        ? `by ${this.client.users.cache.get(args.ID).tag}`
                        : ''
                }`
            );

        let actions = message.guild.getActions(
            10000,
            args.ID
                ? i =>
                      i.executor.id === args.ID ||
                      (i.target && i.target.id === args.ID)
                : undefined
        );

        let description = '';

        for (var k in actions)
            description += `**${actions[k].name}: \`${
                (actions[k].actions || '').split('\n').length - 1
            }\`**\n`;

        message.channel.send(
            embed.setDescription(
                `${description}`
            )
        );
    }
}

module.exports = StatsCommand;
