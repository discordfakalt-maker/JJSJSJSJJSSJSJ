import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'lfi',
    aliases: ['localfile', 'fileinclude'],
    description: 'Test Local File Inclusion',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /lfi example.com/page?file=');
            return;
        }
        
        const url = args[0];
        
        await msg.reply(`
📂 *LFI VULNERABILITY CHECKER*

🎯 Target: ${url}

🔍 Path traversal:
├─ ../../../etc/passwd
├─ ..\\..\\..\\windows\\win.ini
├─ ....//....//....//etc/passwd
└─ /var/log/apache2/access.log

⚠️ File sensibili:
• /etc/passwd
• /etc/shadow
• .htaccess
• config.php

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
