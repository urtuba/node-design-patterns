const animalFactory = require('./animal-factory')

const sarikiz = animalFactory('cow', { name: 'Sarikiz', age: 8 })
const charlie = animalFactory('monkey', { name: 'Charlie', age: 10 })

console.log('Sarikiz is ' + sarikiz.constructor.name)
console.log(sarikiz.info)

console.log('Charlie is ' + charlie.constructor.name)
console.log(charlie.info)
