import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';
import { BOT_CONFIG, CHROMIUM_PATH, PUPPETEER_ARGS } from './config.js';
import { PluginHandler } from './handler.js';
import { checkSpam } from './lib/utils.js';

console.clear();

console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║            🌑 PLUTOHOT v${BOT_CONFIG.version} - CYBER ARSENAL 🔥             ║
║                                                          ║
║         Sistema Avanzato di Analisi e Sicurezza         ║
║                                                          ║
║          CREATO DA X CON MARIO E GLI ALTRI 💎           ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`);

// Global variables
global.spamProtection = new Map();
global.userStats = new Map();
global.botStats = {
    startTime: Date.now(),
    messagesHandled: 0,
    commandsExecuted: 0
};

// Create WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "plutohot-session"
    }),
    puppeteer: {
        executablePath: CHROMIUM_PATH,
        args: PUPPETEER_ARGS
    }
});

// Initialize plugin handler
const pluginHandler = new PluginHandler();

// Load all plugins
await pluginHandler.loadPlugins();

// QR Code generation
client.on('qr', (qr) => {
    console.log('🔳 Scansiona il QR Code con WhatsApp:');
    qrcode.generate(qr, { small: true });
});

// Bot ready
client.on('ready', () => {
    console.log('\n✅ Bot connesso e pronto!');
    console.log(`📱 ${BOT_CONFIG.name} v${BOT_CONFIG.version}`);
    console.log(`⚡ Prefix: ${BOT_CONFIG.prefix}`);
    console.log(`📦 Plugins caricati: ${pluginHandler.plugins.size}`);
    console.log(`🕐 Avviato alle: ${new Date().toLocaleString('it-IT')}\n`);
});

// Authentication
client.on('authenticated', () => {
    console.log('🔐 Autenticazione completata!');
});

client.on('auth_failure', (msg) => {
    console.error('❌ Errore di autenticazione:', msg);
});

// Disconnection handler
client.on('disconnected', (reason) => {
    console.log('⚠️ Bot disconnesso:', reason);
});

// Message handler
client.on('message', async (msg) => {
    try {
        global.botStats.messagesHandled++;
        
        const messageBody = msg.body.trim();
        
        // Check if message starts with prefix
        if (!messageBody.startsWith(BOT_CONFIG.prefix)) {
            return;
        }
        
        // Parse command and arguments
        const args = messageBody.slice(BOT_CONFIG.prefix.length).trim().split(/\s+/);
        const command = args.shift().toLowerCase();
        
        if (!command) return;
        
        const contact = await msg.getContact();
        const userId = msg.from;
        
        // Anti-spam check
        if (checkSpam(userId, global.spamProtection, BOT_CONFIG)) {
            await msg.reply('⚠️ Stai inviando troppi comandi! Aspetta un minuto prima di continuare.');
            return;
        }
        
        global.botStats.commandsExecuted++;
        
        console.log(`📨 Comando ricevuto: ${command} da ${contact.name || contact.pushname || 'Sconosciuto'}`);
        
        // Try to handle with plugins
        const handled = await pluginHandler.handleCommand(msg, command, args, client);
        
        if (!handled) {
            await msg.reply(`❓ Comando non riconosciuto: *${command}*\n\nDigita *${BOT_CONFIG.prefix}menu* per vedere tutti i comandi disponibili.`);
        }
        
    } catch (error) {
        console.error('❌ Errore nella gestione del messaggio:', error);
        try {
            await msg.reply('❌ Si è verificato un errore nell\'esecuzione del comando. Riprova più tardi.');
        } catch (replyError) {
            console.error('❌ Impossibile inviare messaggio di errore:', replyError);
        }
    }
});

// Error handling
client.on('error', (error) => {
    console.error('💥 Errore del client:', error);
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n⏹️ Arresto del bot in corso...');
    await client.destroy();
    console.log('✅ Bot fermato correttamente');
    process.exit(0);
});

process.on('uncaughtException', (error) => {
    console.error('💥 Eccezione non gestita:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 Promise rejection non gestita:', reason);
});

// Initialize bot
console.log('🚀 Inizializzazione bot in corso...\n');
client.initialize();
