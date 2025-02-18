/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */

generateCombinations = (array) =>array.length === 1 ? [array] : sum(array) 
    function sum (array){

        if(array.length === 0 ){
            return []
        }

    const result = []; 

    for(item of array){
        result.push([item])
    }

    for(let i = 0 ; i <= array.length -2 ; i++){
        for (let j = i + 1; j < array.length; j++) {
            result.push([array[i], array[j]]);
        }
    }

    result.push(array);

    return result;
}


module.exports = generateCombinations;
