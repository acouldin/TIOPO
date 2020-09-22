const MongoSystem = require('./systems/mongo.system')
const EmployeeFactory = require('./factories/employee.factory')
const CountSystem = require('./systems/count.system')
const EditSalarySystem = require('./systems/edit-salary.system')

exports.create = async arr => {
	const name = arr[1]
	const type = arr[2]
	const employee = EmployeeFactory.create(name, type)
	MongoSystem.addEmployee(employee)
}

exports.edit = async arr => {
	const name = arr[1]
	const salary = arr[2]
	const newValue = parseInt(arr[3])

	const employee = await MongoSystem.getEmployee(name)
	EditSalarySystem[salary](employee, newValue)
	const result = await MongoSystem.updateEmployee(employee)
}

exports.count = async arr => {
	const name = arr[1]

	const employee = await MongoSystem.getEmployee(name)
	CountSystem.count(employee)
	const result = await MongoSystem.updateEmployee(employee)
	console.log(employee.sum)
}

exports.salary = async arr => {
	const name = arr[1]

	const employee = await MongoSystem.getEmployee(name)
	console.clear()
	console.log(`name: ${name}`)
	console.log(`salary: ${employee.sum.value}`)
	console.log(`parts: `)
	employee.salaries.forEach((salary) => {
		console.log(`	${salary.type}: ${salary.value.money.value}`)
	})
}

exports.close = arr => {
	process.exit(0)
}

exports.exit = arr => {
	process.exit(0)
}

exports.quit = arr => {
	process.exit(0)
}