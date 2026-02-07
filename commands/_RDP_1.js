/*CMD
  command: /RDP_1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var message_id = request.message.message_id
  var chat_id = request.message.chat.id




var but = [
  [
    { text: "Confirm", callback_data: "/RDP_2"},    { text: "Cancel", callback_data: "🖥️ RDP" }]]


Api.editMessageText({
    message_id: message_id,
    text:
    "*🎁For Exchange Points to VPS :-\n🖲Please Click on Comfirm*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard:  but

  },
  disable_web_page_preview: true
})
