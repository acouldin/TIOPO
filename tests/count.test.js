const CountSystem = require('../systems/count.system')
const EditSalarySystem = require('../systems/edit-salary.system')
const EmployeeFactory = require('../factories/employee.factory')
const config = require('config')

test('Count test', () => {
	const employee = EmployeeFactory.create('A', 'engineer')
	const base = 10000
	const bonus = 1000
	const hours = 1
	const rate = 111
	const NDFL = 1 - (config.get('app').get('NDFL') / 100)
	const regional = 1 + (config.get('app').get('regional') / 100)

	EditSalarySystem['base'](employee, base)
	EditSalarySystem['bonus'](employee, bonus)
	EditSalarySystem['hours'](employee, hours, rate)

	CountSystem.count(employee)

	const result = employee.sum.value
	const expectResult = (base + bonus + hours * rate) * regional * NDFL

	expect(result).toBe(expectResult)
});
