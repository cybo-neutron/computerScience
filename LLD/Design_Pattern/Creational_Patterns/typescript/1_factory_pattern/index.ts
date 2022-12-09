import * as readline from 'readline';
import { ButtonFactory } from './ButtonFactory';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let bFactory: ButtonFactory = new ButtonFactory();

rl.question("Color of the button: ", (answer: string) => {
    
    
    rl.close();
    let button = bFactory.getButton(answer);
    button.createButton();
    button.press();
}
)