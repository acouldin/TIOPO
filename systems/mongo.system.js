const mongoose = require('mongoose')
const config = require('config')
const Employee = require('../models/employee.model')
const Salary = require('../models/salary.model')

exports.mongoose = mongoose

exports.connect = async () => {
	try {
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
	} catch (e) {
		console.log('Ошибка подключения к mongoDB', e.message)
		process.exit(1)
	}
}

exports.addEmployee = async employee => {
	try {
		const name = employee.name
		const type = employee.type
		const sum = JSON.stringify(employee.sum)

		const employeeModel = new Employee({ name, type, sum })

		await employeeModel.save()

		const candidateModel = await Employee.findOne({ name })
		const owner = candidateModel.id

		employee.salaries.forEach(async salary => {
			const type = salary.type
			const value = JSON.stringify(salary.value)

			const salaryModel = new Salary({ type, value, owner: owner })

			await salaryModel.save()
		});

		console.log("Работник успешно добавлен")
		return (true)

	} catch (e) {
		console.log("Ошибка при создании работника в бд")
		return (false)
	}
}

exports.getEmployee = async name => {
	try {
		const candidateModel = await Employee.findOne({ name })

		if (!candidateModel) {
			console.log("Работник не найден")
			return null
		}

		const owner = candidateModel.id
		const type = candidateModel.type
		const sum = JSON.parse(candidateModel.sum)

		const salaryModels = await Salary.find({ owner })

		const salaries = salaryModels.map((salary) => {
			const type = salary.type
			const value = JSON.parse(salary.value)
			return { type, value }
		})

		const employee = { name, type, sum, salaries }

		console.log("Работник получен")
		return employee

	} catch (e) {
		console.log("Ошибка при получении работника")
		return null
	}
}

exports.updateEmployee = async employee => {
	try {
		const { name, salaries } = employee
		const sum = JSON.stringify(employee.sum)

		const { id } = await Employee.findOne({ name })
		const candidateModel = await Employee.updateOne({ name }, { sum })

		if (!candidateModel) {
			console.log("Нельзя обновить то, чего нет")
			return false
		}

		salaries.forEach(async (salary) => {
			const type = salary.type
			const value = JSON.stringify(salary.value)
			const candidateSalary = await Salary.updateOne({ type, owner: id }, { value })

			if (!candidateSalary) {
				console.log("Ошибка в обновлении salary")
				return false
			}
		})

		console.log("Данные обновлены")
		return true

	} catch (e) {
		console.log("Ошибка при обновлении данных работника")
		return false
	}
}