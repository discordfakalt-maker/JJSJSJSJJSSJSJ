import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'wiki',
    aliases: ['wikipedia'],
    description: 'Cerca su Wikipedia',
    category: 'utilita',
    
    async execute(msg, args, client) {
        if (!args.join(' ').trim()) {
            await msg.reply('❓ Cosa vuoi cercare su Wikipedia?\nEsempio: /wiki Leonardo da Vinci');
            return;
        }
        const wikiTerm = args.join(' ');
        await msg.reply(`📖 *RICERCA WIKIPEDIA*\n\n🔍 Termine: ${wikiTerm}\n📚 Cerca su: https://it.wikipedia.org/wiki/${encodeURIComponent(wikiTerm.replace(/ /g, '_'))}\n\n${BOT_CONFIG.poweredBy}`);
    }
};
