/*CMD
  command: /joined2
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
let stat = Bot.getProperty(""+user.telegramid+"?Ban");

if (stat=="ban"){
  Bot.sendMessage("*You're Banned From Using The Bot ❌*");
}else{
  let channel = "@eibefx";
  let id = user.telegramid
  Api.getChatMember({ 
    chat_id : -1002117281562,
    user_id : id,
    on_result :"check2"
  })
}
