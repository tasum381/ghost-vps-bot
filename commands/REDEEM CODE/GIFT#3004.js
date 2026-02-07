/*CMD
  command: GIFT#3004
  help: 
  need_reply: false
  auto_retry_time: 
  folder: REDEEM CODE

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let cur = Bot.getProperty("cur")
let key = Bot.getProperty("Chan")
let gift = User.getProperty("gift")
var tt = options.myData
Bot.setProperty("Code=" + tt, gift, "integer")
var fg =
  "*❤️‍🔥 New Redeem Code Created ❤️‍🔥\n━━━━━━━━━━━━━━━━━━\n💛 Code:* " +
  tt +
  "\n*💲Amount:* "+
  cur +
  " *" +
  gift +
  "\n✅ Redeem Fast\n━━━━━━━━━━━━━━━━━━\n➡️ Redeem Here @" +
  bot.name +
  "*"
Api.sendMessage({
  chat_id: key,
  text: fg,
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "☁️ Redeem Now", url: "https://t.me/" + bot.name }]
    ]
  }
})
