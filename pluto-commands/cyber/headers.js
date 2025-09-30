import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'headers',
    description: 'Analizza gli headers HTTP di un sito',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /headers example.com');
            return;
        }
        
        const url = args[0].replace(/^https?:\/\//, '');
        
        await msg.reply(`
📡 *ANALISI HTTP HEADERS*

🌐 Target: ${url}
🔐 Security Headers
├─ X-Frame-Options
├─ X-Content-Type-Options
├─ Strict-Transport-Security
├─ Content-Security-Policy
└─ X-XSS-Protection

⚙️ Server Headers
├─ Server
├─ X-Powered-By
└─ Cookie Settings

🔗 Analisi completa: https://securityheaders.com/?q=${encodeURIComponent(url)}

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
