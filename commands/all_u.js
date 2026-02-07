/*CMD
  command: all_u
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

var FullBotUser = Bot.getProperty("FullBotUser", "😞 No User")
Api.sendMessage({
  text: `<b>📊 List Of All User(s) In @${bot.name} Are Given Below. 
 
${FullBotUser}</b>`,
  parse_mode: "html"
})
// made by @Privates_Bots
