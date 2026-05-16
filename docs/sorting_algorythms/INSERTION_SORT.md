# Insertion Sort

```js
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prev = i - 1;

        // Shift elements greater than key to the right
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        // Insert the key into its correct position
        arr[prev + 1] = curr;
    }
    return arr;
}

// Example usage:
const unsortedArray = [12, 7, 9, 11, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [3, 7, 9, 11, 12]
```

## Time Complexity

```bash
O(n2)
```

## Space Complexity

```bash
O(1)
```