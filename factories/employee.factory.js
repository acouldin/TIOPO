const SalaryFactory = require('./salary.factory')
const types = require('./employee.types.json')

const salaries = type => {
  const salaries = []
  types[type].forEach(salary => {
    salaries.push(SalaryFactory[salary]())
  })
  return salaries
}

const sum = {
  unit: 'roubles',
  value: 0,
}

exports.create = (name, type) => ({
  name: name,
  type: type,
  sum: sum,
  salaries: salaries(type),
})
