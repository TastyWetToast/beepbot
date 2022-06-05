const { default: axios } = require("axios")
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DefineCommand extends BaseCommand {
  constructor() {
    super('define', 'defining', []);
  }

  async run(client, message, args) {
    message.channel.send(`googling ${args.length} definition(s)`)
    message.channel.send("defining...")
    for (var i=0, len=args.length;  i < len; i++) {
        const ix = args[i]
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${args[i]}`)
        .then(async res =>{
            message.channel.send(`word: ${ix}`)
            var meaning = res.data[0].meanings
    for (var means=0, len=meaning.length; means < len; means++){
            var define = res.data[0].meanings[0].definitions
            for (var m=0, len=define.length;  m < len; m++){
              message.channel.send(res.data[0].meanings[means].definitions[m].definition)
    
            }
        }message.channel.send(" ")
        }).catch(function(error){message.channel.send("end of defs\n\n")})
    }
  }
}