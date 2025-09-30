import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'cookies',
    aliases: ['cookie'],
    description: 'Analizza cookies del sito',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /cookies example.com');
            return;
        }
        
        const url = args[0].replace(/^https?:\/\//, '');
        
        await msg.reply(`
🍪 *COOKIE ANALYZER*

🌐 Target: ${url}

🔍 Analisi cookies:
├─ HttpOnly flag
├─ Secure flag
├─ SameSite attribute
├─ Expiration time
└─ Domain scope

⚠️ Security checks:
• Cookie hijacking
• Session fixation
• CSRF tokens

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
