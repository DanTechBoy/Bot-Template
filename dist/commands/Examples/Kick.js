"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class BanCommand extends discord_akairo_1.Command {
    constructor() {
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
                    type: discord_akairo_1.Argument.union('member', async (_, phrase) => {
                        const m = await this.client.users.fetch(phrase);
                        if (m)
                            return { id: m.id, user: m };
                        return null;
                    }),
                    prompt: {
                        start: (message) => `${message.author}, who would you like to ban?`,
                        retry: (message) => `${message.author}, please mention a valid member.`,
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
    async exec(message, { member, reason }) {
        const cM = await message.guild.members.fetch(this.client.user.id); // The client's member
        const mM = await message.guild.members.fetch(message.author.id); // The message author's
        if (!cM.permissions.has('KICK_MEMBERS'))
            return message.util.reply('I don\'t have kick members permissions.');
        if (!mM.permissions.has('KICK_MEMBERS'))
            return message.util.send('You don\'t have kick members permissions.');
        if (member.user.id === cM.user.id)
            return message.util.reply('You can\'t kick me.');
        if (message.author.id === member.user.id)
            return message.util.reply('You can\'t kick yourself.');
        if (member.roles.highest.position >= mM.roles.highest.position)
            return message.util.reply('You can\'t kick members with roles equal to or higher than you.');
        if (member.roles.highest.position >= cM.roles.highest.position)
            return message.util.reply(`My highest role is equal to or lower than ${member}'s highest role.`);
        if (!member.kickable)
            return message.util.send(`${member} isn't kickable for some reason.`);
        let msg = await message.util.send(`Are you sure you want to kick ${member}? Y/N`);
        const responses = await msg.channel.awaitMessages((r) => r.author.id === mM.id, { max: 1, time: 30000 });
        if (!responses || responses.size < 1)
            return message.util.send('Request timed out.');
        const response = responses.first();
        if (/^y(?:e(?:a|s)?)?$/i.test(response.content)) {
            msg.edit(`🔃 Kicking **${member.user.tag}**`);
        }
        else {
            return message.util.reply('❌ Kick cancelled.');
        }
        await member.kick(`Kicked by ${mM.user.tag}`);
        return msg.edit(`Kicked **${member.user.tag}**`);
    }
}
exports.default = BanCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9FeGFtcGxlcy9LaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQW1EO0FBR25ELE1BQXFCLFVBQVcsU0FBUSx3QkFBTztJQUMzQztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLFFBQVEsRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQzthQUMvQztZQUNELFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsaUJBQWlCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1lBQ2pELGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNqQyxJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLHlCQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFO3dCQUMvQyxNQUFNLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDaEQsSUFBSSxDQUFDOzRCQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ3BDLE9BQU8sSUFBSSxDQUFDO29CQUNoQixDQUFDLENBQUM7b0JBQ0YsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLE9BQWdCLEVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sOEJBQThCO3dCQUNwRixLQUFLLEVBQUUsQ0FBQyxPQUFnQixFQUFVLEVBQUUsQ0FBQyxHQUFH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QUFDLElBQUksQ0FBQyxnQkFBZ0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDSCxPQUFPLE9BQU8sQ0FBQyxJQUFLLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDbkQ7UUFFRCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0MsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRXJELENBQUM7Q0FDSjtBQTdERCw2QkE2REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmd1bWVudCwgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7IEd1aWxkTWVtYmVyLCBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbkNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdraWNrJywge1xuICAgICAgICAgICAgYWxpYXNlczogWydraWNrJ10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdLaWNrcyBhIG1lcm1iZXIuJyxcbiAgICAgICAgICAgICAgICB1c2FnZTogJzxtZW1iZXI+IFtyZWFzb25dJyxcbiAgICAgICAgICAgICAgICBleGFtcGxlczogWydARGFuVGVjaEJveScsICdARGFuVGVjaEJveSBieWUnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yeTogJ01vZGVyYXRpb24gQ29tbWFuZHMnLFxuICAgICAgICAgICAgY2xpZW50UGVybWlzc2lvbnM6IFsnQkFOX01FTUJFUlMnLCAnRU1CRURfTElOS1MnXSxcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogW1wiS0lDS19NRU1CRVJTXCJdLFxuICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdtZW1iZXInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBBcmd1bWVudC51bmlvbignbWVtYmVyJywgYXN5bmMgKF8sIHBocmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuY2xpZW50LnVzZXJzLmZldGNoKHBocmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobSkgcmV0dXJuIHsgaWQ6IG0uaWQsIHVzZXI6IG0gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKG1lc3NhZ2U6IE1lc3NhZ2UpOiBzdHJpbmcgPT4gYCR7bWVzc2FnZS5hdXRob3J9LCB3aG8gd291bGQgeW91IGxpa2UgdG8gYmFuP2AsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeTogKG1lc3NhZ2U6IE1lc3NhZ2UpOiBzdHJpbmcgPT4gYCR7bWVzc2FnZS5hdXRob3J9LCBwbGVhc2UgbWVudGlvbiBhIHZhbGlkIG1lbWJlci5gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3JlYXNvbicsXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiAncmVzdCcsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgbWVtYmVyLCByZWFzb24gfTogeyBtZW1iZXI6IEd1aWxkTWVtYmVyLCByZWFzb246IHN0cmluZyB9KTogUHJvbWlzZTxNZXNzYWdlIHwgTWVzc2FnZVtdPiB7XG4gICAgICAgIGNvbnN0IGNNID0gYXdhaXQgbWVzc2FnZS5ndWlsZCEubWVtYmVycy5mZXRjaCh0aGlzLmNsaWVudC51c2VyIS5pZCk7IC8vIFRoZSBjbGllbnQncyBtZW1iZXJcbiAgICAgICAgY29uc3QgbU0gPSBhd2FpdCBtZXNzYWdlLmd1aWxkIS5tZW1iZXJzLmZldGNoKG1lc3NhZ2UuYXV0aG9yIS5pZCk7IC8vIFRoZSBtZXNzYWdlIGF1dGhvcidzXG5cbiAgICAgICAgaWYgKCFjTS5wZXJtaXNzaW9ucy5oYXMoJ0tJQ0tfTUVNQkVSUycpKSByZXR1cm4gbWVzc2FnZS51dGlsIS5yZXBseSgnSSBkb25cXCd0IGhhdmUga2ljayBtZW1iZXJzIHBlcm1pc3Npb25zLicpO1xuICAgICAgICBpZiAoIW1NLnBlcm1pc3Npb25zLmhhcygnS0lDS19NRU1CRVJTJykpIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZCgnWW91IGRvblxcJ3QgaGF2ZSBraWNrIG1lbWJlcnMgcGVybWlzc2lvbnMuJyk7XG4gICAgICAgIGlmIChtZW1iZXIudXNlci5pZCA9PT0gY00udXNlci5pZCkgcmV0dXJuIG1lc3NhZ2UudXRpbCEucmVwbHkoJ1lvdSBjYW5cXCd0IGtpY2sgbWUuJyk7XG4gICAgICAgIGlmIChtZXNzYWdlLmF1dGhvciEuaWQgPT09IG1lbWJlci51c2VyLmlkKSByZXR1cm4gbWVzc2FnZS51dGlsIS5yZXBseSgnWW91IGNhblxcJ3Qga2ljayB5b3Vyc2VsZi4nKTtcbiAgICAgICAgaWYgKG1lbWJlci5yb2xlcy5oaWdoZXN0LnBvc2l0aW9uID49IG1NIS5yb2xlcy5oaWdoZXN0LnBvc2l0aW9uKSByZXR1cm4gbWVzc2FnZS51dGlsIS5yZXBseSgnWW91IGNhblxcJ3Qga2ljayBtZW1iZXJzIHdpdGggcm9sZXMgZXF1YWwgdG8gb3IgaGlnaGVyIHRoYW4geW91LicpO1xuICAgICAgICBpZiAobWVtYmVyLnJvbGVzLmhpZ2hlc3QucG9zaXRpb24gPj0gY00ucm9sZXMuaGlnaGVzdC5wb3NpdGlvbikgcmV0dXJuIG1lc3NhZ2UudXRpbCEucmVwbHkoYE15IGhpZ2hlc3Qgcm9sZSBpcyBlcXVhbCB0byBvciBsb3dlciB0aGFuICR7bWVtYmVyfSdzIGhpZ2hlc3Qgcm9sZS5gKTtcbiAgICAgICAgaWYgKCFtZW1iZXIua2lja2FibGUpIHJldHVybiBtZXNzYWdlLnV0aWwhLnNlbmQoYCR7bWVtYmVyfSBpc24ndCBraWNrYWJsZSBmb3Igc29tZSByZWFzb24uYCk7XG5cbiAgICAgICAgbGV0IG1zZyA9IGF3YWl0IG1lc3NhZ2UudXRpbCEuc2VuZChgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGtpY2sgJHttZW1iZXJ9PyBZL05gKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgbXNnLmNoYW5uZWwuYXdhaXRNZXNzYWdlcygocjogTWVzc2FnZSkgPT4gci5hdXRob3IhLmlkID09PSBtTSEuaWQsIHsgbWF4OiAxLCB0aW1lOiAzMDAwMCB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZXMgfHwgcmVzcG9uc2VzLnNpemUgPCAxKSByZXR1cm4gbWVzc2FnZS51dGlsIS5zZW5kKCdSZXF1ZXN0IHRpbWVkIG91dC4nKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXNwb25zZXMuZmlyc3QoKTtcblxuICAgICAgICBpZiAoL155KD86ZSg/OmF8cyk/KT8kL2kudGVzdChyZXNwb25zZSEuY29udGVudCkpIHtcbiAgICAgICAgICAgIG1zZy5lZGl0KGDwn5SDIEtpY2tpbmcgKioke21lbWJlci51c2VyLnRhZ30qKmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbCEucmVwbHkoJ+KdjCBLaWNrIGNhbmNlbGxlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IG1lbWJlci5raWNrKGBLaWNrZWQgYnkgJHttTSEudXNlci50YWd9YCk7XG4gICAgICAgIHJldHVybiBtc2cuZWRpdChgS2lja2VkICoqJHttZW1iZXIudXNlci50YWd9KipgKTtcblxuICAgIH1cbn0iXX0=