/*CMD
  command: /succ
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

var data = JSON.parse(content)
var ans = data.answer
if (!ans) {
  Api.sendChatAction({
    chat_id: user.telegramid,
    action: "typing"
  })
  Bot.sendMessage("❌ Something Went Wrong. ")
  return
}
Api.sendChatAction({
  chat_id: user.telegramid,
  action: "typing"
})
Bot.sendMessage(ans)
