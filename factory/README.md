# Factory

> In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.

[-from](https://en.wikipedia.org/wiki/Factory_method_pattern)

A simple example be like:

```js
import Cow from './cow'
import Monkey from './monkey'

const animalFactory = (kind, { name, age }) => {
  if (kind == 'cow') {
    return new Cow(name, age)
  }
  if (kind == 'monkey') {
    return new Monkey(name, age)
  }
}
```
