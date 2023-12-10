// A program that checks if a number is prime

function primeNumberChecker(number) {
    if (number % 1 !== 0 && number % number !== 0) {
      return "It is a prime number";
    } else {
      return "It is not a Prime number";
    }
  
    //  Now let us check if it works- yayy..it works
  }
  console.log(primeNumberChecker(25));