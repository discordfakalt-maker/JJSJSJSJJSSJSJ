import { BOT_CONFIG } from '../../config.js';
import { formatUptime } from '../../lib/utils.js';

export default {
    command: 'info',
    description: 'Informazioni PlutoHot',
    category: 'sistema',
    
    async execute(msg, args, client) {
        const info = client.info;
        
        const infoText = `
🌑 *PLUTOHOT INFO*

🔥 Nome: ${BOT_CONFIG.name}
💎 Versione: ${BOT_CONFIG.version}
📞 Numero: ${info.wid.user}
👤 Nome WhatsApp: ${info.pushname}
🔗 Versione WA: ${info.phone.wa_version}
📊 Piattaforma: ${info.phone.device_type}
🌐 Stato: Online e Attivo

📈 *STATISTICHE*
💬 Messaggi gestiti: ${global.botStats.messagesHandled}
⚡ Comandi eseguiti: ${global.botStats.commandsExecuted}
⏰ Online da: ${formatUptime(Date.now() - global.botStats.startTime)}

${BOT_CONFIG.poweredBy}
        `;
        
        await msg.reply(infoText.trim());
    }
};
