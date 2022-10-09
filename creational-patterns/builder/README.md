# Builder

```js
Pizza(size) { ... }
Pizza(size, cheese) { ... }
Pizza(size, cheese, pepperoni) { ... }
Pizza(size, cheese, pepperoni, bacon) { ... }
Pizza(size, cheese, pepperoni, bacon, pineapple) { ... }
...
```

This example represents telescoping constructor pattern. Multiple constructors or constructors with lots of properties con be confusing. Builders reduces effort to remember order of constructor parameters and guards you about initialization mistakes. `builder` pattern creates code that is easy to write, easy to read and understand. Also you can extend your class more easily later, without breaking any code.

Look a part of index.js to see how easy it is:

```js
const john = new Person('John').surname('Doe').gender('Male').age(32)
const micheal = new Person('Micheal').surname('Scott').nation('American')
const martha = new Person('Martha').age(20).gender('Female')
```
