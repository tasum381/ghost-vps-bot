/*CMD
  command: ppp
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

if (!user) { return }

if (!message) { return }

if (!request.reply_to_message) { return }

// User can get points with reply "[numeric]"
if (!isNumeric(message)) { return }

if(request.reply_to_message.from.username==bot.name){
  Bot.sendMessage("I don't need your BB Points 😅")
  return
}


if(request.sender_chat&&
   (request.sender_chat.type == "channel")){
    Bot.sendMessage("You can't transfer your bb point as channel!")
    return
}

if(request.reply_to_message.sender_chat&&
  (request.reply_to_message.sender_chat.type == "channel")){
    Bot.sendMessage("You can't transfer your bb point to a channel.")
    return
}

Bot.run({
  command: "transfer",
  options: {
    message: parseInt(message),
    reply_to_message: request.reply_to_message
  }
})

