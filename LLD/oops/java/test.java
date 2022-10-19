// package com.neer.test;

public class test {
    public static void main(String[] args) {
        Person p = new Person("Mac");
        System.out.println(p);

    }

}

class Person {
    public String s;

    public Person(String s) {
        this.s = s;
    }

    @Override
    public String toString() {
        return s;
    }
}
