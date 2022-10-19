
- [ ] Packages
- [ ] import
- [ ] static
  - Why is main function marked static?
    - because main is the first thing that runs on running the application. hence we need it to be static so that no object needs to made.
  -  Static methods can only access static method. It cannot access non-static methods or members. 
    - But non-static methods can access static methods.
  - Static block
    ```java
    // Will only run once , when the first object is created.
    static {
        System.out.println("This only runs once");
        b = 2 * a;
    }

    ```

    ```java
    class StaticBlock {
    static int a = 4;
    static int b;

    // Will only run once , when the first object is created.
    static {
        System.out.println("This only runs once");
        b = 2 * a;
    }

    @Override
    public String toString() {
        return ("a : " + StaticBlock.a + "\nb: " + StaticBlock.b);
    }

    public static void print() {
        System.out.println("a : " + StaticBlock.a + "\nb: " + StaticBlock.b);
    }

    }   
    ```


- **Inner class**
    - Outer class cannot be static.


- **Singleton class**
    ```java
        class Singleton {

            public String name;

            private static Singleton instance = null;

            private Singleton() {
                System.out.println("Creating a new instance");
                this.name = "Default";
            }

            public static Singleton getInstance() {
                if (instance == null)
                    instance = new Singleton();
                return instance;
            }
        }
    ```