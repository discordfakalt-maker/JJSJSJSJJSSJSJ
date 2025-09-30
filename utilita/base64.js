import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'base64',
    description: 'Codifica testo in Base64',
    category: 'utilita',
    
    async execute(msg, args, client) {
        if (!args.join(' ').trim()) {
            await msg.reply('❓ Inserisci del testo da codificare!\nEsempio: /base64 Ciao mondo');
            return;
        }
        const textToEncode = args.join(' ');
        const encoded = Buffer.from(textToEncode, 'utf8').toString('base64');
        await msg.reply(`🔢 *CODIFICA BASE64*\n\n📝 Testo: ${textToEncode}\n🔐 Base64: \`${encoded}\`\n\n${BOT_CONFIG.poweredBy}`);
    }
};
