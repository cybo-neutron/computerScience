package topics_1;

public class InnerClass_Example {
    static class Person {
        String name;

        public Person(String name) {
            this.name = name;
        }

        @Override
        public String toString() {
            return getClass().getName() + " : " + this.name;
        }
    }

    public static void main(String[] args) {
        Person p = new Person("Roxy");

        System.out.println(p);

    }
}
