class ShoppingBasket {

    constructor() {
        this.basket = [];
    }

    addItem(item) {
        this.basket.push(item);
    }

    getTotalPrice() {
        let result = 0
        this.basket.map((item) => {
            result += item.getPrice()    
        })
        return result
    }
}

module.exports = ShoppingBasket;