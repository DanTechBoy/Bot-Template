import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class SayCommand extends Command {
    public constructor() {
        super('say', {
            aliases: ['say', 'repeat'],
            description: {
                content: "Repeats your arguments."
            },
            category: "Examples",
            ratelimit: 3,
            args: [
                {
                    id: 'text',
                    type: 'string',
                    match: 'content',
                    prompt: {
                        start: (msg: Message) => `${msg.author}, what would you like to say?`
                    }
                }
            ]
        })
    }
    public async exec(message: Message, { text }): Promise<Message> {
        return message.channel.send(text);
    }
}