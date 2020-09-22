const salarySystem = require('../systems/salary.system')
const HoursSystem = require('../systems/hours.system')

test('hours test', () => {
	const sum = {
		"unit": "roubles",
		"value": 1337
	}
	const time = {
		
			"unit": "h",
			"value": 8
		
	}
	const rate = {
		
			"unit": "roubles",
			"value": 300
		
	}

	const result = salarySystem['hours'](sum, {time, rate})
	expect(result.value).toBe(3737)
})