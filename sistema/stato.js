import { BOT_CONFIG } from '../../config.js';
import { formatUptime } from '../../lib/utils.js';

export default {
    command: 'stato',
    aliases: ['status'],
    description: 'Stato sistema PlutoHot',
    category: 'sistema',
    
    async execute(msg, args, client) {
        const memUsage = process.memoryUsage();
        
        const statoText = `
📊 *STATO SISTEMA*

🟢 *Stato Bot*
├ Online: ✅ Attivo
├ Sessione: ✅ Connessa  
├ WhatsApp: ✅ Collegato
└ Servizi: ✅ Operativi

💾 *Memoria*
├ RSS: ${Math.round(memUsage.rss / 1024 / 1024)} MB
├ Heap: ${Math.round(memUsage.heapUsed / 1024 / 1024)} MB
└ Esterno: ${Math.round(memUsage.external / 1024 / 1024)} MB

⚡ *Performance*
├ Uptime: ${formatUptime(Date.now() - global.botStats.startTime)}
├ Messaggi/min: ${Math.round(global.botStats.messagesHandled / ((Date.now() - global.botStats.startTime) / 60000))}
└ CPU: Normale

${BOT_CONFIG.poweredBy}
        `;
        
        await msg.reply(statoText.trim());
    }
};
