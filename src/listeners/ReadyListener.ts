import { Listener } from "discord-akairo";

export default class ReadyListener extends Listener {
    public constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        })
    }
    public exec(): void {
        console.log(`${this.client.user.tag} has started and should be online.`)
        console.log(`Thank you for using Bot-Template by DanTechBoy!`)
        console.log(`Nodejs version: ${process.version}`)
    }
} 