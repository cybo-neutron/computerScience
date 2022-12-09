interface Button {
    createButton: () => void;
    press: () => void;
}
class WinButton implements Button {
    createButton() {
        console.log("Win Button  ");
    }

    press() {
        console.log("win button pressed");
    }
}
class MacButton implements Button {
    createButton() {
        console.log("Mac Button  ");
    }

    press() {
        console.log("Mac button pressed");
    }
}


export { Button, WinButton, MacButton };