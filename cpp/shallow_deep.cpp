#include <iostream>
using namespace std;

class shallow
{
public:
    int a;
    int *p;

    shallow(int a, int b)
    {
        this->a = a;
        p = new int(b);
    }

    void showData()
    {
        cout << "Address of a :" << &a << endl;
        cout << "Address of p : " << &*p << endl;
    }
};

class deep
{
public:
    int a;
    int *p;
    deep(int a, int b)
    {
        this->a = a;
        p = new int(b);
    };

    deep(deep &d)
    {
        a = d.a;
        p = new int(*d.p);
    }

    void showData()
    {
        cout << "Deep Address of a :" << &a << endl;
        cout << "Deep Address of p : " << &*p << endl;
    }
};

int main()
{
    shallow s1(1, 3);
    s1.showData();
    shallow s2(s1);
    s2.showData();

    deep d1(1, 3);
    d1.showData();
    deep d2(d1);
    d2.showData();
}