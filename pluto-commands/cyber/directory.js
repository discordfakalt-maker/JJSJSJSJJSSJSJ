import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'directory',
    aliases: ['dir', 'listing'],
    description: 'Verifica directory listing',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /directory example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
📁 *DIRECTORY LISTING CHECKER*

🌐 Target: ${domain}

🔍 Directory comuni:
├─ /admin/
├─ /backup/
├─ /uploads/
├─ /images/
├─ /files/
└─ /old/

⚠️ Directory listing espone:
• File sensibili
• Struttura server
• Backup files

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
