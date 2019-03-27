const commando = require('discord.js-commando')

const quotes = [
	'Give your balls a tug you tit fucker',
	'Tell your mom to refill the phone she bought so i can face time her late night',
	'Your mom loves butt play like I love Haagen Das, let’s get some fucking ice cream',
	'I made your mum so wet that Trudeau deployed a 24 hour infantry unit to stack sandbags around my bed',
	'Your life is so pathetic I ran a 15k just to raise awareness for it',
	'Fuck your whole fucking life',
	'Your mom liked my Instagram picture from two years ago of me at the beach, tell her I\'ll wear my little shorts for her anytime'
]

const quoteSpeacial = [
	' fight me see what happens!',
	'Ya what’s goin to happen Shoresy?',
	'Three things, I hit you, you hit the pavement, I jerk off on your driver side door handle!'
]

class ShoresyQuoteCommand extends commando.Command {
	constructor (client) {
		super(client, {
			name: 'shoresy',
			group: 'quote',
			memberName: 'shoresy',
			description: 'Sends a Shoresy quote to the channel',
			examples: [ '!shoresy @User' ],
			args: [
				{
					key: 'user',
					prompt: 'Who\'s Shorsey talking too?',
					type: 'user',
					default: ''
				}
			]
		})
	}

	async run (message, { user }) {
		var userName, quote, msg
		var quoteId = Math.floor(Math.random() * quotes.length)

		if (!user) {
			userName = message.author
		} else {
			userName = '<@' + user.id + '>'
		}
		if (!quoteId) {
			quote = userName + quoteSpeacial[0] + '\n' + userName + ' \'' + quoteSpeacial[1] + '\'' + '\n' + quoteSpeacial[2]
			msg = quote
		} else {
			quote = quotes[quoteId]
			msg = userName + ' ' + quote
		}

		message.say(msg)
	}
}

module.exports = ShoresyQuoteCommand
