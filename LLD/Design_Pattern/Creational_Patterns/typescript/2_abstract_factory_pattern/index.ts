import { Button, MacButton, WinButton } from './Button';
import { MacTextBox, TextBox, WinTextBox } from './TextBox';

interface GUIFactory{
    getButton: () => Button;
    getTextBox: () => TextBox;
}

class WinFactory implements GUIFactory{
    getButton() {
        let button = new WinButton();
        return button;
    }

    getTextBox() {
        let textbox = new WinTextBox();
        return textbox;
    }
}

class MacFactory implements GUIFactory{
    getButton() {
        let button = new MacButton();
        return button;
    }

    getTextBox() {
        let textbox = new MacTextBox();
        return textbox;
    }
}

import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output });


rl.question("Choose os : ", (ops) => {
    let gui: GUIFactory | null;
    if (ops === "mac")
    {
        gui = new MacFactory();
    }
    else {
        gui = new WinFactory();
    }


    const button = gui.getButton();
    button.createButton();
    button.press();

    const textbox = gui.getTextBox();
    textbox.createTextBox();
    textbox.changeText();

    rl.close();
});




