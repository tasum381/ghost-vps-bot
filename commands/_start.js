/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: Must join this channel 🙂

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://i.pinimg.com/736x/9b/90/72/9b90721676f94b21c52a9040cf5a1090.jpg",
  caption: "☁️ *Join Our Channels To Start This Bot*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Main </>", url: "https://t.me/JONATHAN_X_BACK_2026" },
        { text: "Join ⚡", url: "https://t.me/Tech_FamilyBD" }
      ],
      [
        { text: "Folder 🗂️", url: "https://t.me/addlist/twev7U_Ejpg1OWNl" }
      ],
      [
        { text: "✅ Joined", callback_data: "/joined" }
      ]
    ]
  }
})

