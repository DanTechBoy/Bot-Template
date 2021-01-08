"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class AddCommand extends discord_akairo_1.Command {
    constructor() {
        super('add', {
            aliases: ['add'],
            description: {
                content: "Add two numbers"
            },
            category: "Examples",
            ratelimit: 3,
            args: [
                {
                    id: "firstNum",
                    type: 'string',
                    match: 'content',
                    prompt: {
                        start: (msg) => `${msg.author}, First number?`
                    }
                },
                {
                    id: "secondNum",
                    type: 'string',
                    match: 'content',
                    prompt: {
                        start: (msg) => `${msg.author}, Second number?`
                    }
                }
            ]
        });
    }
    async exec(message, { firstNum, secondNum }) {
        return message.channel.send(`The sum is ${firstNum + secondNum}`);
    }
}
exports.default = AddCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL0V4YW1wbGVzL0FkZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixVQUFXLFNBQVEsd0JBQU87SUFDM0M7UUFDSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ1QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2hCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFVBQVU7b0JBQ2QsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLE1BQU0sRUFBRTt3QkFDSixLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0saUJBQWlCO3FCQUMxRDtpQkFDSjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsV0FBVztvQkFDZixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsU0FBUztvQkFDaEIsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxrQkFBa0I7cUJBQzNEO2lCQUNKO2FBQ0o7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtRQUN2RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUE7SUFDckUsQ0FBQztDQUNKO0FBakNELDZCQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdhZGQnLCB7XG4gICAgICAgICAgICBhbGlhc2VzOiBbJ2FkZCddLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkFkZCB0d28gbnVtYmVyc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRXhhbXBsZXNcIixcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcbiAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImZpcnN0TnVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogJ2NvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgJHttc2cuYXV0aG9yfSwgRmlyc3QgbnVtYmVyP2BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJzZWNvbmROdW1cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiAnY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgIHByb21wdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCBTZWNvbmQgbnVtYmVyP2BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7IGZpcnN0TnVtLCBzZWNvbmROdW0gfSk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoYFRoZSBzdW0gaXMgJHtmaXJzdE51bSArIHNlY29uZE51bX1gKVxuICAgIH1cbn0iXX0=