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

function generateCombinations(array){
    const result = []; 

    const totalCombinations = Math.pow(2, array.length); 

    for (let i = 1; i < totalCombinations; i++) { 
        const combination = []; 

        for (let j = 0; j < array.length; j++) { 
            if (i & (1 << j)) { 
                combination.push(array[j]);
            }
        }

        result.push(combination);
    }

    return result;
}


module.exports = generateCombinations;
