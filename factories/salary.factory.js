exports.base = () => ({
  type: 'base',
  value: {
    money: {
      value: 10000,
      unit: 'roubles',
    },
  },
})

exports.bonus = () => ({
  type: 'bonus',
  value: {
    money: {
      value: 2000,
      unit: 'roubles',
    },
  },
})

exports.hours = () => ({
  type: 'hours',
  value: {
    time: {
      unit: 'h',
      value: 5,
    },
    rate: {
      unit: 'roubles',
      value: 100,
    },
  },
})
