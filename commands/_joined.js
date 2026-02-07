/*CMD
  command: /joined
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

let channels = [
  "@JONATHAN_X_BACK_2026",
  "@Tech_FamilyBD"
]

let joinedCount = 0
let total = channels.length

function checkDone() {
  if (joinedCount === total) {
    // ✅ user verified
    User.setProperty("joined", true, "boolean")

    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Verification Successful!",
      show_alert: false
    })

    Bot.sendMessage(
      "🎉 *Welcome!*\n\nYou have joined all required channels.",
      { parse_mode: "Markdown" }
    )

    Bot.runCommand("/mainmenu")
  }
}

channels.forEach(function (channel) {
  Api.getChatMember(
    {
      chat_id: channel,
      user_id: user.telegramid
    },
    function (res) {
      if (!res || res.status == "left" || res.status == "kicked") {
        Api.answerCallbackQuery({
          callback_query_id: request.id,
          text: "❌ Please join all channels first!",
          show_alert: true
        })
        return
      } else {
        joinedCount++
        checkDone()
      }
    }
  )
})

