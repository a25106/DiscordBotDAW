module.exports = async (client, message) => {
  const config = require(`../../config.json`) //Llamamos la carpet config
  const prefix = config.prefix //Buscamos el elemento prefix en la carpeta config
    if(message.author.bot || message.channel.type === "dm") return; //Si el mensaje es por DM devuelve FALSE (O si es de un bot)

    let args = message.content.slice(prefix.length).trim().split(/ +/g); //Argumentos
    let cmd = args.shift().toLowerCase();//Cmd ejecutado

    if(!message.content.startsWith(prefix)) return; //Si no comienza por prefix devuelve false
    let commandfile = client.commands.get(cmd) || client.commands.get(client.alias.get(cmd))
    //obtenemos el contenido commands de la colección client (para que se a su alias)
    if(commandfile) commandfile.run(client, message, args)//SI tiene todo devolvera true ejecutado el cliente, mensaje y los argumentos
}