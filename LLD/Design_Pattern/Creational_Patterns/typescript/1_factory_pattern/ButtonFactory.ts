import { BlueButton } from './BlueButton';
import { Button } from './Button.interface';
import { RedButton } from './RedButton';

export class ButtonFactory {
    getButton(color: string) {
        let button: Button | null = null;
        switch (color) {
            case "blue":
                button = new BlueButton();
                break;
            case "red":
                button = new RedButton();
                break;
            default:
                button = new RedButton();
                break;

        }

        return button;
    }
}
