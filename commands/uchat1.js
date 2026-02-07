/*CMD
  command: uchat1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _Now enter Message_ :-

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ans = User.getProperty("uchat")
Api.sendMessage({
        chat_id: ans,
        text:
          "*📄 New Message from Admin. \n\n👁️‍🗨️ *Message* 👉 " +
          message +
          "\n\n👮🏻‍♂ *Bot* = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
     
