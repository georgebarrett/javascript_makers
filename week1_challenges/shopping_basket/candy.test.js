const Candy = require('./candy')

describe('Candy', () => {
    it('has a name', () => {
      const candy = new Candy('Mars', 4.99);
      expect(candy.getName()).toBe('Mars');
    });
});