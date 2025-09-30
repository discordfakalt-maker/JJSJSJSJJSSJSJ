// Workaround to start WhatsApp bot via workflow
import { spawn } from 'child_process';

console.log('🌑 Starting PlutoHot WhatsApp Bot...\n');

const bot = spawn('node', ['index.js'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

bot.on('error', (error) => {
  console.error('Failed to start bot:', error);
  process.exit(1);
});

bot.on('exit', (code) => {
  console.log(`Bot process exited with code ${code}`);
  process.exit(code || 0);
});

// Handle termination signals
process.on('SIGTERM', () => {
  bot.kill('SIGTERM');
});

process.on('SIGINT', () => {
  bot.kill('SIGINT');
});
