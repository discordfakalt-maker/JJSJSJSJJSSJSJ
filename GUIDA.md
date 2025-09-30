# 🤖 ChatUnity Bot - Guida Rapida

## 📁 Struttura del Progetto

```
chatunity-bot/
├── index.js           # Cluster manager con gestione processi
├── main.js            # Bot WhatsApp principale
├── config.js          # Configurazione bot
├── handler.js         # Sistema di caricamento plugin
├── lib/               # Utilità e funzioni helper
│   ├── utils.js       # Funzioni utilità
│   └── api.js         # Chiamate API esterne
├── plugins/           # Comandi organizzati per categoria
│   ├── info/          # Comandi informativi (menu, ping, info, etc.)
│   ├── fun/           # Giochi e intrattenimento
│   ├── tools/         # Strumenti e utility
│   ├── casino/        # Giochi d'azzardo
│   └── admin/         # Comandi amministrativi
├── database/          # Database e dati
├── tmp/               # File temporanei
├── views/             # Template visualizzazioni
├── menu/              # Menu personalizzati
└── src/               # Codice sorgente aggiuntivo
```

## 🚀 Avvio del Bot

### Metodo 1: Esecuzione Diretta
```bash
node index.js
```

### Metodo 2: Script di Avvio
```bash
./start-bot.sh
```

### Metodo 3: PM2 (24/7)
```bash
pm2 start index.js --name "chatunity-bot"
pm2 save
pm2 logs
```

## 📦 Plugin Disponibili

### 📱 Info (6 comandi)
- `!menu` - Mostra menu comandi
- `!ping` - Test connessione
- `!info` - Informazioni bot
- `!stato` - Stato sistema
- `!uptime` - Tempo attività
- `!versione` - Versione bot

### 🎮 Fun (8 comandi)
- `!barzelletta` - Barzelletta casuale
- `!citazione` - Citazione motivazionale
- `!dado` - Lancia dado
- `!moneta` - Testa o croce
- `!8ball [domanda]` - Palla magica 8
- `!quiz` - Quiz culturale
- `!indovinello` - Indovinello
- `!soluzione` - Soluzione indovinello

### 🛠 Tools (9 comandi)
- `!ip [indirizzo]` - Info IP
- `!sito [dominio]` - Analizza sito
- `!password [lunghezza]` - Genera password
- `!ora` - Ora attuale
- `!base64 [testo]` - Codifica Base64
- `!hash [testo]` - Calcola hash
- `!wiki [termine]` - Wikipedia
- `!meteo [città]` - Previsioni meteo
- `!crypto [coin]` - Prezzo crypto

### 🎰 Casino (1 comando)
- `!sasso/carta/forbici` - Gioca RPS

## ➕ Aggiungere Nuovi Comandi

1. Crea un nuovo file nella cartella `plugins/[categoria]/`
2. Usa questo template:

```javascript
import { BOT_CONFIG } from '../../config.js';

export default {
    command: 'nomecomando',
    aliases: ['alias1', 'alias2'], // opzionale
    description: 'Descrizione del comando',
    category: 'info', // info, fun, tools, casino, admin
    
    async execute(msg, args, client) {
        // La tua logica qui
        await msg.reply('Risposta del comando');
    }
};
```

3. Il comando verrà caricato automaticamente al riavvio!

## ⚙️ Configurazione

Modifica `config.js` per personalizzare:

```javascript
export const BOT_CONFIG = {
    name: '🤖 ChatUnity Bot',
    version: '7.2',
    prefix: '!',              // Cambia il prefisso comandi
    owner: 'ChatUnity Team',
    poweredBy: 'Powered by ChatUnity',
    maxSpamCount: 5,          // Messaggi max prima di block
    spamResetTime: 60000,     // Tempo reset spam (ms)
    welcomeEnabled: true
};
```

## 🔧 Risoluzione Problemi

### Il bot non si avvia
```bash
# Verifica Node.js
node --version

# Installa dipendenze
npm install

# Prova avvio diretto
node main.js
```

### QR Code non appare
- Assicurati di avere WhatsApp chiuso su altri dispositivi
- Elimina la cartella `.wwebjs_auth` e riavvia

### Comandi non funzionano
- Verifica il prefisso in `config.js`
- Controlla che i plugin siano nella cartella corretta
- Guarda i log per errori

## 📝 Note Importanti

- **Sessioni**: Le sessioni WhatsApp sono salvate in `.wwebjs_auth/`
- **Logs**: I log di sistema sono visibili nella console
- **Plugins**: Ogni plugin è un modulo indipendente
- **Anti-spam**: Sistema automatico di protezione spam attivo

## 🇮🇹 Supporto

Per supporto o domande:
- Canale WhatsApp: [Link al canale]
- GitHub: [Repository]
- Contatto: [Info contatto]

---

**ChatUnity Bot v7.2** - Il miglior bot WhatsApp italiano! 🇮🇹
