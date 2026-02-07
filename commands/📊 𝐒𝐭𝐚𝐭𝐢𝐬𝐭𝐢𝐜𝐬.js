/*CMD
  command: 📊 𝐒𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬
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

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
var stat = Bot.getProperty("" + user.telegramid + "?Ban")
if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
} else {
  var payouts = Libs.ResourcesLib.anotherChatRes("payouts", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  var stats =
    "<b>📊 Bᴏᴛ Lɪᴠᴇ Sᴛᴀᴛs 📊\n\n📤 Tᴏᴛᴀʟ Pᴀʏᴏᴛs : "+payouts.value().toFixed(2)+" 🪙\n\n💡 Tᴏᴛᴀʟ Usᴇʀs: "+status.value().toFixed(0)+" User(s)</b>"

  Api.sendMessage({
    text:stats, 
    parse_mode:"html", 
    disable_web_page_preview: true
  })
}
