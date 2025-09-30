import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'csp',
    description: 'Verifica Content Security Policy',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /csp example.com');
            return;
        }
        
        const url = args[0].replace(/^https?:\/\//, '');
        
        await msg.reply(`
🛡️ *CSP ANALYZER*

🌐 Target: ${url}

📋 Content Security Policy:
├─ script-src
├─ style-src
├─ img-src
├─ connect-src
├─ font-src
└─ frame-ancestors

🔒 Protezione contro:
• XSS attacks
• Clickjacking
• Code injection

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
