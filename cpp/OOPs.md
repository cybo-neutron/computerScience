## Class declaration
```cpp
class Vehicle
{
private:
    int wheels;
    string name;
    string id;

public:
    Vehicle();  //Default constructor
    Vehicle(int wheels, string name, string id) //Parameterized constructor
    {
        this->wheels = wheels;
        this->name = name;
        this->id = id;
    }
};

```

### Default Constructor and Parameterized constructor
```
classname();
classname(int wheels,string name,string id);
```

### **Ways of defining a method**
We can define a method inside the class as well as outside the class.
How to define a method outside the class
```cpp
//defining constructor outside class
<class_name>::<class_name>(...parameters){
    ...body
}

//defining destructor outside class
<class_name>::~<class_name>(...parameters){
    ...body
}

//for all other methods
<return_type> <class_name>::<method_name>(...parameters){
... function body
}

```
--- 
## **Copy Constructor**
**Reference** : [GFG copy constructor](https://www.geeksforgeeks.org/copy-constructor-in-cpp/)  
A Copy constructor is an overloaded constructor used to declare and initialize an object from another object.

**Characteristics:**  
1. Used to initialize the members of a newly created object by copying the members of an already existing object.
2. Copy constructor takes a reference to an object of the same class as an argument.
3. The process of initializing members of an object through a copy constructor is known as copy initialization.
4. The copy constructor can be defined explicitly by the programmer. If the programmer does not define the copy constructor, the compiler does it for us.

**Types of Copy constructor**
1. Default copy constructor
2. User Defined copy constructor
 
### **When is a user-defined copy constructor needed?**   
If we don’t define our own copy constructor, the C++ compiler creates a default copy constructor for each class which does a member-wise copy between objects. The compiler-created copy constructor works fine in general.   
We need to define our own copy constructor only if an object has pointers or any runtime allocation of the resource like a file handle, a network connection, etc.

Default constructor does **shallow copy**.  
User-defined constructor does **deep copy**.
