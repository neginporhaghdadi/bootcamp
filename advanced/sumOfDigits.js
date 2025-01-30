/**
 * Problem:
 * Write a function that takes a positive integer as input and returns the sum of its digits.
 *
 * Your task:
 * Implement the function `sumOfDigits` that calculates the sum of digits in the given number.
 *
 * Example:
 * sumOfDigits(123) should return 6 (1 + 2 + 3).
 * sumOfDigits(987) should return 24 (9 + 8 + 7).
 */
// function sumOfDigits(numbers){
//     let array = numbers.toString().split('');
//     let sum = 0; 
//     for (const element of array) {
//         sum += parseInt(element);
//     }
//     return sum;

// }

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10; 
        number = Math.floor(number / 10);  
    }
    return sum;
}
module.exports = sumOfDigits;
