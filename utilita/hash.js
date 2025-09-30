import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'hash',
    aliases: ['md5'],
    description: 'Calcola l\'hash di un testo',
    category: 'utilita',
    
    async execute(msg, args, client) {
        if (!args.join(' ').trim()) {
            await msg.reply('❓ Inserisci del testo per calcolare l\'hash!\nEsempio: /hash password123');
            return;
        }
        const textToHash = args.join(' ');
        
        // Simple hash function (for demo)
        let hashValue = 0;
        for (let i = 0; i < textToHash.length; i++) {
            const char = textToHash.charCodeAt(i);
            hashValue = ((hashValue << 5) - hashValue) + char;
            hashValue = hashValue & hashValue;
        }
        
        await msg.reply(`🔗 *CALCOLO HASH*\n\n📝 Testo: ${textToHash}\n#️⃣ Hash: \`${Math.abs(hashValue).toString(16)}\`\n\nℹ️ Questo è un hash semplificato per demo\n\n${BOT_CONFIG.poweredBy}`);
    }
};
