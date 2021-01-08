"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class SayCommand extends discord_akairo_1.Command {
    constructor() {
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
                        start: (msg) => `${msg.author}, what would you like to say?`
                    }
                }
            ]
        });
    }
    async exec(message, { text }) {
        return message.channel.send(text);
    }
}
exports.default = SayCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL0V4YW1wbGVzL1NheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixVQUFXLFNBQVEsd0JBQU87SUFDM0M7UUFDSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ1QsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztZQUMxQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLHlCQUF5QjthQUNyQztZQUNELFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBRSxNQUFNO29CQUNWLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxTQUFTO29CQUNoQixNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLCtCQUErQjtxQkFDeEU7aUJBQ0o7YUFDSjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUU7UUFDeEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0o7QUF4QkQsNkJBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdkaXNjb3JkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F5Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NheScsIHtcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnc2F5JywgJ3JlcGVhdCddLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlcGVhdHMgeW91ciBhcmd1bWVudHMuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFeGFtcGxlc1wiLFxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxuICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiAnY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgIHByb21wdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCB3aGF0IHdvdWxkIHlvdSBsaWtlIHRvIHNheT9gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgdGV4dCB9KTogUHJvbWlzZTxNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZCh0ZXh0KTtcbiAgICB9XG59Il19