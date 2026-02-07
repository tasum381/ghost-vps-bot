/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*📌Send Telegram User Id To Unban User*


  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "6765982465"
if ((user.telegramid == 6765982465) | (user.telegramid == 6765982465)){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("*✅ User " +message+ " Has Been Unbanned Successfully*");
}else{
return
}
