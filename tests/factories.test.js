const EmployeeFactory = require('../factories/employee.factory')

test('Employee name test', () => {
	const employee = EmployeeFactory.create('Sanek', 'engineer')
	const expectedName = 'Sanek'

	expect(employee.name).toBe(expectedName)
});

test('Engineer test', () => {
	const employee = EmployeeFactory.create('A', 'engineer')
	const salaries = employee.salaries
	const expectSalaries = ['base', 'bonus', 'hours']

	salaries.forEach((salary, index) => {
		expect(salary.type).toBe(expectSalaries[index])
	})

	expect(salaries.length).toBe(expectSalaries.length)
});

test('Manager test', () => {
	const employee = EmployeeFactory.create('A', 'manager')
	const salaries = employee.salaries
	const expectSalaries = ['base', 'bonus']

	salaries.forEach((salary, index) => {
		expect(salary.type).toBe(expectSalaries[index])
	})

	expect(salaries.length).toBe(expectSalaries.length)
});

test('Worker test', () => {
	const employee = EmployeeFactory.create('A', 'worker')
	const salaries = employee.salaries
	const expectSalaries = ['hours']

	salaries.forEach((salary, index) => {
		expect(salary.type).toBe(expectSalaries[index])
	})

	expect(salaries.length).toBe(expectSalaries.length)
});
