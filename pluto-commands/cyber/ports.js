import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'ports',
    aliases: ['scan', 'portscan'],
    description: 'Scansiona porte aperte',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un target!\nEsempio: /ports example.com');
            return;
        }
        
        const target = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🔌 *PORT SCANNING*

🎯 Target: ${target}

🔍 Porte comuni:
├─ 21 (FTP)
├─ 22 (SSH)
├─ 80 (HTTP)
├─ 443 (HTTPS)
├─ 3306 (MySQL)
├─ 3389 (RDP)
├─ 8080 (HTTP-Alt)
└─ 8443 (HTTPS-Alt)

⚠️ Usa solo su sistemi autorizzati!

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
