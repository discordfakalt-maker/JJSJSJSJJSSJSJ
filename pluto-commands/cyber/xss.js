import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'xss',
    aliases: ['crosssite', 'script'],
    description: 'Scanner XSS vulnerabilities',
    category: 'cyber',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un URL!\nEsempio: /xss example.com');
            return;
        }
        
        const url = args[0];
        
        await msg.reply(`
⚡ *XSS VULNERABILITY SCANNER*

🎯 Target: ${url}

🔍 Tipi di XSS:
├─ Reflected XSS
├─ Stored XSS
└─ DOM-based XSS

📝 Payloads comuni:
• <script>alert(1)</script>
• <img src=x onerror=alert(1)>
• <svg onload=alert(1)>

⚠️ Test solo autorizzati!

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
