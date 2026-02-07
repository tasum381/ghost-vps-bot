/*CMD
  command: meme
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

var meme = JSON.parse(content).url;

var button = [[{ text: "🔎 Generate Random Meme", callback_data: "/meme" }]]
Api.editMessageMedia({
  chat_id: "@Nmananank",
  message_id: "2",
  media: { 
    type: "photo", 
    media: "" + meme + "",
    caption: "🧑‍💻 Join :- @chatxshat"
  },
  parse_mode: "markdown",
  disable_web_page_preview: false,
  reply_markup: { inline_keyboard: button }
})
