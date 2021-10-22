module.exports = async (client, member) => {
  const Discord = require("discord.js");

  member.roles.add("892443367185731595");
  let toskan = await member.guild.members.fetch("356817504330448906");
  toskan.send(
    "Un nuevo usuario ha entrado al servidor\n\n**Nombre**: " +
      member.user.username +
      "\n**Tag**: " +
      member.user.tag +
      "\n**ID**: " +
      member.user.id
  );
};
