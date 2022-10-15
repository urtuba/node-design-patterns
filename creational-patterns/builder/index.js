const Person = require('./person')

const john = new Person('John').surname('Doe').gender('Male').age(32)
const micheal = new Person('Micheal').surname('Scott').nation('American')
const martha = new Person('Martha').age(20).gender('Female')

console.log(john)
console.log(micheal)
console.log(martha)
