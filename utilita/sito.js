import { BOT_CONFIG } from '../../config.js';
import { analyzeWebsite } from '../../lib/api.js';

export default {
    command: 'sito',
    description: 'Analizza un sito web',
    category: 'utilita',
    
    async execute(msg, args, client) {
        if (!args[0]) {
            await msg.reply('❓ Inserisci un dominio da analizzare!\nEsempio: /sito google.com');
            return;
        }
        
        try {
            const domain = args[0].replace(/^https?:\/\//, '');
            const siteInfo = await analyzeWebsite(domain);
            
            await msg.reply(`
🌐 *ANALISI SITO WEB*

🔍 *Dominio*: ${domain}
📍 *Server*: ${siteInfo.country} (${siteInfo.countryCode})
🏢 *ISP*: ${siteInfo.isp}
📡 *IP*: ${siteInfo.query}
🌍 *Posizione*: ${siteInfo.city}, ${siteInfo.regionName}
⏰ *Timezone*: ${siteInfo.timezone}

ℹ️ *Informazioni di base raccolte per scopi educativi*

${BOT_CONFIG.poweredBy}
            `.trim());
        } catch (error) {
            await msg.reply(`❌ Errore nell'analisi: ${error.message}\n\n${BOT_CONFIG.poweredBy}`);
        }
    }
};
