const HoursSystem = require('../systems/hours.system')

test('hour system (minutes) test', () => {
  const timeMinutes = 300

  const result = HoursSystem['m'](timeMinutes)
  expect(result.value).toBe(5)
})

test('hour system (hours) test', () => {
  const timeHours = 5

  const result = HoursSystem['h'](timeHours)
  expect(result.value).toBe(5)
})

test('hour system (days) test', () => {
  const timeDays = 2

  const result = HoursSystem['d'](timeDays)
  expect(result.value).toBe(48)
})
