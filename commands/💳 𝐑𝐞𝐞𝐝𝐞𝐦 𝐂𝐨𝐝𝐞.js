/*CMD
  command: 💳 𝐑𝐞𝐞𝐝𝐞𝐦 𝐂𝐨𝐝𝐞
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter the code:-*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if ((message == "zara572")) {
Bot.sendMessage("🔐Access Granted")
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 12 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 You have already Claimed Code*");
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(60)
Bot.sendMessage(
  "*🎁 Congrats , You Received 60 🪙\nCheck Your Wallet*"
)
var group = "@profeib"
Api.sendMessage({
    chat_id: group, //admin telegram id here
    text:
      "➕ New User REDEEMED Bonus ➕\n\n👤User: href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      " "  })
} else {
  Bot.sendMessage("*🚫Acces Key Is Wrong*")
}

