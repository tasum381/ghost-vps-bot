/*CMD
  command: GiveAway
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter amount :-*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if ((user.telegramid == 5949195024) | (user.telegramid == 5949195024)){
    let amount = Bot.setProperty("amount", message, "string")
    Bot.getProperty("amount")
    Bot.runAll({
      command: "/balanceadding"
    })
  } else {
    Bot.sendMessage("❌ You Are Not An Admin")
  }
