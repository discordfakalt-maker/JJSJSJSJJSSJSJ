import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'meteo',
    aliases: ['tempo'],
    description: 'Previsioni meteo per una città',
    category: 'utilita',
    
    async execute(msg, args, client) {
        const city = args[0] || 'Roma';
        await msg.reply(`🌤️ *PREVISIONI METEO*\n\n📍 Città: ${city}\n⚠️ Servizio meteo in sviluppo\n\n🌡️ Per previsioni aggiornate:\n🔗 https://www.weather.com\n\n${BOT_CONFIG.poweredBy}`);
    }
};
