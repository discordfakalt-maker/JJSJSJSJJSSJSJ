import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'versione',
    aliases: ['version'],
    description: 'Mostra la versione del bot',
    category: 'sistema',
    
    async execute(msg, args, client) {
        await msg.reply(`🤖 *CHATUNITY BOT v${BOT_CONFIG.version}*\n\n✨ Bot WhatsApp più avanzato in italiano\n🇮🇹 Creato con passione in Italia\n🚀 Oltre 25 comandi disponibili\n\n${BOT_CONFIG.poweredBy}`);
    }
};
