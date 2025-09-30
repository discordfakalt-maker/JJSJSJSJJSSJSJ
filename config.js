export const BOT_CONFIG = {
    name: '🌑 PLUTOHOT',
    version: '1.0',
    prefix: '/',
    owner: 'D con Mario e gli altri',
    poweredBy: '🔥 QUESTO BOT É STATI CREATO DA D CON MARIO E GLI ALTRI 🔥',
    credits: '⚡ PLUTOHOT - Security & Analysis Toolkit ⚡',
    maxSpamCount: 5,
    spamResetTime: 60000,
    welcomeEnabled: true
};

export const CHROMIUM_PATH = '/nix/store/zi4f80l169xlmivz8vja8wlphq74qqk0-chromium-125.0.6422.141/bin/chromium';

export const PUPPETEER_ARGS = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--no-first-run',
    '--no-zygote',
    '--disable-gpu',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-renderer-backgrounding',
    '--disable-web-security',
    '--disable-features=VizDisplayCompositor'
];
