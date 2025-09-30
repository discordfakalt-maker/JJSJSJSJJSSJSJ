import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'backup',
    aliases: ['bak', 'old'],
    description: 'Cerca file di backup',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /backup example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
💾 *BACKUP FILE FINDER*

🌐 Target: ${domain}

🔍 Estensioni backup:
├─ .bak
├─ .old
├─ .backup
├─ .zip
├─ .sql
├─ .tar.gz
└─ ~

📁 File comuni:
• config.php.bak
• database.sql
• backup.zip
• site_old.tar.gz

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
