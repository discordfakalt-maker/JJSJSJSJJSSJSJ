import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'subdomains',
    aliases: ['sub', 'subdomain'],
    description: 'Enumera sottodomini',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /subdomains example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🔍 *ENUMERAZIONE SOTTODOMINI*

🌐 Target: ${domain}

🎯 Tecniche di ricerca:
├─ Certificate Transparency
├─ DNS Bruteforce
├─ Search Engine
└─ Web Archive

📊 Sottodomini comuni:
• www.${domain}
• mail.${domain}
• ftp.${domain}
• admin.${domain}
• api.${domain}

🔗 Scanner: https://crt.sh/?q=${domain}

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
