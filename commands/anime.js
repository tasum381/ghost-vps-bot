/*CMD
  command: anime
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

var anime = JSON.parse(content).url;

var button = [[{ text: "🔎 Generate Random Anime", callback_data: "/anime" }]]
Api.sendPhoto({
  chat_id: "@chatxshat",
  media: { 
    type: "photo", 
    media: "" + anime + "",
    caption: "Enjoy ✨"
  },
  parse_mode: "markdown",
  disable_web_page_preview: false,
  reply_markup: { inline_keyboard: button }
})
