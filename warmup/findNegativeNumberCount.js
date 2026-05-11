// // write a function for return the number of negative numbers in an array

const numbersArray = [10, -20, 30, -40, 50, -80];

function findNegativeNumbersCount(numbersArray) {
    let count = 0;
    for (let i = 0; i < numbersArray.length; i++) { 
        if (numbersArray[i] < 0) { 
            count++;
        }
    }
    return count;
};

console.log(findNegativeNumbersCount(numbersArray));