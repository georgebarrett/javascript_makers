const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
    it('has a total price of zero when intialized', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toBe(0);
    })
});