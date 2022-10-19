package topics_1;

public class static_Example {
    public static void main(String[] args) {
        StaticBlock.print();
    }
}

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