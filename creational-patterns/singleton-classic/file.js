const Counter = require('./singleton')

function count5Times() {
  const counter = Counter.getInstance()

  for(let i = 0; i < 5; i++) {  
   counter.count()
  }
}

function count3Times() {
  const counter = Counter.getInstance()
  
  for(let i = 0; i < 3; i++) {
    counter.count()
  }
}

module.exports = { count3Times, count5Times }
