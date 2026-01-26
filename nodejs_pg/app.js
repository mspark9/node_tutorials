const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express()

app.use(cors())

app.get('/', (request, response) => {
    response.send('Hello node~!! haha')
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})