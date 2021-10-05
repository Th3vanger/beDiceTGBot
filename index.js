const { Composer } = require('micro-bot');

const bot = new Composer()
//const bot = new Telegraf('2090668934:AAGyXIOia3YiNQGhKzRM2ZPIqpBmdX2oiao');
//method for invoking start command
 
bot.command('start', ctx => {
    console.log(ctx.from)
    ctx.reply('hello there! Welcome to my new telegram bot. ' + ctx.chat.id)
})


//method to start get the script to pulling updates for telegram 

//bot.launch();
module.exports = bot