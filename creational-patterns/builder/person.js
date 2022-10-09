class Person {
  constructor(name) {
    this.name = name
  }

  surname(surname) {
    this.surname = surname
    return this
  }

  gender(gender) {
    this.gender = gender
    return this
  }

  age(age) {
    this.age = age
    return this
  }

  nation(nation) {
    this.nation = nation
    return this
  }
}

module.exports = Person
