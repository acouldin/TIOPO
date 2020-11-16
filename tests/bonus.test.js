const salarySystem = require('../systems/salary.system')
const db = require('../fixtures/db.json')

test('base test', () => {
  const result = salarySystem['bonus'](db.sum, db.money)
  expect(result.value).toBe(db.sum.value + db.money.money.value)
})
