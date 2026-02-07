/*CMD
  command: 𝐑𝐚𝐭𝐞 ☄️
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
var alreadysent = User.getProperty("alreadysent")

var button = [[{title :"❤❤❤❤❤",command: "/rate  ❤❤❤❤❤"}],[{title : "🧡🧡🧡🧡",command :"/rate  🧡🧡🧡🧡"}],[{title:"💚💚💚",command:"/rate 💚💚💚"}],[{title:"💙💙",command:"/rate 💙💙"}],[{title:"🖤",command:"/rate🖤"}]]

Bot.sendInlineKeyboard(button,

  "*🤝 Please Rate Us :  @"+ bot.name + "*")
