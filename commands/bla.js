/*CMD
  command: bla
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

var url = "https://smmmain.com/api/v2?key=3ab8d7d0c5435af8cd2d770e75781f63&action=balance"

HTTP.get({
  url: url,
  success: "k"
  })
