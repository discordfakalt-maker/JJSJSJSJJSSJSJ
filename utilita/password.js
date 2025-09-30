import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'password',
    description: 'Genera una password sicura',
    category: 'utilita',
    
    async execute(msg, args, client) {
        const length = parseInt(args[0]) || 12;
        if (length > 50) {
            await msg.reply('❌ Lunghezza massima: 50 caratteri');
            return;
        }
        
        if (length < 6) {
            await msg.reply('❌ Lunghezza minima: 6 caratteri');
            return;
        }
        
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        await msg.reply(`🔐 *PASSWORD GENERATA*\n\n\`${password}\`\n\n⚠️ Salva questa password in un posto sicuro!\n\n${BOT_CONFIG.poweredBy}`);
    }
};
