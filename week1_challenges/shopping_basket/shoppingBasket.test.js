const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
    it('has a total price of zero when intialized', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toBe(0);
    })

    it('has a new price when an item is added', () => {
        const basket = new ShoppingBasket();

        const mockCandy = {
            getName: () => 'Mars',
            getPrice: () => 4.99
        }

        basket.addItem(mockCandy);
        expect(basket.getTotalPrice()).toBe(4.99);
    })
});