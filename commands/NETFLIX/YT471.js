/*CMD
  command: YT471
  help: 
  need_reply: true
  auto_retry_time: 
  folder: NETFLIX
  answer: Enter  Your fresh Mail address ✉️

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendMessage({
        chat_id: "6898803735",
        text:
          "* Netflix  own mail  request By user . \n\nUser ID = " +
          user.telegramid +
          "\n Mail * 👉 " +
          message +
          "\n\n👮🏻‍♂ *Bot* = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
     Api.sendMessage({
        chat_id: "6898803735",
        text:
          "*  Netflix mail  request User. \n\n User ID = " +
          user.telegramid +
          "\nMail  address = " +
          message +
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
     
     Bot.sendMessage("Mail  sent successfully ✅.")
