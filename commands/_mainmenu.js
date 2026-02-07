/*CMD
  command: /mainmenu
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

var refAmount = parseFloat(8) //Per Refer Amount You want to Add to Referrer
var userStat = User.getProperty("userStatus")

if (!userStat | (userStat == "left")) {
  Bot.runCommand("/start")
  return
} else if (
  (userStat == "member") |
  (userStat == "administrator") |
  (userStat == "creator")
) {
  var referCount = User.getProperty("ReferStatus")
  if (referCount == undefined) {
    let refUser = RefLib.getAttractedBy()
    if (refUser) {
      var refbal = Libs.ResourcesLib.anotherUserRes(
        "balance",
        refUser.telegramid
      )
      refbal.add(refAmount)
      Api.sendMessage({
        chat_id: refUser.telegramid,
        text:
          "You have received 8 points from "+user.first_name+"",
        parse_mode: "html"
      })
      User.setProperty("ReferStatus", "valid", "string")
    }
  }
  
  if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}

  Bot.sendKeyboard(
    "💰𝐁𝐚𝐥𝐚𝐧𝐜𝐞,🔥 𝐈𝐧𝐯𝐢𝐭𝐞\n 💔 𝐀𝐝𝐦𝐢𝐧,💳  Redeem, THE MYSTERY GIFT 🧧\nNETFLIX 💦 ,🖥️ RDP,\n𝐔𝐩𝐝𝐚𝐭𝐞 💫",
    "*🏡 Welcome To Main Menu*"
  )
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Welcome To Our Bot 👾",
  show_alert: true // or false - for alert on top
})

}
var refAmount = parseFloat(6) //Per Refer Amount You want to Add to Referrer
var userStat = User.getProperty("userStatus")

if (!userStat | (userStat == "left")) {
  Bot.runCommand("/start")
  return
} else if (
  (userStat == "member") |
  (userStat == "administrator") |
  (userStat == "creator")
) {
  var referCount = User.getProperty("ReferStatus")
  if (referCount == undefined) {
    let refUser = RefLib.getAttractedBy()
    if (refUser) {
      var refbal = Libs.ResourcesLib.anotherUserRes(
        "balance",
        refUser.telegramid
      )
      refbal.add(refAmount)
      Api.sendMessage({
        chat_id: refUser.telegramid,
        text:
          "You have received 7 points from "+user.first_name+"",
        parse_mode: "html"
      })
      User.setProperty("ReferStatus", "valid", "string")
    }
  }
  
  if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}

  Bot.sendKeyboard(
    "💰𝐁𝐚𝐥𝐚𝐧𝐜𝐞,🔥 𝐈𝐧𝐯𝐢𝐭𝐞\nAdmin 👑, THE MYSTERY GIFT 🧧,💳  Redeem\nNETFLIX ❄️ ,🖥️ RDP,\n𝐔𝐩𝐝𝐚𝐭𝐞 💫",
    "*🏡 Welcome To Main Menu*"
  )
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Welcome To Our Bot 👾",
  show_alert: true // or false - for alert on top
})

}
