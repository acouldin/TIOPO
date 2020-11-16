const salarySystem = require('../systems/salary.system')
const HoursSystem = require('../systems/hours.system')
const db = require('../fixtures/db.json')

test('hours test', () => {
  const result = salarySystem['hours'](db.sum, { time: db.time, rate: db.rate })
  expect(result.value).toBe(db.sum.value + db.time.value * db.rate.value)
})
