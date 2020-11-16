const findSalary = (salaries, name) =>
  salaries.find(salary => salary.type === name)

exports.base = (employee, value) => {
  const salary = findSalary(employee.salaries, 'base')
  salary.value.money.value = value
}

exports.bonus = (employee, value) => {
  const salary = findSalary(employee.salaries, 'bonus')
  salary.value.money.value = value
}

exports.hours = (employee, time, rate) => {
  const salary = findSalary(employee.salaries, 'hours')
  salary.value.time.value = time
  salary.value.rate.value = rate
}
