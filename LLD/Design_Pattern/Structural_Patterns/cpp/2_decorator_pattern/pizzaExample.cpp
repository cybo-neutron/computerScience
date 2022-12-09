#include <iostream>
using namespace std;

class BasePizza
{
public:
    virtual int cost() = 0;
};

class FarmHouse : public BasePizza
{
public:
    int cost()
    {
        return 300;
    }
};

class VegDelight : public BasePizza
{
public:
    int cost()
    {
        return 250;
    }
};

// Decorators

class ToppingDecorator : public BasePizza
{
protected:
    BasePizza *pizza;
};

class ExtraCheese : public ToppingDecorator
{
public:
    ExtraCheese(BasePizza *pizza)
    {
        this->pizza = pizza;
    }
    int cost()
    {
        return this->pizza->cost() + 40;
    }
};

class Mushroom : public ToppingDecorator
{
public:
    Mushroom(BasePizza *pizza)
    {
        this->pizza = pizza;
    }
    int cost()
    {
        return this->pizza->cost() + 80;
    }
};

void printToppingsMenu()
{
    cout << "Choose Toppings \n";
    cout << "1. Extracheese\n";
    cout << "2. Mushroom\n";
    cout << "Press any other key to exit\n";
    cout << "Your choice : ";
}

int main()
{
    // BasePizza *bp = new ExtraCheese(new FarmHouse());
    // cout << "Farmhouse cost :" << bp->cost() << endl;

    BasePizza *b = nullptr;

    int option;
    cout << "Select pizza type \n1.Farmhouse\t2.VegDelight\t3.Margherita\n";
    cin >> option;

    switch (option)
    {
    case 1:
        b = new FarmHouse();
        break;
    case 2:
        b = new VegDelight();
        break;

    default:
        break;
    }

    bool more = true;
    do
    {
        cout << "Current Total : " << b->cost() << endl;
        printToppingsMenu();
        cin >> option;

        switch (option)
        {
        case 1:
            b = new ExtraCheese(b);
            break;
        case 2:
            b = new Mushroom(b);
            break;
        default:
            more = false;
            break;
        }

    } while (more);

    cout << "Total cost : " << b->cost() << endl;
}