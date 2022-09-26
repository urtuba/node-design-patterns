const { count3Times, count5Times } = require('./file')
const Counter = require('./singleton')

const counter = Counter.getInstance()

// 1
console.log('count()')
counter.count()

// 4
console.log('count3Times()')
count3Times()

// 5
console.log('count()')
counter.count()

// 10
console.log('count5Times()')
count5Times()
