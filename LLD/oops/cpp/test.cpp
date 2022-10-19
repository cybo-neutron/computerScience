#include <iostream>
using namespace std;

class Person
{
    string name;
    int id;

public:
    Person() : Person("Default", 4)
    {
    }

    Person(string name, int id)
    {
        this->name = name;
        this->id = id;
    }

    void Print()
    {
        cout << "Name : " << this->name << endl;
        cout << "ID : " << this->id << endl;
    }
};

int main()
{
    auto defaultPerson = new Person();

    defaultPerson->Print();
    return 0;
}