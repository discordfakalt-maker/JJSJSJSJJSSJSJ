import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'menu',
    aliases: ['help', 'comandi'],
    description: 'Menu comandi PlutoHot',
    category: 'sistema',
    
    async execute(msg, args, client) {
        const menuText = `
╭━━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃   🌑 ${BOT_CONFIG.name} ${BOT_CONFIG.version} 🔥   ┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╔═══『 💎 SISTEMA 』═══╗
║ /menu - Menu comandi
║ /ping - Test connessione
║ /info - Info bot
║ /stato - Stato sistema
║ /uptime - Tempo attivo
║ /versione - Versione bot
╚═════════════════════════╝

╔═══『 🔥 CYBER SECURITY 』═══╗
║ /whois - Lookup WHOIS
║ /headers - Analisi HTTP headers
║ /ssl - Verifica certificato SSL
║ /dns - Lookup DNS records
║ /subdomains - Enumera sottodomini
║ /ports - Scansiona porte
║ /robots - Verifica robots.txt
║ /sitemap - Cerca sitemap
║ /tech - Rileva tecnologie
║ /redirect - Analizza redirect
║ /cookies - Analizza cookies
║ /csp - Verifica CSP
║ /cors - Verifica CORS
║ /sqli - Test SQL injection
║ /xss - Scanner XSS
║ /lfi - Test LFI
║ /directory - Directory listing
║ /backup - Cerca backup files
║ /admin - Cerca pannello admin
║ /git - Verifica .git exposure
╚═════════════════════════════╝

╔═══『 🛠️ UTILITÀ 』═══╗
║ /ip - Info indirizzo IP
║ /sito - Analizza sito web
║ /password - Genera password
║ /ora - Ora attuale
║ /base64 - Codifica Base64
║ /hash - Calcola hash
║ /wiki - Cerca su Wikipedia
║ /meteo - Previsioni meteo
║ /crypto - Prezzo crypto
╚════════════════════════╝

⚡ Prefix: ${BOT_CONFIG.prefix}
📊 Totale comandi: 35

${BOT_CONFIG.poweredBy}
        `;
        
        await msg.reply(menuText.trim());
    }
};
