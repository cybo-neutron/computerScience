/*
Problem Statement : 


*/

abstract class BasePizza{
    public abstract cost(): number;
}

class FarmHouse extends BasePizza{
    public cost(): number {
        return 200;
    }
}

class VegDelight extends BasePizza{
    
    public cost(): number {
        return 300;
    }
}

class Margherita extends BasePizza{
    public cost(): number {
        return 350;
    }
}


//Decorators
abstract class ToppingDecorator extends BasePizza{
    
}

class ExtraCheese extends ToppingDecorator{
    pizza: BasePizza;
    constructor(pizza: BasePizza) {
        super();
        this.pizza = pizza;
    }

    public cost(): number {
        return this.pizza.cost() +30;
    }
}

class Mushroom extends ToppingDecorator{
    pizza: BasePizza;
    constructor(pizza: BasePizza) {
        super()
        this.pizza = pizza;
    }
    public cost(): number {
        return this.pizza.cost() + 50;
    }
}


const p1 = new FarmHouse();
console.log("Price of FarmHouse : ",p1.cost());


const p2 = new ExtraCheese(new FarmHouse());
console.log("Price of FarmHouse pizza with extracheese :", p2.cost());

const p3 = new Mushroom(new ExtraCheese(new FarmHouse()));
console.log("Price of Farmhouse pizza with extracheese and mushroom topping : ", p3.cost());


// take user input

// import * as readline from 'readline';
// import { stdin as input, stdout as output } from 'process'
// const rl = readline.createInterface({ input, output })

// console.log("Base pizza \n1.FarmHouse\n2.VegDelight\n3.Margherita");


// function showToppingsMenu(){
//     return ("Toppings: \n1.Extracheese \n2.Mushroom\nPress any other key to exit");
// }

// let myPizza: BasePizza;
// rl.question("Base pizza", (bp) => {
//     switch (bp) {
//         case "1":
//             myPizza = new FarmHouse();
//             break;
//         case "2":
//             myPizza = new VegDelight();
//             break;
//         case "3":
//             myPizza = new Margherita();
//             break;
//         default:
//             myPizza = new FarmHouse();
//             break;
//     }

//     while (true) {
//         let myOption: string = "";
//         rl.question(showToppingsMenu(), (option) => {
//             myOption = option;
//             switch (option) {
//                 case "1":
//                     myPizza = new ExtraCheese(myPizza);
//                     break;
//                 case "2":
//                     myPizza = new Mushroom(myPizza);
//                     break;
//                 default:
//                     break;
//             }

            
//         })
//         if (!["1", "2"].includes(myOption)) {
//             console.log('exiting');
//             break;
//         }
        
//     }

//     rl.close();
// })