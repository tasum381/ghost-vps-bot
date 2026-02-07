/*CMD
  command: Admin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send id

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var waa = message

  User.setProperty("admin", waa, "string")
  Api.sendMessage({
    text: "🗂<b> Admin Set To:</b>\n<code>" + message + "</code>",
    parse_mode: "html"
  })
  
