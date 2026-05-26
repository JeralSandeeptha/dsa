# Sets

- A Set in JavaScript is a built-in object that stores unique values
- It means duplicate values are automatically removed

<br/>

### Important Features of Sets

- Stores unique values only
- Maintains insertion order
- Can store any data type
- Faster lookup compared to arrays in some cases

<br/>

### Create Sets

```js
const numbers = new Set();

// ------

const fruits = new Set(["apple", "banana", "apple"]);
console.log(fruits);
Set(2) { 'apple', 'banana' }
```

<br/>

### Common Methods

```js
const colors = new Set();

// add
colors.add("red");

// delete
colors.delete("blue");

// check exists
console.log(colors.has("red"));

// clear
colors.clear();

// size
console.log(colors.size);
```

<br/>

### Converting Array to Set

```js
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr);
```
