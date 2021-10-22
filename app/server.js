const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);

});

app.get("/discord",(req,res)=>{
    res.redirect("https://discord.gg/Kusr2RjHsa");
})

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const { Client, Collection } = require("discord.js");
const client = new Client();
// require("discord-buttons")(client);

["alias", "commands"].forEach(x => (client[x] = new Collection())); //Colocamos nuevas colecciones al Cliente
["comandos", "eventos"].forEach(x => require(`./handler/${x}`)(client)); //Hacemos un array con las carpetas que tendrá el handler NO TOCAR.

client.login(process.env.TOKEN);
