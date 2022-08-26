const express = require('express')
require('./db/connection.js')
const studentRouter = require('./routers/routes.js')

const app = express()

app.use(express.json())

app.use(studentRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Application running on ${port}`)
})
