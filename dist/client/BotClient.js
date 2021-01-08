"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const Config_1 = require("../Config");
class NexbotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: Config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 0,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    timeout: "You took too long, the command has been cancelled.",
                    ended: "You exceeded the maximum amount of tries, the command has been cancelled.",
                    cancel: "This command has been cancelled.",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: Config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = NexbotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUFrRDtBQWNsRCxNQUFxQixZQUFhLFNBQVEsNkJBQVk7SUE4QmxELFlBQW1CLE1BQWtCO1FBQ2pDLEtBQUssQ0FBQztZQUNGLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtTQUN6QixDQUFDLENBQUM7UUEvQkEsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNoRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQUdJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDN0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsZUFBTTtZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLENBQUM7WUFDbEIsZ0JBQWdCLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFO29CQUNKLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFBLEdBQUcsR0FBRyw4Q0FBOEM7b0JBQ3JHLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFBLEdBQUcsR0FBRyw4Q0FBOEM7b0JBQ3JHLE9BQU8sRUFBRSxvREFBb0Q7b0JBQzdELEtBQUssRUFBRSwyRUFBMkU7b0JBQ2xGLE1BQU0sRUFBRSxrQ0FBa0M7b0JBQzFDLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNaO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2hCO1lBQ0QsaUJBQWlCLEVBQUUsZUFBTTtTQUM1QixDQUFDLENBQUM7UUFPQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU8sS0FBSyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUM3QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDVixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFHbkMsQ0FBQztJQUVFLEtBQUssQ0FBQyxLQUFLO1FBQ2QsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUVBO0FBekRELCtCQXlEQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBBa2Fpcm9DbGllbnQsIENvbW1hbmRIYW5kbGVyLCBMaXN0ZW5lckhhbmRsZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgVXNlciwgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBwcmVmaXgsIG93bmVycywgIHRva2VuIH0gZnJvbSBcIi4uL0NvbmZpZ1wiXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImRpc2NvcmQtYWthaXJvXCIge1xyXG4gICAgaW50ZXJmYWNlIEFrYWlyb0NsaWVudCB7XHJcbiAgICAgICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xyXG4gICAgICAgIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQm90T3B0aW9ucyB7XHJcbiAgICB0b2tlbj86IHN0cmluZztcclxuICAgIG93bmVycz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXhib3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xyXG4gICAgcHVibGljIGNvbmZpZzogQm90T3B0aW9ucztcclxuICAgIHB1YmxpYyBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xyXG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJsaXN0ZW5lcnNcIilcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyID0gbmV3IENvbW1hbmRIYW5kbGVyKHRoaXMsIHtcclxuICAgICAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiY29tbWFuZHNcIiksXHJcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXHJcbiAgICAgICAgYWxsb3dNZW50aW9uOiB0cnVlLFxyXG4gICAgICAgIGhhbmRsZUVkaXRzOiB0cnVlLFxyXG4gICAgICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxyXG4gICAgICAgIGNvbW1hbmRVdGlsTGlmZXRpbWU6IDNlNSxcclxuICAgICAgICBkZWZhdWx0Q29vbGRvd246IDAsXHJcbiAgICAgICAgYXJndW1lbnREZWZhdWx0czoge1xyXG4gICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgIG1vZGlmeVN0YXJ0OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5gJHtzdHJ9XFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcclxuICAgICAgICAgICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5gJHtzdHJ9XFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IFwiWW91IHRvb2sgdG9vIGxvbmcsIHRoZSBjb21tYW5kIGhhcyBiZWVuIGNhbmNlbGxlZC5cIixcclxuICAgICAgICAgICAgICAgIGVuZGVkOiBcIllvdSBleGNlZWRlZCB0aGUgbWF4aW11bSBhbW91bnQgb2YgdHJpZXMsIHRoZSBjb21tYW5kIGhhcyBiZWVuIGNhbmNlbGxlZC5cIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbDogXCJUaGlzIGNvbW1hbmQgaGFzIGJlZW4gY2FuY2VsbGVkLlwiLFxyXG4gICAgICAgICAgICAgICAgcmV0cmllczogMyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDNlNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvdGhlcndpc2U6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlnbm9yZVBlcm1pc3Npb25zOiBvd25lcnNcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IEJvdE9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIG93bmVySUQ6IGNvbmZpZy5vd25lcnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLnVzZUxpc3RlbmVySGFuZGxlcih0aGlzLmxpc3RlbmVySGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xyXG4gICAgICAgICAgICBjb21tYW5kSGFuZGxlcjogdGhpcy5jb21tYW5kSGFuZGxlcixcclxuICAgICAgICAgICAgbGlzdGVuZXJIYW5kbGVyOiB0aGlzLmxpc3RlbmVySGFuZGxlcixcclxuICAgICAgICAgICAgcHJvY2Vzc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLmxvYWRBbGwoKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5sb2FkQWxsKCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbnB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgYXdhaXQgdGhpcy5faW5pdCgpO1xyXG4gICAgcmV0dXJuIHRoaXMubG9naW4odGhpcy5jb25maWcudG9rZW4pO1xyXG59XHJcbiAgICBcclxufVxyXG4iXX0=