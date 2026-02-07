/*CMD
  command: /setcur
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Sent your type

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "6898803735"
if ((user.telegramid == 6898803735) | (user.telegramid == 6898803735)){
  Bot.setProperty("cur", "" + message + "")
  Bot.sendMessage("*Done*")
} else {
  Bot.sendMessage("")
}

