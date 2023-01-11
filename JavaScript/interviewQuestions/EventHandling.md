## **Event Bubbling**
Propagation of event from `child` -> `parent`.

eg.  
Lets say we have a `div` and a `button`.  
`button` nested inside `parent`.
```
div-> parent 
button -> child
```
Now, click event handlers are attached to both the `child` and `parent`.
```js
child.addEventListener("click",()=>{log("child clicked")})
parent.addEventListener("click",()=>{log("parent clicked")})
```

On clicking the button(child) we get output :   
```js
child clicked
parent clicked
```
The parent event handler is also executed because of ***Event bubbling.***


## **Event Capturing**
Propagation of event from `parent` -> `child`.

Consider the same example like above but there is a small difference in the event handler.
```js
child.addEventListener("click",()=>{log("child clicked")})
parent.addEventListener("click",()=>{log("parent clicked")},true)
```
**Note** : *There is a third argument in the parent event handler `true`*

The Output:  
```js
parent clicked
child clicked
```

Now, parent gets executed first and then the child. This is because of ***Event Capturing***

## Preventing event bubbling
- event.stopPropagation()
- event.stopBubbling()


## **Event delegation**
