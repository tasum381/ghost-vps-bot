const TelegramBot = require('node-telegram-bot-api');
const Store = require('./runtime/Store');
const Loader = require('./runtime/Loader');
const BJS = require('./runtime/BJS');

// Bot token
const TOKEN = '8435237295:AAFQWfz2__zYt03Ylhq4Cnjv_od-CW9ARKM';

// Initialize
const bot = new TelegramBot(TOKEN, { polling: true });
const store = new Store();
const loader = new Loader();

console.log('🤖 Ghost VPS Bot is running...');
console.log('📦 Loaded', Object.keys(loader.getAllCommands()).length, 'commands');

// Session management for need_reply
const sessions = {};

// Handle text messages
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const text = msg.text || '';

    // Check if user has a pending reply session
    if (sessions[userId]) {
        const pendingCommand = sessions[userId];
        delete sessions[userId];

        const bjs = new BJS(bot, store, msg, sessions);
        await bjs.executeCommand(pendingCommand.code);
        return;
    }

    // Map keyboard button text to commands
    // Map keyboard button text to commands
    const buttonToCommand = {
        '💰 Balance': '💰𝐁𝐚𝐥𝐚𝐧𝐜𝐞',
        '🔥 Invite': '🔥 𝐈𝐧𝐯𝐢𝐭𝐞',
        '💔 𝐀𝐝𝐦𝐢𝐧': '/admin',
        '👑 Admin': 'Admin 👑',
        '💳 Redeem': '💳 𝐑𝐞𝐞𝐝𝐞𝐦 𝐂𝐨𝐝𝐞',
        '🎁 Mystery Gift': 'MYSTERY GIFT 🎁',
        'NETFLIX 🔴': 'YT471',
        '🖥️ RDP': '🖥️ RDP',
        '💫 Updates': '𝐔𝐩𝐝𝐚𝐭𝐞 💫',
        '📊 Statistics': '📊 𝐒𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬',
        '☎️ Support': '☎️ 𝐒𝐮𝐩𝐩𝐨𝐫𝐭',
        'More ➡️': 'More ➡️',
        '⬅️ Back': '/mainmenu'
    };

    let commandName = text;

    // Check for command (slash or mapped button)
    if (text.startsWith('/')) {
        commandName = text.split(' ')[0];
    } else if (buttonToCommand[text]) {
        commandName = buttonToCommand[text];
    } else {
        // Not a command, ignore
        return;
    }

    const command = loader.getCommand(commandName);

    if (command) {
        if (command.needReply) {
            sessions[userId] = command;
            // Send the answer prompt if it exists
            if (command.answer) {
                bot.sendMessage(chatId, command.answer, { parse_mode: 'Markdown' });
            }
            return; // Stop execution here, wait for reply
        }

        const bjs = new BJS(bot, store, msg, sessions);
        await bjs.executeCommand(command.code);
    }
});

// Handle callback queries (inline keyboard buttons)
bot.on('callback_query', async (query) => {
    const msg = query.message;
    const data = query.data; // e.g., "/add_rdp_info 4"

    // Extract command name and params
    const parts = data.split(' ');
    const commandName = parts[0];
    const params = parts.slice(1).join(' ');

    // Create a synthetic message for callback
    const syntheticMsg = {
        ...msg,
        from: query.from,
        text: data,
        callback_query_id: query.id
    };

    const command = loader.getCommand(commandName);
    if (command) {
        const bjs = new BJS(bot, store, syntheticMsg, sessions);
        bjs.params = params; // Set params directly
        await bjs.executeCommand(command.code);
    } else {
        // Answer callback query if no command found
        bot.answerCallbackQuery(query.id);
    }
});

// Error handling
bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});

process.on('SIGINT', () => {
    console.log('\n👋 Shutting down bot...');
    bot.stopPolling();
    process.exit(0);
});
