/*CMD
  command: /updateDone
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

let msg_id = options.result.message_id;
Bot.editMessage("*▰▱▱▱▱▱▱▱▱▱ 0%",msg_id)
Bot.editMessage("*▰▰▱▱▱▱▱▱▱▱ 10%*",msg_id)
Bot.editMessage("*▰▰▰▰▱▱▱▱▱▱ 28%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▱▱▱▱▱ 40%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▱▱▱▱ 47%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▱▱▱ 56%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▰▱▱ 67%_",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▱ 88%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▰ 100%*.",msg_id)
Bot.editMessage("*Update Completed*",msg_id)
Bot.runCommand("/start")
