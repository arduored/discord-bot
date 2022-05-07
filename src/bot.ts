import { Client } from "discord.js";
import * as dotenv from "dotenv";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

console.log("Bot is starting...");
dotenv.config();

const client = new Client({ intents: [] });
ready(client);
interactionCreate(client);

client.login(process.env.DISCORD_TOKEN);
