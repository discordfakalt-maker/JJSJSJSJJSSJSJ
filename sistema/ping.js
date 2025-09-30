import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'ping',
    description: 'Test connessione PlutoHot',
    category: 'sistema',
    
    async execute(msg, args, client) {
        const start = Date.now();
        await msg.reply('🏓 Pong! Calcolando latenza...');
        const latency = Date.now() - start;
        
        await msg.reply(`🔥 *PLUTOHOT ONLINE!*\n⚡ Latenza: ${latency}ms\n✅ Sistema operativo!\n\n${BOT_CONFIG.poweredBy}`);
    }
};
