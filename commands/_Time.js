/*CMD
  command: /Time
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter channel username 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(!message.includes("@")){
Bot.sendMessage("")
var tt = "❌ _Wrong Channel Username_\n\n✅ *Enter Channel User With @*\n\n🟢 *Example: @PluggerxH*"
var button = [[{ text: "♻️ Try Again", callback_data: "⏰Live Timer Post" }]]
Api.sendMessage({text: tt, reply_markup: { inline_keyboard : button }, parse_mode: "Markdown" })
return
}
let time = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"})
var dt = Libs.DateTimeFormat.format(time, "dd/mm/yyyy");
var tm = Libs.DateTimeFormat.format(time, "h:MM:ss T");
var tt = "*Region* = Asia/Kolkata\n🕰 _Current Time:_ *"+tm+"*M\n\n📅_ Current Date:_ *"+dt+"*"
var button = [[{ text: "🔄 Refresh", callback_data: "/refresh2 "+message+"" }]]
Api.sendMessage({
chat_id: message,
text: tt,reply_markup: { inline_keyboard : button }, parse_mode: "Markdown" })
Bot.sendMessage("✔️ Success Timer Sended \n\nCheck Now: "+message+"\n\n✅ Note :- Make Sure Bot Is Admin In "+message+"")
