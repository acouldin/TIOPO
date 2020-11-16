const MongoSystem = require('./systems/mongo.system')
const сommands = require('./commands')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

MongoSystem.connect()

const question = () => {
  rl.question('> ', async answer => {
    const arr = answer.split(' ')
    await сommands[arr[0]](arr)
    question()
  })
}

question()
