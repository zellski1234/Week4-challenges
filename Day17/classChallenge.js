// - CLASS CHALLENGE
// - Build a class for a coffee shop till. 
// - Have a method that takes names of drinks and totals the price. 

// STRETCH - Have a separate class for a customer and total cash and compare total price of drink against total cash to see if the order can be afforded. 

// class coffeeTill {
//     constructor(drinks, price) {
//         this.drinks = drinks;
//         this.price = price;
//     }
//     item() {
//         console.log(`The ${this.drinks} costs £${this.price}` );
//         return this;
//     }
//     order() {
//         console.log(`I would like to buy ${this.drinks}`);
//         return this;
//     }
// }

// const order1 = new coffeeTill (`Tea`, `2.49`);

// order1.item().order();


class coffeeList {
    constructor(drinks, price) {
        this.drinks = drinks;
        this.price = price;
    }

}

const drinksList = [["Dark Roast Coffee", 2.29], //multi array1 drinks and price
                ["Latte", 3.19],
                ["Hot Chocolate", 3.49],
                ["Tea", 2.29]]

// rounds to two decimal place
function round(num) {
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

class customer {
    constructor(name, money, order) {
        this.name = name;
        this.money = money;
        this.order = order;
        this.total = 0;
        this.list = [];
    }
    totalCalc (){
        // cycles through order
        for(let i = 0; i < this.order.length; i++){
            this.total = this.order[i][1] + this.total; 
        }
        return round(this.total);
    }
    completeOrder(){
        for(let i = 0; i < this.order.length; i++){
            this.list.push(this.order[i][0]); 
        }
        return this.list.join(", ");
    }
     
}
// function buying
function buy (person, bal, orderTotal, orderItems){
    console.log(person + " has Ordered: " +orderItems);
    console.log("Order is " + orderItems);
    console.log("Total Order Cost: £" + orderTotal);
    console.log(`${person} initial balance: £${bal}.00`);
    // if customer does not have enough money
    if(orderTotal > bal){
        console.log(`The order ${orderItems} cannot be afforded by ${person} as they only have £${bal} and order costs £${orderTotal}`);      
    }
    // if customer does have enough money
    else if(orderTotal < bal){
        let customerRemaining = round(bal - orderTotal);
        console.log(`The order ${orderItems} costs £${orderTotal}, ${person} pays £${bal} there remaining balance is £${customerRemaining}`);
        person = bal - orderTotal;
    }
    
};

// gives Dave Asley Bob random amount of money
// name, money, order
const customer1 = new customer("Dave", Math.ceil(Math.random()*11), [drinksList[0], drinksList[1]]);
const customer2 = new customer("Ashley", Math.ceil(Math.random()*11), [drinksList[1], drinksList[1]]);
const customer3 = new customer("Bob", Math.ceil(Math.random()*11), [drinksList[0], drinksList[1] , drinksList[2], drinksList[3]]);

// person, bal, orderTotal, orderItems
console.log("")
buy(customer1.name, customer1.money, customer1.totalCalc(), customer1.completeOrder());
console.log("")
buy(customer2.name, customer2.money, customer2.totalCalc(), customer2.completeOrder());
console.log("")
buy(customer3.name, customer3.money, customer3.totalCalc(), customer3.completeOrder());










