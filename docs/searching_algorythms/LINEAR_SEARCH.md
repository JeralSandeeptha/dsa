# Linear Search

Search an target element one by one from the start. If found then return that target element.

## Implementation

- Can ues `Two pointers` approach
- First pointer for `iterate array`
- Second pointer for track `specific position / thing`
- If element found then return

```js
function linearSearch(arr, target) {
    // Loop through every element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target
        if (arr[i] === target) {
            return i; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the target is not in the array
}

// Example Usage
const numbers = [10, 50, 30, 70, 80, 20, 90, 40];
const targetValue = 30;
```

## Time Complexity

```bash
O(n2)
```
