const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

const discounts = (names, discount) => {
    return `Hi ${names}! ${discount}% off all records today!`
};

const generateDiscountMessages = namesAndDiscounts.map((object) => {
    return discounts(object.name, object.discount)
});

console.log(generateDiscountMessages)

