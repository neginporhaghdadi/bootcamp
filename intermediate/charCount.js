/**
 * Problem:
 * Write a function that counts the occurrences of a specific character in a given string.
 *
 * Your task:
 * Implement the function `charCount` that returns the number of times a given character appears in the string.
 *
 * Example:
 * charCount("hello", "l") should return 2.
 * charCount("world", "o") should return 1.
 */

// Write your solution here
function charCount(string , itemcount){
   let newarray = string.split("");
   if (newarray.includes(itemcount) ){
    for (let index = 0; index < itemcount.length; index++) {
         index += 1   
    }
   }
   console.log('this charactor is not exist');
}

function charCount(string, itemcount) {

    let newarray = string.split("");

    let count = 0;


    if (newarray.includes(itemcount)) {
        for (let index = 0; index < newarray.length; index++) {
            if (newarray[index] === itemcount) {
                count++;
            }
        }
        return count; 
    } else {
        console.log('This character does not exist');
        return 0; 
    }
}

module.exports = charCount;
