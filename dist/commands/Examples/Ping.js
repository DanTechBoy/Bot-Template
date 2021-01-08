"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            description: {
                content: 'An example command that gets the bot\'s ping in ms.'
            },
            category: 'Examples',
            ratelimit: 0,
        });
    }
    async exec(message) {
        const m = await message.util.send(`Pinging...`);
        return m.edit(`Pong! Bot ping: ${this.client.ws.ping}ms`);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9FeGFtcGxlcy9QaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBR3pDLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxxREFBcUQ7YUFDakU7WUFDRCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDSjtBQWhCRCw4QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaW5nQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdwaW5nJywge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ3BpbmcnXSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBbiBleGFtcGxlIGNvbW1hbmQgdGhhdCBnZXRzIHRoZSBib3RcXCdzIHBpbmcgaW4gbXMuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0V4YW1wbGVzJyxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICBjb25zdCBtID0gYXdhaXQgbWVzc2FnZS51dGlsIS5zZW5kKGBQaW5naW5nLi4uYCk7XHJcbiAgICAgICAgcmV0dXJuIG0uZWRpdChgUG9uZyEgQm90IHBpbmc6ICR7dGhpcy5jbGllbnQud3MucGluZ31tc2ApO1xyXG4gICAgfVxyXG59Il19