const TicTacToe = require('discord-tictactoe');
const Discord = require('discord.js');
const client = new Discord.Client();
const game = new TicTacToe({ language: 'es' })
//Después de Alias es opcional.
module.exports = { 
    config: {
        nombre: "ttt",
        alias: ["tictactoe","3enraya","tresenraya","3t"]
         },
  run: async (client, message, args) => {
game.handleMessage(message)
  }}