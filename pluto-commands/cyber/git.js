import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'git',
    aliases: ['gitexpose', 'dotgit'],
    description: 'Verifica esposizione .git',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /git example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🔧 *GIT EXPOSURE CHECKER*

🌐 Target: ${domain}

🔍 Check .git:
├─ /.git/config
├─ /.git/HEAD
├─ /.git/logs/
└─ /.git/index

⚠️ Rischi esposizione:
• Codice sorgente
• Credenziali hardcoded
• Storia commit
• Informazioni sensibili

🔗 Test: https://${domain}/.git/config

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
