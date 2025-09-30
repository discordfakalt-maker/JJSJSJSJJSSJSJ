import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'sitemap',
    description: 'Cerca sitemap del sito',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /sitemap example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🗺️ *SITEMAP FINDER*

🌐 Target: ${domain}

📍 Locations comuni:
├─ https://${domain}/sitemap.xml
├─ https://${domain}/sitemap_index.xml
├─ https://${domain}/sitemap1.xml
└─ https://${domain}/sitemap.txt

🔍 La sitemap rivela:
• Struttura del sito
• URL nascoste
• Pagine importanti

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
