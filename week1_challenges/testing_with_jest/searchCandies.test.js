const { priceFilter, nameFilter, searchCandies } = require("./searchCandies.js")

describe("priceFilter", () => {
  it("returns candies bellow or equal to price", () => {
    expect(priceFilter(1.49)).toEqual(["Mars", "Skittles"]);
  });
});

describe("nameFilter", () => {
  it("returns candies that start with the same letters", () => {
    expect(nameFilter("Ma")).toEqual(["Mars", "Maltesers"]);
  });
});

describe("searchCandies", () => {
  it("Ma, 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});