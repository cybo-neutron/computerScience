#pragma once
#include <iostream>
#include "Button.hpp"
#include "RedButton.hpp"
#include "BlueButton.hpp"

class ButtonFactory
{

public:
    Button *getButton(std::string color)
    {
        Button *button;
        if (color == "blue")
        {
            button = new BlueButton();
        }
        else if (color == "red")
        {
            button = new RedButton();
        }
        else
        {
            button = new RedButton();
        }

        return button;
    }
};