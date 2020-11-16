const CountSystem = require('../systems/count.system')
const EditSalarySystem = require('../systems/edit-salary.system')
const EmployeeFactory = require('../factories/employee.factory')
const config = require('config')
const db = require('../fixtures/db.json')

test('Count test', () => {
  const employee = EmployeeFactory.create('A', 'engineer')
  const NDFL = 1 - config.get('app').get('NDFL') / 100
  const regional = 1 + config.get('app').get('regional') / 100

  EditSalarySystem['base'](employee, db.base)
  EditSalarySystem['bonus'](employee, db.bonus)
  EditSalarySystem['hours'](employee, db.hours, db.rate.value)

  CountSystem.count(employee)

  const result = employee.sum.value
  const expectResult =
    (db.base + db.bonus + db.hours * db.rate.value) * regional * NDFL

  expect(result).toBe(expectResult)
})
