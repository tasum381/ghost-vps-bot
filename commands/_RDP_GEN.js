/*CMD
  command: /RDP_GEN
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var balance = Libs.ResourcesLib.userRes("balance")
let msg_id = options.result.message_id;
Bot.editMessage("⚙️ Generating Account Log ...\n⏰ Wait For 3  second ....",msg_id)
Bot.editMessage("⚙️ Generating Account Log ...\n⏰ Wait For 2  second ....",msg_id)
Bot.editMessage("⚙️ Generating Account Log ...\n⏰ Wait For 1  second ....",msg_id)
Bot.editMessage("⚙️ Generating Account Log ...\n⏰ Wait For 0  second ....",msg_id)
try{
var a = Bot.getProperty("Nf") == undefined ? 0:Bot.getProperty("Nf")
    var b = a + 1
    var N = "Bcc" + b
var C = Bot.getProperty(N) 
Bot.editMessage("*🛒 Order Successfully Completed..\n📧 RDP  Details:-\n🩸IP  :- *"+C.IP+"*\n⚡USER :- *"+ C.U+ " *\n🔐 PASSWORD :-*"+ C.P+ " *\n🎊Thanks For Using Our Bot🎊\n~After Login Must Give ScreenShot ♀️ To @ShadowCipher_Bot:\n* ",msg_id)
balance.add(-88)
Bot.setProperty("Nf", b, "integer")
}catch(err){
Bot.editMessage(
    "*🛒Sorry , This Product is out of stock .*\n_🪄 We will Inform You when it cames back._"
  ,msg_id)
}
