const express = require('express')
const app = express()

const router = require('./apis')

app.use(express.json())
app.use(router)

require('./db/mongodb')

const PORT = 3000

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT} holi`)
})