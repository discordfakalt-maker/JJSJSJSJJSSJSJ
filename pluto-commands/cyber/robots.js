import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'robots',
    description: 'Verifica robots.txt',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /robots example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🤖 *ROBOTS.TXT CHECKER*

🌐 Target: ${domain}

📄 File robots.txt:
🔗 https://${domain}/robots.txt

📋 Informazioni:
├─ Directory nascoste
├─ Sitemap location
├─ User-agent rules
└─ Disallow paths

💡 I robots.txt possono rivelare path interessanti!

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
