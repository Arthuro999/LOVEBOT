const { bot, textMaker } = require('../lib')

bot(
	{
		pattern: 'cloudheart ?(.*)',
		fromMe: true,
		desc: 'cloud text effect',
		type: 'textmaker',
	},
	async (message, match) => {
		if (!match) return await message.send(' _Give me text_ \n 💠 *Example* - *.cloudheart* *Prabhath*')
		const effect_url =
			'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
		const { status, url } = await textMaker(effect_url, match)
		if (url) return await message.sendFromUrl(url)
	}
)
