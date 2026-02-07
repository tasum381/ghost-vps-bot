/*CMD
  command: Meme
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

HTTP.get({ url:"https://nepcoder.apinepdev.workers.dev/random-meme",
  success:"meme"
})
