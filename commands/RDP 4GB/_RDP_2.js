/*CMD
  command: /RDP_2
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

let balance = Libs.ResourcesLib.userRes("balance")
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var button = [[{ title: "<Back", command: "/RDP_1"}]]
if (balance.value() < 88) {
  Bot.sendInlineKeyboard(
    button,
    "🚫 You Need 88 Points For Exchanging .\n👬 Refer More to Earn ."
  )
  return
}



Bot.sendMessage("*🔁 Order Processing*", {
  on_result: "/RDP_GEN",
  is_reply: false
})
