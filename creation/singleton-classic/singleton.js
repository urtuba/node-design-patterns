// OLD SChOOL SINGLETON CLASS

class Singleton {
  constructor () {
    this.counter = 0
  }

  count () {
    this.counter++
    console.log(this.counter)
  }

  static getInstance () {
    if (this.instance) {
      return this.instance
    }

    this.instance = new Singleton()
    return this.instance
  }
}

module.exports = Singleton
