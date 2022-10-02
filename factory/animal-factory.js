const Cow = require('./cow')
const Monkey = require('./monkey')

const animalKinds = ['cow', 'monkey']

const animalFactory = (kind, { name, age }) => {
  if (!animalKinds.includes(kind)) {
    throw new Error('Animal kind not supported: ' + kind)
  }

  if (kind == 'cow') {
    return new Cow(name, age)
  }
  if (kind == 'monkey') {
    return new Monkey(name, age)
  }
}

module.exports = animalFactory
