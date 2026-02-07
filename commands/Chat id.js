/*CMD
  command: Chat id
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

Api.sendMessage({
  text:
   "<b><a href='https://t.me/"+request.chat.username+"/"+request.message_id+"'>ᴍᴇssᴀɢᴇ ɪᴅ:</a></b> <code>" +
    request.message_id +
    "</code>\n<b><a href='tg://user?id="+user.telegramid+"'>ʏᴏᴜʀ ɪᴅ:</a></b> <code>"+user.telegramid+"</code>\n<b><a href='https://t.me/"+request.chat.username+"'>ᴄʜᴀᴛ ɪᴅ:</a></b> <code>" +
    request.chat.id +
    "</code>", 
    parse_mode: "html",
reply_to_message_id: request.message_id
});
