# NodeJs: Design Patterns

A design pattern is a named, reusable solution to a specific problem. This repository (in-future)  covers most of design patterns using node js. Each design pattern will have a brief description and code example(s).

## Creational Patterns

Creational patterns handle object instatntiation. 

### Singleton Pattern

Singleton pattern is used to instatntiate a class only once, and use only this instance. Object is created once, other constructor calls after instatntiation should return previously created instance. NodeJs has simple way to do it: instantiate class before exporting. 
