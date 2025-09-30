import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'whois',
    description: 'Lookup informazioni WHOIS di un dominio',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio!\nEsempio: /whois example.com');
            return;
        }
        
        const domain = args[0].replace(/^https?:\/\//, '').split('/')[0];
        
        await msg.reply(`
🔍 *WHOIS LOOKUP*

🌐 Dominio: ${domain}
📋 Informazioni WHOIS disponibili su:
🔗 https://who.is/whois/${domain}

⚡ Analisi dominio in corso...

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
