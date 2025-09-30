import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'admin',
    aliases: ['adminpanel', 'login'],
    description: 'Cerca pannello admin',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /admin example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🔐 *ADMIN PANEL FINDER*

🌐 Target: ${domain}

🔍 Path comuni:
├─ /admin/
├─ /administrator/
├─ /wp-admin/
├─ /login/
├─ /panel/
├─ /dashboard/
└─ /manager/

🎯 CMS specifici:
• WordPress: /wp-admin
• Joomla: /administrator
• Drupal: /user/login

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
