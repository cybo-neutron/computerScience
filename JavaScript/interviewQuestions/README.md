## Higher Order functions

A function which takes function as an argument or returns a function from it is called Higher Order function.

```javascript
function hof(cb) {
  cb();
}

hof(() => {
  console.log("hello world");
});
```
Here `hof` is a **higher order function** and `cb` is a **callback function**.



----

## **Event Loop**

Best link to study : https://javascript.info/event-loop#event-loop

Things to dig into
- call stack
- web APIs
- Callback Queue / Task Queue
- Event loop
- Microtask Queue
- mutation observer


What are the tasks that can come into Microtask queue?  
All the callback functions which come from **promises** and **mutation observer**

- mutation 
- promisies

TODO:
- starvation of callback queue


### **Event loop**
Endless loop where JS engine waits for tasks, executes them and then sleeps waiting for more tasks.


---


## **Promise**

- A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.
- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A Promise is a proxy for a value not necessarily known when the promise is created.

```js
let promise = new Promise(function(resolve, reject) {
  
});

```
The function passed to new Promise is called `executor`
```js
//this is executor
function(resolve,reject){}

```

When exec