# **Observer Pattern**

### **Publisher**
The object which has states that others are interested in. We can think of it as **subject**

### **Subscribers**
The objects which want to keep track of changes to the publisher's state.

This mechanism consists mainly of these 2 things
1. An array for listing the references of all the subscribers
2. Public methods to *add* subscribers and *remove* them from the array.

```java

class Publisher{
    subscribers[];

    addSubscriber(subscriber);
    removeSubscriber(subscriber);
}
    
```