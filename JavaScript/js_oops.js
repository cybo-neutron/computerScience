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

const Naruto = new Character("Naruto", 23);

console.log(Naruto);
Naruto.printName();
Naruto.printAge();
console.log(Naruto.name);
console.log(Naruto.age);

const Sasuke = new Character("Sasuke", 24);
console.log(Sasuke);
Sasuke.printName();
Sasuke.printAge();

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.printName = function () {
    console.log(this.name);
  };
}

const p = new Person("Bob", 34);
p;
console.log(p.name);
console.log(p.age);
p.printName();

const obj = {
  name: "random",

  changeName: function (name) {
    this.name = name;
  },
};

console.log(obj.name);
obj.changeName("Renji");
console.log(obj.name);
