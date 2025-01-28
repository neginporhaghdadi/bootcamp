/**
 * Problem:
 * Write a function that finds the duplicate elements in an array.
 *
 * Your task:
 * Implement the function `findDuplicates` that returns an array of all duplicate elements in the input array.
 *
 * Example:
 * findDuplicates([1, 2, 2, 3, 4, 4]) should return [2, 4].
 * findDuplicates([1, 2, 3]) should return [].
 */

// Write your solution here
function findDuplicates(array){
    const box = [];
    const duplicate = [];

    for (let index = 0; index < array.length; index++) {
        if( box.includes(array[index]) && !duplicate.includes(array[index])) {
            duplicate.push(array[index]);
        } else {
            box.push(array[index]);
        }
    }

    return duplicate;
}
module.exports = findDuplicates;
