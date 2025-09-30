import { BOT_CONFIG } from '../../config.js';
import { getIPInfo } from '../../lib/api.js';

export default {
    command: 'ip',
    description: 'Ottieni informazioni su un indirizzo IP',
    category: 'utilita',
    
    async execute(msg, args, client) {
        try {
            const targetIP = args[0] || '';
            const ipInfo = await getIPInfo(targetIP);
            
            if (ipInfo.status === 'success') {
                await msg.reply(`
🌐 *INFORMAZIONI IP*

📍 *Posizione*
├ IP: ${ipInfo.query}
├ Paese: ${ipInfo.country} (${ipInfo.countryCode})
├ Regione: ${ipInfo.regionName}
├ Città: ${ipInfo.city}
├ CAP: ${ipInfo.zip}
└ Coordinate: ${ipInfo.lat}, ${ipInfo.lon}

🏢 *ISP e Rete*
├ ISP: ${ipInfo.isp}
├ Organizzazione: ${ipInfo.org}
├ AS: ${ipInfo.as}
└ Timezone: ${ipInfo.timezone}

${BOT_CONFIG.poweredBy}
                `.trim());
            } else {
                throw new Error('IP non valido');
            }
        } catch (error) {
            await msg.reply(`❌ Errore nel recupero info IP: ${error.message}\n\n${BOT_CONFIG.poweredBy}`);
        }
    }
};
