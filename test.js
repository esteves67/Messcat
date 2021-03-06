const command = process.argv[process.argv.length-1]

const LanguageProcessor = require('@adiwajshing/whatsapp-info-bot/LanguageProcessor.js')
const intents = ["./intents/", "./secret_intents/"]
const processor = new LanguageProcessor(intents, {parsingFailedText: "Unknown command <input>", admins: []})

switch(command) {
	case "response":
		processor.chat ()
	break
	case "dining":
		setTimeout(() => {
			const ext = processor.customProcessor
			console.log(ext.mealsData)
		}, 500)
	break
	default:
	console.log("unknown command: " + command)
	break
}
