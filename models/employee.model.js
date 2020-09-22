const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
	name: { type: String, required: true, unique: true },
	type: { type: String, required: true },
	sum: { type: String, required: true }
})

module.exports = model('Employee', schema)