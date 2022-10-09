# Singleton Classic

NodeJs has very easy method to create singleton. If you instantiate your class before exporting it acts like singleton. Therefore once the instance is created, import brings  the existing instance. Note that we call this method in two different files in the code; however, each import brought us same instance. So counter could continue with previous state (history). We were able to count up to ten across different files and functions.

```js
class A {
  constructor () {}
}

module.exports = new A()
```
