#include <iostream>
using namespace std;
#include "ButtonFactory.hpp"

int main()
{
    string buttonColor;
    cout << "Color of button: ";
    cin >> buttonColor;

    ButtonFactory bf;
    Button *button = bf.getButton(buttonColor);
    button->createButton();
    button->press();
}