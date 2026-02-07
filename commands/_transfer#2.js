/*CMD
  command: /transfer#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter amount 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
} else {
  var balance = Libs.ResourcesLib.userRes("balance")
  var tgid = options.tgid
  if (message > balance.value()) {
    Bot.sendMessage(
      "*⚠️ Insufficient Balance For This Transaction.\n\n👨‍💻 You Have Only " +
        balance.value() +
        " Candy 🍭*"
    )
  } else {
    if (message > 0) {
      var friend = Libs.ResourcesLib.anotherUserRes("balance", tgid)
      friend.add(+message)
      balance.add(-message)
      Bot.sendMessageToChatWithId(
        "" + tgid + "",
        "*You have just received " +
          message +
          " 🍭 from @" +
          user.username +
          "*"
      )
      Bot.sendMessage(
        "*The Amount Of " +
          message +
          "  🪙 Has Been Successfully Transfer To " +
          tgid +
          ".\n\n💵 Your Current Balance : " +
          balance.value() +
          " 🍭*"
      )
      return
    }
    if (message < 1) {
      Bot.sendMessage("_📛You Can Send Minimum 1  🪙 to your friend_")
      return
    }
  }
}
