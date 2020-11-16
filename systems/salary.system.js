const HoursSystem = require('./hours.system')

exports.base = (sum, { money }) => {
  return {
    unit: sum.unit,
    value: sum.value + money.value,
  }
}

exports.bonus = (sum, { money }) => {
  return {
    unit: sum.unit,
    value: sum.value + money.value,
  }
}

exports.hours = (sum, { time, rate }) => {
  const convertedTime = HoursSystem[time.unit](time.value)

  return {
    unit: sum.unit,
    value: sum.value + convertedTime.value * rate.value,
  }
}
