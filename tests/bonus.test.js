const salarySystem = require('../systems/salary.system')

test('base test', () => {
	const sum = {
		"unit": "roubles",
		"value": 1488
	}
	const money = {
		"money": {
			"value": 1337,
			"unit": "roubles"
		}
	}

	const result = salarySystem['bonus'](sum, money)
	expect(result.value).toBe(2825)
})