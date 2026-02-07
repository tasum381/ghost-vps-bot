/*CMD
  command: /add
  help: 
  need_reply: false
  auto_retry_time: 
  folder: RDP 4GB

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "6898803735"
if ((user.telegramid == 6898803735) | (user.telegramid == 6898803735)){
if(params){
var n = Bot.getProperty("num")
function num(){
if(n == undefined){
return 1;
}else{
return n;
}}

var spi = params.split(":")
var k1 = spi[0]
var k2 = spi[1]
var k3 = spi[2]

  Bot.setProperty({
    name: "Bcc"+num(),
    value: { IP: k1, U: k2, P: k3 }
  })
Bot.setProperty("num",num()+1,"integer")
Bot.sendMessage(
  num()+" *RDP   SUCCESSFULY ADDED✅\n\nYOUR FREE RDP ⚡👇\n\nIP : " +
    k1 +
    " \nUser : " +
    k2 +
    "\nPASSWORD: " +
    k3+"\n\nModified BY - @FIF4_X*"
)
return}
Bot.sendMessage("Run Command In Format of \n\n /add ip:user:password")
}
