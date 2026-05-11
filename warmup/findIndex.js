// // Return the index of a given number of an array. If not present then return -1
// const array = [10, 20, 33, 40, 53];

function searchElement(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }
    };
    return -1;
};

console.log(searchElement(array, 45));