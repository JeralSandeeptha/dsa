// // // Write a function that returns smallest number in the given array

const array = [-10, 20, 56, 100, -90, 98, 45, -32];

function findSmallest(array) { 
    let smallestNumber = Infinity;
    for (let i = 0; i < array.length; i++) { 
        if (array[i] < smallestNumber) { 
            smallestNumber = array[i];
        }
    };
    return smallestNumber;
};

console.log(findSmallest(array));