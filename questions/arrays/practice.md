# Practise Questions

---

Find whether a number exists in the array

```js
const array = [10, 4, 25, 8, 19];
const number = 24;

function isNumberExists(array, number) { 
    for (let i = 0; i < array.length; i++) { 
        if (array[i] === number) { 
            return true;
        };
    };
    return false;
}

console.log(isNumberExists(array, number));
```

<br/>
<br/>

Find the index of given number.

```js
const array = [3, 7, 2, 9, 1];
const number = 7;

function indexOfANumber(array, number) { 
    for (let i = 0; i < array.length; i++) { 
        if (array[i] === number) { 
            return i;
        };
    };
    return -1;
}

console.log(indexOfANumber(array, number));
```

<br/>
<br/>

Count how many times a given number appears.

```js
const array = [5, 1, 5, 3, 5, 8, 5];
const number = 6;

function repititionCount(array, number) { 
    let count = 0;
    for (let i = 0; i < array.length; i++) { 
        if (array[i] === number) { 
            count++;
        }
    };
    return count;
}
console.log(repititionCount(array, number));
```

<br/>
<br/>

Find smalleset number in the given array.

```js
const array = [2, 1, 4, 3, 6, 8, 5];

function findSmallestNumber(array) { 
    let smallest = array[0];
    if (array.length === 0) return "Given array is empty";
    for (let i = 0; i < array.length; i++) { 
        if (array[i] < smallest) { 
            smallest = array[i];
        }
    };
    return smallest;
}

console.log(findSmallestNumber(array));
```

<br/>
<br/>

Find largest number in the given array.

```js
const array = [2, 1, 4, 3, 6, 8, 5];

function findLargestNumber(array) { 
    let largest = array[0];
    if (array.length === 0) return "Given array is empty";
    for (let i = 0; i < array.length; i++) { 
        if (array[i] > largest) { 
            largest = array[i];
        }
    };
    return largest;
}
console.log(findLargestNumber(array));
```

<br/>
<br/>

Find the first occurence of an given number.

```js
const array = [2, 0, 4, 9, 7];
const target = 9;

function findFirstOccurence(array, target) { 
    if (array.length === 0) return "Given array is empty";
    let firstOccurance = Infinity;
    for (let i = 0; i < array.length; i++) { 
        if (array[i] === target) { 
            if (i < firstOccurance) { 
                firstOccurance = i;
            }
        }
    };
    return firstOccurance;
}

console.log(findFirstOccurence(array, target));
```

<br/>
<br/>

Find the last occurrence of given number.

```js
const array = [2, 9, 4, 9, 7, 9];
const target = 9;

function findLastOccurence(array, target) { 
    if (array.length === 0) return "Given array is empty";
    let lastOccurance = 0;
    for (let i = 0; i < array.length; i++) { 
        if (array[i] === target) { 
            if (i > lastOccurance) { 
                lastOccurance = i;
            };
        };
    };
    return lastOccurance;
}

console.log(findLastOccurence(array, target));
```

<br/>
<br/>

Return all indexes of a given number.

```js
const array = [3, 1, 3, 5, 3, 8];
const target = 3;

function returnAllIndexes(array, target) { 
    if (array.length === 0) return "Given array is empty";

    let indexes = [];
    for (let x = 0; x < array.length; x++) { 
        if (array[x] === target) { 
            indexes.push(x);
        };
    };
    if (indexes.length === 0) { 
        return "Targets not found";
    }
    return indexes;
};

console.log(returnAllIndexes(array, target));
```

<br/>
<br/>

Search for a given string.

```js
const target = "mango";
const array = ["banana", "mango", "apple", "grape"];

function isStringExist(array, target) {
    if (array.length === 0) return "Given array is empty";
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    };
    return false;
}

console.log(isStringExist(array, target));
```

<br/>
<br/>

Find whether duplicate elements exist.

```js
const array = [1, 3, 6, 2, 4, 9];

function isDuplicatesFound(array) {
    if (array.length === 0) return "Given array is empty";

    for (let x = 0; x < array.length; x++) {
        let currentNumber = array[x];

        for (let y = x + 1; y < array.length; y++) {
            if (currentNumber === array[y]) { 
                return true;
            }
        };
    };
    return false;
}

console.log(isDuplicatesFound(array));
```
