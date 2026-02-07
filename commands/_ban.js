/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*📌Send Telegram User Id To Ban User*


  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "6765982465"
if ((user.telegramid == 6765982465) | (user.telegramid == 6765982465)){
Bot.setProperty(""+message+"" , "ban" , "string");
Bot.sendMessage("*🛑 User " +message+ " Has Been Banned Successfully*");
}else{
return
}
