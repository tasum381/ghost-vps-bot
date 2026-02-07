/*CMD
  command: /balanceadding
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

var amount = 
Bot.getProperty("amount")
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(+amount)
Bot.sendMessage("_🤩 You have  Been Received " +amount+ "  🪙 From Administration_ \n*Reason : Giveaway*")
