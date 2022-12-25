/*
call -> takes arguments like normal function just after assigning the object
apply ->  takes array for arguments
bind-> returns a new method
*/

const obj = {
  name: "dude",
  age: 23,
  print: function () {
    console.log(`${this.name}`);
  },

  greeting: function (greet) {
    console.log(`${greet},${this.name}`);
  },
};

obj.print();

obj.print.call({ name: "john" });
obj.print.apply({ name: "harry" });
let newPrint = obj.print.bind({ name: "Hercules" });
newPrint();

obj.greeting("Hello");
obj.greeting.call({ name: "Ichigo" }, "Hey");
obj.greeting.apply({ name: "Naruto" }, ["Hola"]);
const newGreeting = obj.greeting.bind({ name: "Midoria" });
newGreeting("Konichiwa");
