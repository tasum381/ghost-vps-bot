/*CMD
  command: Broadcast 📣
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send message

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if ((user.telegramid == 6898803735) | (user.telegramid == 6898803735)){
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*🚀 Message Sended To All Users*")
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
