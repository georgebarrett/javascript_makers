const fizzBuzz = require('./fizzbuzz');

const fizzbuzzUntil = (n) => {
  for(let i = 1 ; i <= n ; i ++) {
    console.log(fizzBuzz(i));
  }
};

fizzbuzzUntil(10);