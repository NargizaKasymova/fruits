let fruits = [
    {id: '1',
    name: 'apples',
    price: '50 s.'},
    {id: '2',
    name: 'mango',
    price: '90 s.'},
    {id: '3',
    name: 'oranges',
    price: '170 s.'},
]

exports.getFruits = function(req, res) {
    res.status(200).json(fruits)
}

exports.getFruitById = function(req, res) {
    // console.log('Request by ID: ', req.headers.id)
    console.log('Query Params: ', req.query)
}

exports.getFruitById = function getFruitById(req, res) {
    console.log('Request by ID: ', req.headers.id)
    console.log('Query Params: ', req.query)
    let id = req.headers.id
    const filteredList = fruits.filter(fruit => fruit.id === id)
    res.status(201).json(filteredList)
}

exports.createTitle = function createTitle(req, res) {
    console.log(req.body)
    fruits.push(req.body)
    res.status(201).json(fruits)
}

exports.deleteTitle = function deleteTitle(req, res) {
    console.log('ID params: ', req.params)
    console.log('Fruits IdValue: ', req.params.fruitId)

    fruits = fruits.filter(fruit => fruit.id !== req.params.fruitId)
    res.status(201).json('This title was deleted')
}