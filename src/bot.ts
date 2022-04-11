import { Client, ClientOptions } from "discord.js"
import * as dotenv from "dotenv"
import ready from "./listeners/ready"

console.log("Bot is starting...")
dotenv.config()

const client = new Client({ intents: [] })
ready(client);

client.login(process.env.DISCORD_TOKEN)