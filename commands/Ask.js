/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
_💬 How Can I Help You ?_


  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*📩 Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(6235661736, "*📩 New Support Message From User 📩\n\n🤴🏻 User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n*💌 Message = "+message+"*")
