package topics_1;

public class singleton {
    public static void main(String[] args) {
        System.out.println(singletonClass.getInstance().name);
        System.out.println(singletonClass.getInstance().name);
        System.out.println(singletonClass.getInstance().name);

    }
}

class singletonClass {

    public String name;

    private static singletonClass instance = null;

    private singletonClass() {
        System.out.println("Creating a new instance");
        this.name = "Default";
    }

    public static singletonClass getInstance() {
        if (instance == null)
            instance = new singletonClass();
        return instance;
    }
}
