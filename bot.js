var TelegramBot = require('node-telegram-bot-api');

var BOT_TOKEN = 'your-bot-token-provided-by-botfather';
var bot = new TelegramBot(BOT_TOKEN, {polling: true});

bot.onText(/\/help/, function (msg) {
  console.log('/help');
  bot.sendMessage(msg.chat.id, getUseage(), {
    parse_mode: 'Markdown'
  });
});

bot.onText(/\/stuff/, function (msg) {
  console.log('/stuff');
  bot.sendMessage(msg.chat.id, stuff(), {
    parse_mode: 'Markdown'
  });
});


function stuff() {
  console.log('/stuff');

  return 'I do stuff';
}


function getUseage() {
  var help = '*/help* - list available commands';
  var list = '*/stuff* - do stuff defined in my stuff method';

  return  [
    help,
    list
  ].reduce(function (last, match) {
    return last + ' \n ' + match;
  });
}
