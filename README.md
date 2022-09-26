# NodeJs: Design Patterns

A design pattern is a named, reusable solution to a specific problem. This repository (in-future) covers most of design patterns using node js. Each design pattern will have a brief description and code example(s).

## Creational Patterns

Creational patterns handle object instantiation.

### Singleton

Singleton pattern is used to instantiate a class only once, and use only this instance. Object is created once, other constructor calls after instantiation should return previously created instance. NodeJs has simple way to do it: instantiate class before exporting.

1. [Classic Singleton](https://github.com/urtuba/node-design-patterns/blob/master/creation/singleton-classic)
1. [Practical Singleton](https://github.com/urtuba/node-design-patterns/blob/master/creation/singleton-practical)

### Factory

Factories are functions that are used to create instances of different classes. They provide a level of abstraction, and they make decisions on which class / constructor should be used to create the object with given arguments.

1. [Factory](https://github.com/urtuba/node-design-patterns/blob/master/factory)