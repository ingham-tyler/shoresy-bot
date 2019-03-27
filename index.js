const commando = require('discord.js-commando')
const bot = new commando.Client()

bot.registry.registerGroup('quote', 'shoresy')
bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + '/commands')

var key
if (process.env.NODE_ENV === 'development' || true) {
	key = require('./.config')
}

bot.login(key.discordToken)
