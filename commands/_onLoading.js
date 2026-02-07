/*CMD
  command: /onLoading
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

var logo = JSON.parse(content).logo
if (logo) {
  Api.sendChatAction({
    chat_id: chat.chatid,
    action: "upload_photo"
  })
  Api.sendPhoto({
    photo: logo,
    caption: `<b>✨ Your Logo Generated! 
    

🤩 Join Group @chatxshat</>`,
    parse_mode: "html"
  })
  return
}
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Bot.sendMessage("*_❌ Some Error On External Api To Generate Logo._*")
