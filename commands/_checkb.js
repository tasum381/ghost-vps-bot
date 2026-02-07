/*CMD
  command: /checkb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*📌Send User Telegram Id To Check User Balance*


  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (message=="🚫 Cancel"){
Bot.runCommand("🧑🏻‍💻Admin");
}else{
var id = message; 
var user_bal = Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("*💰User Balance = "+user_bal.value().toFixed(8)+"*")
}
