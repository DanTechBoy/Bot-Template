import { Argument, Command } from 'discord-akairo';
import { GuildMember, Message } from 'discord.js';

export default class BanCommand extends Command {
    public constructor() {
        super('kick', {
            aliases: ['kick'],
            description: {
                content: 'Kicks a mermber.',
                usage: '<member> [reason]',
                examples: ['@DanTechBoy', '@DanTechBoy bye'],
            },
            category: 'Moderation Commands',
            clientPermissions: ['BAN_MEMBERS', 'EMBED_LINKS'],
            userPermissions: ["KICK_MEMBERS"],
            args: [
                {
                    id: 'member',
                    type: Argument.union('member', async (_, phrase) => {
                        const m = await this.client.users.fetch(phrase);
                        if (m) return { id: m.id, user: m };
                        return null;
                    }),
                    prompt: {
                        start: (message: Message): string => `${message.author}, who would you like to ban?`,
                        retry: (message: Message): string => `${message.author}, please mention a valid member.`,
                    },
                },
                {
                    id: 'reason',
                    match: 'rest',
                    default: ''
                },
            ],
        });
    }

    public async exec(message: Message, { member, reason }: { member: GuildMember, reason: string }): Promise<Message | Message[]> {
        const cM = await message.guild!.members.fetch(this.client.user!.id); // The client's member
        const mM = await message.guild!.members.fetch(message.author!.id); // The message author's

        if (!cM.permissions.has('KICK_MEMBERS')) return message.util!.reply('I don\'t have kick members permissions.');
        if (!mM.permissions.has('KICK_MEMBERS')) return message.util.send('You don\'t have kick members permissions.');
        if (member.user.id === cM.user.id) return message.util!.reply('You can\'t kick me.');
        if (message.author!.id === member.user.id) return message.util!.reply('You can\'t kick yourself.');
        if (member.roles.highest.position >= mM!.roles.highest.position) return message.util!.reply('You can\'t kick members with roles equal to or higher than you.');
        if (member.roles.highest.position >= cM.roles.highest.position) return message.util!.reply(`My highest role is equal to or lower than ${member}'s highest role.`);
        if (!member.kickable) return message.util!.send(`${member} isn't kickable for some reason.`);

        let msg = await message.util!.send(`Are you sure you want to kick ${member}? Y/N`);
        const responses = await msg.channel.awaitMessages((r: Message) => r.author!.id === mM!.id, { max: 1, time: 30000 });
        if (!responses || responses.size < 1) return message.util!.send('Request timed out.');
        const response = responses.first();

        if (/^y(?:e(?:a|s)?)?$/i.test(response!.content)) {
            msg.edit(`🔃 Kicking **${member.user.tag}**`);
        } else {
            return message.util!.reply('❌ Kick cancelled.');
        }

        await member.kick(`Kicked by ${mM!.user.tag}`);
        return msg.edit(`Kicked **${member.user.tag}**`);

    }
}