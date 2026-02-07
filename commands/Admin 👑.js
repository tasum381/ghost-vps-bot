/*CMD
  command: Admin 👑
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

var key = "6898803735"
if ((user.telegramid == 6898803735) | (user.telegramid == 6898803735)){
var button = [[{title:"🎙 Broadcast",command:"Broadcast 📣"}],[{title:"🛑 Ban User",command:"/ban"},{title:"✅ Unban User",command:"/unban"}],[{title:"🎁 Make Gift Card",command:"/giftcard"}]]

Bot.sendInlineKeyboard(button,"*Hey " +user.first_name+ "\n\n♨️Welcome To The Admin Panel🧑🏻‍💻\n\n‼️Warning When Using This Panel Please Don't Send Any Other Command It May Spoil Your Work*")
}else{
Bot.sendMessage("❌You Are Not An Admin !")
}
