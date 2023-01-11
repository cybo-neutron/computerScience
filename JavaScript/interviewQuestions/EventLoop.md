# **Event Loop**
Endless loop where JS engine waits for tasks, executes them and then sleeps waiting for more tasks.

**Call Stack** : Call stack keeps track of function calls

**Task Queue/Event Queue** : Handles Web APIs callbacks

Every execution of code in Javascript takes place in Call Stack.Interpreter reads the code line-by-line and pushes each statement into the call stack one by -one and pops them out after their execution. 

When an asyncronous code is detected it is moved over to be handled by Web APIs and callback is being put into task queue or microtask queue.
All these callbacks are executed once all the syncronous code is being executed.   
The microtask queue is given more priority.


## **Web APIs.**
- setTimeOut
- DOM APIs
- fetch()
- localStorage
- console
- location  
........

## **Microtask queue**
- Promise callback
- Mutation Observer

## **Starvation in task queue**
When there are many tasks lined up in microtask queue and one microtask queue callback function creates more microtasks, it leads to task queue callbacks not getting chance to execute. This condition is called **Starvation**.


