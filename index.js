const express = require('express')
const app = express()
app.use(express.json())
const { getFruits, getFruitById, createTitle, deleteTitle, updateTitle } = require('./totalList')
app.get('/get-fruit', getFruits)
app.get('/get-fruitbyid', getFruitById)
app.post('/create-title', createTitle)
app.delete('/delete-title/:fruitId', deleteTitle)
app.patch('/update-title/:id', updateTitle)


const PORT = 5050
app.listen(PORT, function() {
    console.log('Backend app is started: ' + PORT)
})