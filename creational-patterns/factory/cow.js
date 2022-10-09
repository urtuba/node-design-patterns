class Cow {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.skill = 'produces milk'
    this.diet = 'herbivore'
  }

  get info() {
    return `The cow's name is ${this.name}, age is ${this.age}. Cows ${this.skill}, and their diet is ${this.diet}.\n`
  }
}

module.exports = Cow
