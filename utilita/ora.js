import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'ora',
    description: 'Mostra l\'ora attuale',
    category: 'utilita',
    
    async execute(msg, args, client) {
        const now = new Date();
        await msg.reply(`
🕐 *ORA ATTUALE*

🇮🇹 *Italia*: ${now.toLocaleString('it-IT', {timeZone: 'Europe/Rome'})}
🌍 *UTC*: ${now.toISOString().replace('T', ' ').slice(0, 19)}
📅 *Data*: ${now.toLocaleDateString('it-IT')}

${BOT_CONFIG.poweredBy}
        `.trim());
    }
};
