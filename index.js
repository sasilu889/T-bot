require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// ✅ .env file එකේ තියෙන token එක load කරනවා
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '👋 හෙලෝ! මං ඔයාගේ Telegram බොට් එක.');
});

// echo all other messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text !== '/start') {
    bot.sendMessage(chatId, `📩 ඔබ කිව්ව දේ: ${text}`);
  }
});
