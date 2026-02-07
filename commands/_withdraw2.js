/*CMD
  command: /withdraw2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var maxwith = parseFloat(100) //Maximum Withdraw Anount in place of 15
var minwith = parseFloat(20) //minimum withdraw amount in place of 10
var channel = "" + user.telegramid + "" //channel username with "@"
var stat = Bot.getProperty("" + user.telegramid + "?Ban")
if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
} else {
  var payouts = Libs.ResourcesLib.anotherChatRes("payouts", "global")
  var user_link = Libs.commonLib.getLinkFor(user)
  var wallet = User.getProperty("wallet")
  var balance = Libs.ResourcesLib.userRes("balance")
  if (message < minwith) {
    Bot.sendMessage("_❌ Minimum Withdraw " + minwith + " INR_")
  } else if (message > maxwith) {
    Bot.sendMessage("❌ * Maximum Withdraw: " + maxwith + " Point*")
    return
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "❌ *Balance Not Enough!*\n🐝 _Enter Amount Below Or Equal to " +
          balance.value().toFixed(2) +
          " Point"
      )
    } else {
      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
      }
      var value = message
      if (!isNumeric(value)) {
        Bot.sendMessage(
          "*📛 Invaild value. Enter only numeric value. Try again*",
          {
            is_reply: true
          }
        )
        return
      }
      balance.remove(parseFloat(message))
      payouts.add(parseFloat(message))
      Bot.sendMessage(
        "*✅ Withdrawal Requested Successfully\n\n💳 Transaction Details = \n Link = " +
          message +
          " \n*Payment Channel : https://t.me/+UtfCFslVwjYzNzU0*\n*Support : https://whatsapp.com/channel/0029VaAiWF1GJP8BXrSrSZ3j* "
      )

      Api.sendMessage({
        chat_id: -1002062766451,
        text:
          "<b>🔋 New Withdraw Requested 🏦\n\n▪️ Status : Done ✅\n▪️ User :</b> <a href='tg://user?id=" +
          user.telegramid +
          "'>" +
          user.first_name +
          "</a><b>\n▪️ User ID : " +
          user.telegramid +
          "\n▪️ Link : " +
          message +
          " \nAmount =100\n▪️ User Referrals : " +
          RefLib.getRefCount()  +
          "\n\n💳 Address :\n " +
          wallet +
          "\n\n👮🏻‍♂️ Bot : @" +
          bot.name +
          "</b>",
        parse_mode: "html",
        disable_web_page_preview: true
      })
    }
  }
}
