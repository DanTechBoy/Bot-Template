import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class PingCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping'],
            description: {
                content: 'An example command that gets the bot\'s ping in ms.'
            },
            category: 'Examples',
            ratelimit: 0,
        });
    }

    public async exec(message: Message): Promise<Message> {
        const m = await message.util!.send(`Pinging...`);
        return m.edit(`Pong! Bot ping: ${this.client.ws.ping}ms`);
    }
}