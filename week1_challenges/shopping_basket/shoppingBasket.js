class ShoppingBasket {

    constructor() {
        this.basket = [];
        this.discount = 0;
    }    

    addItem(item) {
        this.basket.push(item);
    }

    getTotalPrice() {
        let result = 0
        this.basket.map((item) => {
            result += item.getPrice()    
        })
        return result - this.discount
    }

    applyDiscount(discount) {
        this.discount = discount;
    }
}

module.exports = ShoppingBasket;
