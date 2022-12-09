#pragma once
#include "Button.hpp"
#include <iostream>

class BlueButton : public Button
{
public:
    void createButton()
    {
        std::cout << "Creating blue button\n";
    }

    void press()
    {
        std::cout << "Blue button pressed\n";
    }
};
