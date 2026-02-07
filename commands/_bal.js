/*CMD
  command: /bal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if ((user.telegramid == 6588857929) | (user.telegramid == 6588857929)){
  if (params) {
    var spi = params.split(" ")
    var k1 = spi[0]
    var k2 = spi[1]

    let bal = Libs.ResourcesLib.anotherUserRes("balance", k1)
    bal.add(parseFloat(k2))
    Bot.sendMessage("💰Amount Added Successfully.\n\nDetails Below")
    Bot.sendMessage(
      "*🆔 User Id :-* " +
        k1 +
        "\n\n*💰Amount Added:- *" +
        k2 +
        "\n\n💰 Balance   :- " +
        bal.value()
    )
    Bot.sendMessageToChatWithId(
      k1,
      "*🆔 User Id :-* " +
        k1 +
        "\n\n*💰Amount Added:- *" +
        k2 +
        "\n\n💰 Balance   :- " +
        bal.value()
    )
  }else{
Bot.sendMessage("*Kindly add like:*\n\n/bal user_id amount")
}}
