import axios from 'axios';

export async function getIPInfo(ip = '') {
    try {
        const url = ip ? `http://ip-api.com/json/${ip}` : 'http://ip-api.com/json/';
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Impossibile ottenere informazioni IP');
    }
}

export async function analyzeWebsite(domain) {
    try {
        const response = await axios.get(`http://ip-api.com/json/${domain}`);
        return response.data;
    } catch (error) {
        throw new Error('Impossibile analizzare il sito web');
    }
}
