const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: [true, 'Email id alredy present'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Credential')
      }
    },
  },
  phone: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
})

const Student = new mongoose.model('Student', studentSchema)

module.exports = Student
