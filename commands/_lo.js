/*CMD
  command: /lo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send name :-

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let themes = [
"https://textpro.me/create-3d-liquid-metal-text-effect-1112.html",
"https://textpro.me/natural-leaves-text-effect-931.html",
"https://textpro.me/create-a-3d-rust-style-text-effect-online-1093.html",
"https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html",
"https://textpro.me/create-thunder-text-effect-online-881.html",
"https://textpro.me/break-wall-text-effect-871.html",
"https://textpro.me/neon-light-text-effect-online-882.html",
"https://textpro.me/create-artistic-typography-online-1086.htmlhttps://textpro.me/create-logo-joker-online-934.html",
"https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html"
] // you can also get themes from textpro.me and add in this array

let theme = themes[Math.floor(Math.random()* themes.length)]

HTTP.post({
  url: "https://textpro-logo-maker-api.imarman.repl.co/create",  
  body: { 
  "theme": theme,
  "text":message
},
success:"/success"
})

