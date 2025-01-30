/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here

// function numberToWords(num) {
//     if (num === 0) return "zero";

//     const belowTwenty = [
//         "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
//         "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
//     ];
//     const tens = [
//         "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
//     ];
//     const thousands = ["", "thousand", "million", "billion"];
//     function helper(n) {
//         if (n === 0) return "";
//         else if (n < 20) return belowTwenty[n] + " ";
//         else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
//         else return belowTwenty[Math.floor(n / 100)] + " hundred " + helper(n % 100);
//     }
//     let result = "";
//     let i = 0;
//     while (num > 0) {
//         if (num % 1000 !== 0) {
//             result = helper(num % 1000) + thousands[i] + " " + result;
//         }
//         num = Math.floor(num / 1000);
//         i++;
//     }

//     return result.trim();
// }

function numberToWords(num) {
    if (num === 0) return "zero";

    const belowTwenty = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    const tens = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];
    const thousands = ["", "thousand", "million", "billion"];

    function helper(n) {
        if (n === 0) return "";
        if (n < 20) return belowTwenty[n];
        if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + belowTwenty[n % 10] : "");
        return belowTwenty[Math.floor(n / 100)] + " hundred" + (n % 100 !== 0 ? " " + helper(n % 100) : "");
    }

    let result = "";
    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + (thousands[i] ? " " + thousands[i] : "") + " " + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
}



module.exports = numberToWords;
