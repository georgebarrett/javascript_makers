const fizzBuzz = (number) => {
    if (number % 5 === 0 && number % 3 === 0) {
        return "Fizzbuzz"
    } else if (number % 5 === 0) {
        return "Buzz"
    } else if (number % 3 === 0) {
        return "Fizz"
    } else {
        return number
    }
};

console.log(fizzBuzz(15))

module.exports = fizzBuzz