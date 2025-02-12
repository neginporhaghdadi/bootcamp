/**
 * Problem:
 * Write a program that checks whether a given number is even or odd.
 *
 * Your task:
 * Implement the function `isEvenOrOdd` that takes a number and returns either "Even" or "Odd".
 *
 * Example:
 * isEvenOrOdd(4) should return "Even".
 * isEvenOrOdd(3) should return "Odd".
 */

// Write your solution here
function isEvenOrOdd(number){
   return number % 2 === 0 ? "Even" : "Odd"
}
console.log(isEvenOrOdd(55));
console.log(isEvenOrOdd(56))

module.exports = isEvenOrOdd;
