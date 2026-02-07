/*CMD
  command: 💰𝐁𝐚𝐥𝐚𝐧𝐜𝐞
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

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
var balance = Libs.ResourcesLib.userRes("balance")
Api.sendMessage({
  text: "<b>🙌🏻 User = "+user.first_name+"\n\n💰 Balance  = "+balance.value()+"  🪙 \n\n🪢 Invite To Earn More</b>",
  parse_mode:"html", 
  disable_web_page_preview: true
})
