const priceFilter = require("./searchCandies");

// describe("searchCandies", () => {
// //   it("returns an empty array when nothing matches", () => {
// //     expect(searchCandies("Ma", 10)).toBe(["Mars", "Malteasers"]);
// //   });
// });

describe('priceFilter', () => {
    it('returns candies bellow or equal to price', () => {
        expect(priceFilter(1.49)).toEqual(['Mars', 'Skittles'])
    })
})