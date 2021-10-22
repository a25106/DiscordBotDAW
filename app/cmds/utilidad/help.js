const Discord = require("discord.js");
const { Permissions } = require("discord.js");
module.exports = {
  config: {
    nombre: "help",
    alias: ["ayuda"]
  },
  run: async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("❓ MENÚ DE AYUDA ❓")
  .setDescription("**!crear** → Sirve para crear un canal, tanto de voz como de texto, en una asignatura específica\n\n**!añadir** → Sirve para añadir a una persona a un canal del que seas propietario\n\n**!remover** → Sirve para remover a una persona de un canal del que seas propietario\n\n**!calendario** → Muestra el calendario de eventos (exámenes, trabajos, hackathones...)")
  .setThumbnail("https://yt3.ggpht.com/ytc/AKedOLRb6tkzwHpIfL0-1Ly97OXVq106M-fbzIJAm8kj=s900-c-k-c0x00ffffff-no-rj")
  .setColor("RANDOM")
  .setFooter("Si necesitas más ayuda, contacta con Toskan4134")
  message.channel.send(embed)
  
  }}