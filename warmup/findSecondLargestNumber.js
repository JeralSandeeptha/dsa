// Write a function that returns second largest number in the given array

const array = [600, 400, 10, 120, 20, 78, 56, 50, 600];

function findSecondLargest(array) { 
    let largestNumber = -Infinity;
    let secondLargest = -Infinity;

    // handle empty array case
    if(array.length === 0) {
        throw new Error("Array cannot be empty");
    }

    for (let i = 0; i < array.length; i++) { 
        if (array[i] > largestNumber) {
            secondLargest = largestNumber;
            largestNumber = array[i];
        } else if (array[i] > secondLargest && array[i] !== largestNumber) { 
            secondLargest = array[i];
        }
    };
    return secondLargest;
};

console.log(findSecondLargest(array));