// OLD SChOOL SINGLETON CLASS

class Singleton {
  constructor () {
    this.counter = 0
  }

  count () {
    this.counter++
    console.log(this.counter)
  }
}

module.exports = new Singleton()
