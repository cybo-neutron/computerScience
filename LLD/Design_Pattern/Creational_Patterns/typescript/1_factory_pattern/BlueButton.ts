import { Button } from './Button.interface';

export class BlueButton implements Button {
    createButton = () => {
        console.log("Blue button created");
    };
    press() {
        console.log("Blue button pressed");
    }
}
