/*CMD
  command: /main_settings
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ai2 = Bot.getProperty("adminID")
if (user.telegramid == 6588857929) {
  var botn = [
    [
      { text: "📌 Currency ", callback_data: "/setcur" },
      { text: "👛 Set Channel", callback_data: "/setchannel" }
    ],
   
    [{ text: "⬅️ Back", callback_data: "/admin" }]
  ]

  var up =
    '<a href="' +
    "tg://user?id=" +
    user.telegramid +
    '">' +
    user.first_name +
    "</a>" +
    "<b> Select an Option That You want To Manage Your Bot</b>"

  Api.editMessageText({
    message_id: request.message.message_id,
    text: up,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: botn }
  })
} else {
  Bot.sendMessage(" ")
}
