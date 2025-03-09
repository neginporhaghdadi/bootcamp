/**
 * Problem:
 * Write a function that checks whether a given number is a palindrome. A palindrome number is one that reads
 * the same backward as forward.
 *
 * Your task:
 * Implement the function `isPalindrome` that checks whether the number is a palindrome.
 *
 * Example:
 * isPalindrome(121) should return true.
 * isPalindrome(-121) should return false (negative numbers are not palindromes).
 * isPalindrome(10) should return false.
 */

// function isPalindrome(numberes){
//     if(numberes < 0){
//         return false;
//     }
//     const reverseString = numberes.toString().split('').reverse().join('');
//     const reversedNumber = Number(reverseString);
    
//     return number === reversedNumber;
// }


function isPalindrome(number) {
    if (number < 0) {
        return false;
    }

    let original = number;
    let reversed = 0;


    while (number > 0) {
        let digit = number % 10; 
        reversed = reversed * 10 + digit; 
        number = Math.floor(number / 10); 
    }

    return original === reversed;
}



module.exports = isPalindrome;
