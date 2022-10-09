class Monkey {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.skill = 'produces milk'
    this.diet = 'omnivorous'
  }

  get info() {
    return `The monkey's name is ${this.name}, age is ${this.age}. Cows ${this.skill}, and their diet is ${this.diet}.`
  }
}

module.exports = Monkey
