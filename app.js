const ER = require('./repositories/employee.repository')
const сommands = require('./commands')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

ER.connect()

const question = () => {
  rl.question('> ', async answer => {
    const arr = answer.split(' ')
    if (arr[0] != '') await сommands[arr[0]](arr)
    question()
  })
}

question()
