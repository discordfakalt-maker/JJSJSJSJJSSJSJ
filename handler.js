import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class PluginHandler {
    constructor() {
        this.plugins = new Map();
        this.primaryCommands = new Map(); // Track primary commands separately
        this.categories = ['sistema', 'cyber', 'utilita', 'admin'];
    }

    async loadPlugins() {
        console.log('🔥 Caricamento comandi PlutoHot...');
        
        for (const category of this.categories) {
            const categoryPath = join(__dirname, 'pluto-commands', category);
            try {
                const files = readdirSync(categoryPath).filter(file => file.endsWith('.js'));
                
                for (const file of files) {
                    try {
                        const pluginPath = join(categoryPath, file);
                        const plugin = await import(`file://${pluginPath}`);
                        
                        if (plugin.default) {
                            const pluginData = plugin.default;
                            const pluginWithCategory = {
                                ...pluginData,
                                category: category
                            };
                            
                            // Register main command in both maps
                            this.plugins.set(pluginData.command, pluginWithCategory);
                            this.primaryCommands.set(pluginData.command, pluginWithCategory);
                            
                            // Register aliases only in plugins map (not primaryCommands)
                            if (pluginData.aliases && Array.isArray(pluginData.aliases)) {
                                for (const alias of pluginData.aliases) {
                                    this.plugins.set(alias, pluginWithCategory);
                                }
                            }
                            
                            console.log(`✅ Caricato: ${category}/${file}`);
                        }
                    } catch (error) {
                        console.error(`❌ Errore caricamento ${file}:`, error.message);
                    }
                }
            } catch (error) {
                console.log(`⚠️ Categoria ${category} non trovata o vuota`);
            }
        }
        
        console.log(`\n📊 Totale plugins caricati: ${this.plugins.size}\n`);
    }

    async handleCommand(msg, command, args, client) {
        const plugin = this.plugins.get(command);
        
        if (plugin && plugin.execute) {
            try {
                await plugin.execute(msg, args, client);
                return true;
            } catch (error) {
                console.error(`Errore nel comando ${command}:`, error);
                await msg.reply(`❌ Errore nell'esecuzione del comando: ${error.message}`);
                return false;
            }
        }
        
        return false;
    }

    getCommandsList() {
        const categorized = {};
        
        // Use primaryCommands to avoid listing aliases as separate commands
        for (const [cmd, plugin] of this.primaryCommands) {
            if (!categorized[plugin.category]) {
                categorized[plugin.category] = [];
            }
            categorized[plugin.category].push({
                command: cmd,
                description: plugin.description || 'Nessuna descrizione'
            });
        }
        
        return categorized;
    }
}
