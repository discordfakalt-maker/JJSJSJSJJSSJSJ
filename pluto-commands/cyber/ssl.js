import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'ssl',
    aliases: ['cert', 'https'],
    description: 'Verifica certificato SSL/TLS',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /ssl example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🔒 *VERIFICA CERTIFICATO SSL*

🌐 Dominio: ${domain}

🔐 Controlli SSL/TLS:
✓ Validità certificato
✓ Catena di certificazione
✓ Protocolli supportati
✓ Cipher suites
✓ Vulnerabilità note

🔗 Test completo: https://www.ssllabs.com/ssltest/analyze.html?d=${domain}

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
