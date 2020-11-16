const salarySystem = require('../systems/salary.system')
const db = require('../fixtures/db.json')

test('base test', () => {
  const result = salarySystem['base'](db.sum, db.money)
  expect(result.value).toBe(db.sum.value + db.money.money.value)
})
