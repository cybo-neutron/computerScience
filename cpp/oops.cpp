#include <iostream>
using namespace std;

void Log(std::string s)
{
    cout << s << endl;
}

class Vehicle
{
private:
    int wheels;
    string name;
    string id;

public:
    Vehicle()
    {
        cout << "Creating vehicle\n";
    }
    Vehicle(int wheels, string name, string id)
    {
        this->wheels = wheels;
        this->name = name;
        this->id = id;
    }
    // Copy constructor
    // Vehicle(Vehicle &v)
    // {
    //     cout << "Copy constructor called\n";
    //     this->wheels = v.wheels;
    //     this->name = v.name;
    //     this->id = v.id;
    // }
    // Vehicle(const Vehicle &v)
    // {
    //     cout << "Const Copy constructor called\n";
    //     this->wheels = v.wheels;
    //     this->name = v.name;
    //     this->id = v.id;
    // }
    string test = "test";
    ~Vehicle();
};

Vehicle::~Vehicle()
{
    cout << "Destorying vehicle\n";
}

int main()
{
    Vehicle v1;
    Vehicle v2 = v1;
    Vehicle v3(v1);

    v1.test[1] = "rest";
    cout << v1.test << endl;
    cout << v2.test << endl;
}