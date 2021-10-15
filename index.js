const { Composer } = require('micro-bot');
const fs = require('fs')
const bot = new Composer()
const site = "https://cf-dice.herokuapp.com/"
const https = require('https');
//method for invoking start command
const regex = new RegExp(/roll (.+)/i)
bot.hears(regex, (ctx) => { 
    var name = ctx.update.message.text.toLowerCase();
    name = name.substr ( name.indexOf('roll ') );
    name = name.replace('roll ', '');
    if( name.indexOf(' ') != -1 ){
        name = name.substr ( 0, name.indexOf(' ') );
    }
    const route = "dice/"+ name +"/roll"
    https.get(site + route, (resp) => {
        let data = '';
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
            var obj = JSON.parse(data);
                if( Object.keys(obj).length > 0 ){
                    var imageUrl = new URL(obj.image.formats.small.url, site).href 
                    
                    setTimeout(() => {  ctx.replyWithPhoto({ url: imageUrl }) }, 1600);
                }
            } catch (e) {
                ctx.replyWithDice();
                setTimeout(() => {   ctx.reply(obj.result) }, 1600);
               
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});



module.exports = bot