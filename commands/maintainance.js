/*CMD
  command: maintainance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: maintainance

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "6230852162"
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("maintenanceu");
}else{
return
}
