# Binary Search

- Binary search is an optimized version of search an element on arrays by dividing array into two parts
- But only constraint is we can only apply if arrays are `Sorted Arrays`

## Implementation Steps

- Can ues `Two pointers` approach
- First pointer for track `left`
- Second pointer for track `right`
- Create a variable for track `middle` index
- If target is present at mid then return mid
- If target is greater, then move left to right side by +1
- If target is lower, then move right to left side by -1
- If right becomes lower than left, then stop the loop (because we can't find the element) 

```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    // Run while loop uncless right becomes equals or greater than left
    while (left <= right) {
        // Calculate the middle index (prevents potential overflow)
        let middle = Math.floor((right - left) / 2);

        // Check if target is present at mid
        if (arr[middle] === target) {
            return middle; 
        }

        // If target is greater, ignore the left half
        if (arr[middle] < target) {
            left = middle + 1;
        } 

        // If target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }

    // Target was not present in the array
    return -1;
}

// Example Usage (Array MUST be sorted)
const sortedNumbers = [10, 20, 30, 40, 50];
const targetValue = 40;
```

## Time Complexity

Every iteration will divide by 2 from the previous one.

```bash
O(log n)
```

## Space Complexity

Most of the time 3 variables for `LEFT`, `RIGHT` and `MIDDLE`
It means everytime is a constant

```bash
O(1)
```
