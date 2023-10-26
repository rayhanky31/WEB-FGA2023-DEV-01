const express = require('express')
const router = require('./routes/route')
const app = express()
// const port = 3000

require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.use('/', router)
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })   

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})