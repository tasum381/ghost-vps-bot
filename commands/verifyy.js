/*CMD
  command: verifyy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER
*YOU DIDN'T JOIN THIS CHANNEL❌*

_JOIN_ :- https://whatsapp.com/channel/0029VaAiWF1GJP8BXrSrSZ3j
  ANSWER
  keyboard: 🟢 Joined
  aliases: 
  group: 
CMD*/

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "MUST JOIN ALL THE CHANNELS ⚠️",
  show_alert: true // or false - for alert on top
})

