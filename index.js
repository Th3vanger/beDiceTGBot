const { Composer } = require('micro-bot');
const fs = require('fs')
const bot = new Composer()

//method for invoking start command
 
bot.command('start', ctx => {
//     console.log(ctx.from)
//     ctx.reply('start vez');
//     const https = require('https');

//     https.get('https://cf-dice.herokuapp.com/dice/airc/roll', (resp) => {
//     let data = '';

//     // A chunk of data has been received.
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });

//     // The whole response has been received. Print out the result.
//     resp.on('end', () => {
//         console.log(JSON.parse(data).explanation);
//         console.log(data);
//         ctx.replyWithPhoto({ url: 'https://cf-dice.herokuapp.com/uploads/small_Heavy_b93fa6f364.jpeg' })
//         //ctx.reply(JSON.parse(data));
//     });
  
//     }).on("error", (err) => {
//         ctx.reply(' unlucky vez ');
//   console.log("Error: " + err.message);
//     });
    
})


bot.command('airc', ctx => {
    console.log(ctx.from)
    ctx.reply('airc vez');
//     const https = require('https');

//     https.get('https://cf-dice.herokuapp.com/dice/airc/roll', (resp) => {
//     let data = '';

//     // A chunk of data has been received.
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });

//     // The whole response has been received. Print out the result.
//     resp.on('end', () => {
//         console.log(JSON.parse(data).explanation);
//         console.log(data);
//         ctx.replyWithPhoto({ url: 'https://cf-dice.herokuapp.com/uploads/small_Heavy_b93fa6f364.jpeg' })
//         //ctx.reply(JSON.parse(data));
//     });
  
//     }).on("error", (err) => {
//         ctx.reply(' unlucky vez ');
//   console.log("Error: " + err.message);
//     });
    
})

bot.hears('hi', (ctx) => ctx.reply('Hey there'))

//method to start get the script to pulling updates for telegram 

//bot.launch();
module.exports = bot