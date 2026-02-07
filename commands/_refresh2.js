/*CMD
  command: /refresh2
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

let time = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"})
var dt = Libs.DateTimeFormat.format(time, "dd/mm/yyyy");
var tm = Libs.DateTimeFormat.format(time, "h:MM:ss T");
var tt = "🕰 _Current Time: _*"+tm+"M*\n\n📅 _Current Date:_ *"+dt+"*"
var msg_id = request.message.message_id
var cid = params
Api.editMessageText({
chat_id: cid,
message_id: msg_id,
text: tt,
reply_markup: {
    inline_keyboard: [
      [{ text: "🔄 Refresh", callback_data: "/refresh2 "+params}]
    ] 
 },
parse_mode: "Markdown"
})
