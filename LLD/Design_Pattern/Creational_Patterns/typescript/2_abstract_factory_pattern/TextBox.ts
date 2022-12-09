interface TextBox {
    createTextBox: () => void;
    changeText: () => void;
}
class WinTextBox implements TextBox {
    createTextBox() {
        console.log("Win text box created");

    }

    changeText() {
        console.log("Win text changed");
    }
}
class MacTextBox implements TextBox {
    createTextBox() {
        console.log("Mac text box created");

    }

    changeText() {
        console.log("Mac text changed");
    }
}

export { TextBox, WinTextBox, MacTextBox };
