import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'crypto',
    aliases: ['bitcoin', 'btc'],
    description: 'Prezzo di una criptovaluta',
    category: 'utilita',
    
    async execute(msg, args, client) {
        const coin = args[0] || 'bitcoin';
        await msg.reply(`₿ *PREZZO CRYPTO*\n\n🪙 Coin: ${coin.toUpperCase()}\n💰 Servizio prezzi in sviluppo\n\n📈 Controlla su:\n• CoinGecko\n• CoinMarketCap\n\n${BOT_CONFIG.poweredBy}`);
    }
};
