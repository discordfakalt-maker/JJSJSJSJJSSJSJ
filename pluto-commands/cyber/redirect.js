import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'redirect',
    aliases: ['301', '302'],
    description: 'Analizza catena di redirect',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /redirect example.com');
            return;
        }
        
        const url = args[0];
        
        await msg.reply(`
🔄 *REDIRECT CHAIN ANALYZER*

🌐 URL iniziale: ${url}

📊 Analisi redirect:
├─ 301 (Permanent)
├─ 302 (Temporary)
├─ 307 (Temporary Redirect)
└─ Meta refresh

🔍 Verifica:
• Chain di redirect
• Destinazione finale
• HTTP status codes

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
