/*CMD
  command: 🖥️ RDP
  help: 
  need_reply: false
  auto_retry_time: 
  folder: RDP 4GB

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")

var but = [
  [
    { text: " 4GB RDP", callback_data: "/RDP_1" }],[{ text: " 8GB RDP", callback_data: "/USA_1" }]]

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id
  Api.editMessageText({
  message_id: message_id,
  text:
    "*📨You Can Exchange Your Point to RDP  ⚡.\n\n💰Your Balance " +
    balance.value() +
    " Points.\n\n🔄Exchange Point to ~\n👉 4GB   RDP LIFTIME  [ 70 Point / only 30 MINUTES ].\n👉 Minimum 8 Gb ram rdp [ 579 Point ].*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: but
  },
  disable_web_page_preview: true
})
return
}




Api.sendMessage({
  message_id: message_id,
  text:
    "*📨You Can Exchange Your Point to RDP  ⚡.\n\n💰Your Balance " +
    balance.value() +
    " Points.\n\n🔄Exchange Point to ~\n👉🇻🇳4GB RDP LIFETIME  [ 88 Point ].\n👉USA RDP (32GB) 🖥️ [ 560 Point ].*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: but
  },
  disable_web_page_preview: true
})
