import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'dns',
    description: 'Lookup records DNS',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /dns example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🌐 *DNS LOOKUP*

📍 Dominio: ${domain}

📋 Record DNS:
├─ A (IPv4)
├─ AAAA (IPv6)
├─ MX (Mail)
├─ NS (Nameserver)
├─ TXT (Text)
├─ CNAME (Alias)
└─ SOA (Start of Authority)

🔗 Lookup completo: https://dnschecker.org/all-dns-records-of-domain.php?query=${domain}

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
