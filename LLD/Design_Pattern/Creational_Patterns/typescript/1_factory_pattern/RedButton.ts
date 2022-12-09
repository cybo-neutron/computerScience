import { Button } from './Button.interface';

export class RedButton implements Button {
    createButton = () => {
        console.log("Red button created");
    };
    press() {
        console.log("Red button pressed");
    }
}
