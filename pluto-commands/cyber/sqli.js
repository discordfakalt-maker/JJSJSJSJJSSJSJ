import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'sqli',
    aliases: ['sqlinjection', 'sql'],
    description: 'Test SQL injection',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /sqli example.com/page?id=1');
            return;
        }
        
        const url = args[0];
        
        await msg.reply(`
💉 *SQL INJECTION TESTER*

🎯 Target: ${url}

🔍 Payloads test:
├─ ' OR '1'='1
├─ " OR "1"="1
├─ ' OR 1=1--
├─ admin'--
└─ '; DROP TABLE--

⚠️ ATTENZIONE: Solo su sistemi autorizzati!

🛡️ Protezione:
• Prepared statements
• Input validation
• WAF rules

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
