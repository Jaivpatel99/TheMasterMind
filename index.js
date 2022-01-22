const { Client, Intents , Collection} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const{ Token } = require("./config.json");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;

client.commands = new Collection()

require("./Handlers/Events")(client);
require("./Handlers/commands")(client);

client.login(Token);