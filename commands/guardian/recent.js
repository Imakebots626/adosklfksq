const { Command } = require('discord-akairo');

class RecentCommand extends Command {
    constructor() {
        super('recent', {
            aliases: ['recently'],
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
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/attachments/727927775683543120/739152605585997865/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif")
            .setFooter('Logged in as Eyes',"https://cdn.discordapp.com/avatars/743248482906669088/40dd9373eff67e75b8ffdd3d70e7ba82.png?size=256")
            .setTitle(
                `Recent system actions in ${message.guild.name}. ${
                    args.ID
                        ? `by ${this.client.users.cache.get(args.ID).tag}`
                        : ''
                }`
            )
            .setDescription(
                `You can do recently <user_id> to view all actions related to the user with the user_id given.`
            );

        let actions = message.guild.getActions(
            10,
            args.ID
                ? i =>
                      i.executor.id === args.ID ||
                      (i.target && i.target.id === args.ID)
                : undefined
        );
        for (var k in actions)
            embed.addField(
                `${actions[k].name} (${
                    (actions[k].actions || '').split('\n').length - 1
                })`,
                actions[k].actions || 'No entries.'
            );

        message.channel.send(embed);
    }
}

module.exports = RecentCommand;
