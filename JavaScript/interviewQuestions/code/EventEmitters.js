const EventEmitter = require("events");
const myEmitter = new EventEmitter();

setTimeout(() => {
  myEmitter.emit("listen", "Go Shawty, its your birthday");
  myEmitter.emit("listen", "Go Shawty, its your birthday");
  myEmitter.emit("listen", "Go Shawty, its your birthday");
}, 1000);

// myEmitter.emit("listen", "Hey why you left me??");

myEmitter.on("listen", (data) => {
  console.log(data);
});
