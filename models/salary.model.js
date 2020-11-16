const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
	type: { type: String, required: true },
	value: { type: String, required: true },
	owner: { type: Types.ObjectId, ref: 'Employee', required: true }
})

module.exports = model('Salary', schema)