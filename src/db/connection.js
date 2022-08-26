const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/profilestudents')
  .then(() => {
    console.log(`connecttion is successfull`)
  })
  .catch((e) => {
    console.log(e)
  })
