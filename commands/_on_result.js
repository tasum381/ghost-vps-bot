/*CMD
  command: /on_result
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

var text = ""
for(var i in params.split("")){

Api.editMessageText({
message_id: options.result.message_id,
text: text + params.split("")[i] + "|"
})

Api.editMessageText({
message_id: options.result.message_id,
text: text + params.split("")[i] 
})
text += params.split("")[i]
}
