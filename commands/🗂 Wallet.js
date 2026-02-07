/*CMD
  command: 🗂 Wallet
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
var wallet = User.getProperty("wallet", "⛔ Not Set")
Api.sendMessage({
  text:" <b>💡 Your Currently Set Number Is: </b> "+wallet+"\n\n💹<i> It Will Be Used For All Future Withdrawals.</i>", 
  parse_mode:"html", 
  disable_web_page_preview: true, 
  reply_markup:{inline_keyboard: [[{text:"💠 Configure Wallet 💠", callback_data:"/setwallet"}]]}
});
