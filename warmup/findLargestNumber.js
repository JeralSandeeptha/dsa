// // Write a function that returns largest number in the given array

const array = [-10, 20, 56, 100, -90, 98, 45, -32];

function findLargest(array) { 
    let largestNumber = -Infinity;
    for (let i = 0; i < array.length; i++) { 
        if (array[i] > largestNumber) { 
            largestNumber = array[i];
        }
    };
    return largestNumber;
};

console.log(findLargest(array));