# Singleton Classic

Using getInstance static method instead of default object constructor allows us to skip re-instantiation and return the previously created instance. Note that we call this method in three different locations in the code; however, each getInstance call returned same instance. So counter could continue with previous state (history). We were able to count till seven across different files and functions.

```js
class A {
  constructor () {}
  static getInstance() {
    if (this.instance) return this.instance

    this.instance = new A()
    return this.instance
  }
}
```
