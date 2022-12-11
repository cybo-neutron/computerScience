## JavaScript Classes

In JavaScript, classes are the special type of functions. We can define the class just like function declarations and function expressions.

**Some important points to note about Javascript classes**
* Class declaration is not a part of javascript `hoisting`. So it is required to declare the class before invoking it.
* We cannot re-declare classes, unlike functions. It can be declared only once.
* To access any member of the class you have to use `this` keyword.


```javascript
class Character {
  genre = "anime";
  //class constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //method
  printName() {
    console.log(this.name);
  }

  printAge() {
    console.log(this.age);
  }
}

```