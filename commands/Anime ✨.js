/*CMD
  command: Anime ✨
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

HTTP.get({ url:"https://nekos.life/api/v2/img/neko",
  success:"/unimage"
})
