exports.m = value => {
  return {
    unit: 'h',
    value: Math.round(value / 6) / 10,
  }
}

exports.h = value => {
  return {
    unit: 'h',
    value: value,
  }
}

exports.d = value => {
  return {
    unit: 'h',
    value: value * 24,
  }
}
