/*CMD
  command: ☎️ 𝐒𝐮𝐩𝐩𝐨𝐫𝐭
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

Eɴᴛᴇʀ Tʜᴇ Mᴇssᴀɢᴇ Yᴏᴜ Wᴀɴᴛ Tᴏ Sᴇɴᴅ Tᴏ Aᴅᴍɪɴ :-
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendMessage({
        chat_id: "6588857929",
        text:
          "*New YT Premium request By user . \n\nUser ID = " +
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
        chat_id: "6588857929",
        text:
          "* New YT Premium request User. \n\n User ID = " +
          user.telegramid +
          "\nMail  address = " +
          message +
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
     
     Bot.sendMessage("Message sent successfully ✅.")
