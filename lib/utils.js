export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const formatUptime = (ms) => {
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60)) % 24;
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const checkSpam = (userId, spamProtection, config) => {
    const now = Date.now();
    if (!spamProtection.has(userId)) {
        spamProtection.set(userId, { count: 1, lastMessage: now });
        return false;
    }
    
    const userData = spamProtection.get(userId);
    if (now - userData.lastMessage > config.spamResetTime) {
        userData.count = 1;
        userData.lastMessage = now;
        return false;
    }
    
    userData.count++;
    userData.lastMessage = now;
    
    if (userData.count > config.maxSpamCount) {
        return true;
    }
    return false;
};
