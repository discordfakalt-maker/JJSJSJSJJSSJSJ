import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'tech',
    aliases: ['stack', 'wappalyzer'],
    description: 'Rileva tecnologie usate',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /tech example.com');
            return;
        }
        
        const url = args[0].replace(/^https?:\/\//, '');
        
        await msg.reply(`
🔧 *TECHNOLOGY DETECTION*

🌐 Target: ${url}

🛠️ Rilevamento:
├─ CMS (WordPress, Joomla, etc)
├─ Framework (React, Vue, etc)
├─ Server (Apache, Nginx, etc)
├─ Analytics (GA, etc)
├─ CDN & Hosting
└─ Linguaggi di programmazione

🔗 Analisi: https://builtwith.com/${url}

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
