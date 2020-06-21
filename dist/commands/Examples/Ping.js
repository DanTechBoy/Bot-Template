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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9FeGFtcGxlcy9QaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBR3pDLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxxREFBcUQ7YUFDakU7WUFDRCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDSjtBQWhCRCw4QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3BpbmcnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsncGluZyddLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0FuIGV4YW1wbGUgY29tbWFuZCB0aGF0IGdldHMgdGhlIGJvdFxcJ3MgcGluZyBpbiBtcy4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnRXhhbXBsZXMnLFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGNvbnN0IG0gPSBhd2FpdCBtZXNzYWdlLnV0aWwhLnNlbmQoYFBpbmdpbmcuLi5gKTtcclxuICAgICAgICByZXR1cm4gbS5lZGl0KGBQb25nISBCb3QgcGluZzogJHt0aGlzLmNsaWVudC53cy5waW5nfW1zYCk7XHJcbiAgICB9XHJcbn0iXX0=