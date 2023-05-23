const Candy = require('./candy');

class ShoppingBasket {

    constructor() {
        this.items = [];
        this.totalPrice = 0;
    };

    addItem(candy) {
        this.items.concat(candy);
        this.totalPrice += candy.getPrice();
    };
    
    getTotalPrice() {
        return this.totalPrice;
    };
};

const candy = new Candy('Mars', 4.99);

console.log(candy.getName());

console.log(candy.getPrice());


const basket = new ShoppingBasket();
basket.getTotalPrice();


basket.addItem(candy);

console.log(basket.getTotalPrice());


basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice());

module.exports = ShoppingBasket;