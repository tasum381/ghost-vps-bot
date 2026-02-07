/*CMD
  command: uchat
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*✏️ Now send the Chat id  of User to send him a Message*


  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var wa = message

  User.setProperty("uchat", wa, "uchat")
  Api.sendMessage({
    text: "🗂<b> User Chat id is:</b>\n<code>" + message + "</code>",
    parse_mode: "html"
  })
  Bot.runCommand("uchat1")
