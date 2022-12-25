## **RESOURCES**
- https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/
- https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898

**Videos**
- [JS examples](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9)
- https://www.youtube.com/watch?v=fvNTJang7l4&t=148s


## **1. Single Responsibility Principle**
- A class should be having only one responsibility (or it should be doing one thing).
- It should have a single reason to change.

## **2. Open Closed Principle**
- Classes should be **open** for extension but **closed** to modification.
- We should be able to add new functionality without touching the existing code for the class.
- Basically we should make an interface of the things which in future can be extended for new features.
- The current requirements should also be implementing this interface and future interface.

For example:
**Wrong Implmentation :** We have an application where we need to save data to file. So we create a class called `SaveData` and write our function `saveToFile` in it.
```c++
class SaveData{
    
    Data data;
    
    saveToFile(Data data);

}
```
But what if a new use case rises in future to save the data in Database.  
Will we add a new function to our existing class `SaveData`?  
This would **violate** Open closed principle as it states that classes should be closed to modification.  
So what's the right implementation then?  
**Right Implementation:** Initially we create an `interface` called `SaveData` and we can extend and implemen this according to our use cases.  

```java
interface SaveData{
    Data data;
    save(Data data);
}
```
Now both our use cases implements this interface.
```java

class SaveToFile implements SaveData{ 
    save(Data data){
        //... some implementation to save data to file..
    }
}

class SaveToDB implements SaveData{
    save(Data data){
        //... some implementation to save data to DB
    }
}

```


## **3. Liskov Substitution Principle**
If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.
- This means that, given that class B is a subclass of class A, we should be able to pass an object of class B to any method that expects an object of class A and the method should not give any weird output in that case.
- Subclass should extend the capability of parent class and not narrow it down.

**Example**  



## **4. Interface Segmentation**
It does not recommend having methods that an interface would not use and require. Therefore, it goes against having fat interfaces in classes and prefers having small interfaces with a group of methods, each serving a particular purpose.

Interfaces should not be bloated with members which are not necessary for every concrete implementation of the interface.

Suppose   
Shape has methods `area` and  `volume`.
Now *rectangle* implements *Shape* interface. The `volume` method should be present in rectangle since its a 2d shape but because it is inheriting *Shape* interface so it must implement `volume` method.

Solution??  
We can make an another interface implementing *Shape*. Lets call it *3DShape* and *2DShape*. 
So all the 2d shapes can easily implement *2DShape* and 3d shapes can implement *3DShape*.

## **5. Dependency Inversion**
The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules, but rather both should depend on abstractions. The abstractions should not depend on details. Instead, the details should depend on abstractions.