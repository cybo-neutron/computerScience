#pragma once
#include "Button.hpp"
#include <iostream>

class RedButton : public Button
{
public:
    void createButton()
    {
        std::cout << "Creating red button\n";
    }

    void press()
    {
        std::cout << "Red button pressed\n";
    }
};