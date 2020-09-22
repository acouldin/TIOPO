const salarySystem = require('../systems/salary.system')

test('base test', () => {
	const sum = {
		"unit": "roubles",
		"value": 1337
	}
	const money = {
		"money": {
			"value": 1488,
			"unit": "roubles"
		}
	}

	const result = salarySystem['base'](sum, money)

	
	expect(result.value).toBe(2825)
})