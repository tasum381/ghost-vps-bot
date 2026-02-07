/*CMD
  command: Add Balance➕
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Enter the amount of Points you want to add:-*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")

if ((user.telegramid == 5949195024) | (user.telegramid == 5949195024)) {
balance.add(parseFloat(message))
Bot.sendMessage("*🚀 Balance added*")
}else{
Bot.sendMessage("*🔰 You're Not An Admin\nMessage @vosco_x 🆓*")
}
