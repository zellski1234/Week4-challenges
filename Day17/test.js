let drinks = {
    coffee: 2.10,
    tea: 1.60,
    juice: 1.85,
    pop: 1.20
};

class Till {

    order(name, drink1, drink2) {
        this.name = name;
        this.drink1 = drink1;
        this.drink2 = drink2;
    }

    total() {
        if(drinks.hasOwnProperty(this.drink1)&&drinks.hasOwnProperty(this.drink2)){
            console.log('yes');
                // console.log(`Hi ${this.name}, that'll be £${drinks[this.drink1]+drinks[this.drink2]} for your ${this.drink1} and ${this.drink2}.`);
        } else {console.log('nope')}
    }

};

const customer = new Till('maeve', 'tea', 'juice');

customer.total();