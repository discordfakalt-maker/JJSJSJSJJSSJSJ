import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'cors',
    description: 'Verifica configurazione CORS',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /cors example.com');
            return;
        }
        
        const url = args[0].replace(/^https?:\/\//, '');
        
        await msg.reply(`
🌐 *CORS CHECKER*

🎯 Target: ${url}

🔍 Headers CORS:
├─ Access-Control-Allow-Origin
├─ Access-Control-Allow-Methods
├─ Access-Control-Allow-Headers
├─ Access-Control-Allow-Credentials
└─ Access-Control-Max-Age

⚠️ Misconfigurazioni:
• Wildcard con credentials
• Origin reflection
• Null origin

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
