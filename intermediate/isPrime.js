/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here

function isPrime(num) {  
    if (num <= 1) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false; 

    for (let i = 5; i * i <= num; i += 6) { 
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}  


module.exports = isPrime;
