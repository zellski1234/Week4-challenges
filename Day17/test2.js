// const drinksList = [["Dark Roast Coffee", 2.29], //multi array1 drinks and price
//                 ["Latte", 3.19],
//                 ["Hot Chocolate", 3.49],
//                 ["Tea", 2.29]]

// class customer {
//     constructor(name, money, order) {
//         this.name = name;
//         this.money = money;
//         this.order = order;
//     }
//     calculate (){
//         const drinktotal = this.order + this.order;
//         console.log(drinktotal);
//         return this;             
//     }
     
// }

// // gives Dave Asley Bob random amount of money
// const customer1 = new customer("Dave", Math.ceil(Math.random()*11), (drinksList[0], drinksList[1]));
// const customer2 = new customer("Ashley", Math.ceil(Math.random()*11), (drinksList[0], drinksList[1]));
// const customer3 = new customer("Bob", Math.ceil(Math.random()*11), (drinksList[0], drinksList[1]));


// customer1.calculate();


const drinksList = [
    ["Dark Roast Coffee", 2.29],
    ["Latte", 3.19],
    ["Hot Chocolate", 3.49],
    ["Tea", 2.29]
]

class Customer {
    constructor(name, money, order) {
        this.name = name;
        this.money = money;
        this.order = order;
        this.total = 0;
    }
    calculate (){
        for(let i = 0; i < this.order.length; i++){
            this.total = this.order[i][1] + this.total; 
        }
        return this.total;
                
    }
}

const customer1 = new Customer("Dave", Math.ceil(Math.random()*11), [drinksList[0], drinksList[1]]);
console.log(customer1.calculate())
// class Customer {
//     constructor(name, money, order) {
//         this.name = Dave;
//         this.money = Math.ceil(Math.random()*11);
//         this.order = [drinksList[0], drinksList[1]];
//         this.total = 0;
//     }
//     calculate (){
//         for(let i = 0; i < this.order.length; i++){
//             this.total = this.order[i][1] + this.total; 
//         }
//         return this.total;
                
//     }
// }



