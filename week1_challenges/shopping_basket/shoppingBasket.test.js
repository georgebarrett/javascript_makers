const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
    it('has a total price of zero when intialized', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toBe(0);
    });

    it('has a new price when an item is added', () => {
        const basket = new ShoppingBasket();

        const mockCandy = {
            getName: () => 'Mars',
            getPrice: () => 4.99
        }

        basket.addItem(mockCandy);
        expect(basket.getTotalPrice()).toBe(4.99);
    });

    it('has a new price when three items are added', () => {
        const basket = new ShoppingBasket();

        const mockMars = {
            getName: () => 'Mars',
            getPrice: () => 4.99
        };

        const mockSkittle = {
            getName: () => 'Skittles',
            getPrice: () => 3.99
        };

        basket.addItem(mockMars);
        basket.addItem(mockSkittle);
        basket.addItem(mockSkittle);
        expect(basket.getTotalPrice()).toBe(12.97);
    });

    it('applies a discount to the total price', () => {
        const basket = new ShoppingBasket();

        const mockMars = {
            getName: () => 'Mars',
            getPrice: () => 4.99
        };

        basket.addItem(mockMars);
        expect(basket.getTotalPrice()).toBe(4.99)
        basket.applyDiscount(1)
        expect(basket.getTotalPrice()).toBe(3.99)
    })
});