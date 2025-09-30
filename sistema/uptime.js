import { BOT_CONFIG } from '../../config.js';
import { formatUptime } from '../../lib/utils.js';

export default {
    command: 'uptime',
    description: 'Mostra il tempo di attività del bot',
    category: 'sistema',
    
    async execute(msg, args, client) {
        await msg.reply(`⏰ *TEMPO ATTIVITÀ*\n\n🚀 Online da: ${formatUptime(Date.now() - global.botStats.startTime)}\n⚡ Avviato il: ${new Date(global.botStats.startTime).toLocaleString('it-IT')}\n\n${BOT_CONFIG.poweredBy}`);
    }
};
