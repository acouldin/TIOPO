const SalarySystem = require('./salary.system')
const config = require('config')

exports.count = employee => {
	employee.sum.value = 0
	employee.salaries.forEach((salary) => {
		employee.sum = SalarySystem[salary.type]({ ...employee.sum }, { ...salary.value });
	})
	employee.sum.value = regional(employee.sum.value)
	employee.sum.value = NDFL(employee.sum.value)
}

const regional = value => (
	value * (1 + (config.get('app').get('regional') / 100))
)

const NDFL = value => (
	value * (1 - (config.get('app').get('NDFL') / 100))
)