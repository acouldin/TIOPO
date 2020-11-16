exports.base = () => ({
  type: 'base',
  value: {
    money: {
      value: 0,
      unit: 'roubles',
    },
  },
})

exports.bonus = () => ({
  type: 'bonus',
  value: {
    money: {
      value: 0,
      unit: 'roubles',
    },
  },
})

exports.hours = () => ({
  type: 'hours',
  value: {
    time: {
      unit: 'h',
      value: 0,
    },
    rate: {
      unit: 'roubles',
      value: 0,
    },
  },
})
