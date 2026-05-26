# Maps

- A Map in JavaScript is a built-in object that stores key-value pairs
- Keys can be of any data type
- It remembers the insertion order

### Important Features of Maps

- Stores data in key-value pairs
- Keys can be any type (objects, functions, primitives)
- Maintains insertion order
- Easy to iterate
- Efficient for frequent updates and lookups

### Create Maps

```js
const map = new Map();

// ------

const userRoles = new Map([
  ["Alice", "Admin"],
  ["Bob", "User"],
  ["Charlie", "Guest"]
]);

console.log(userRoles);
```

### Common Methods

```js
const map = new Map();

// set (add / update)
map.set("name", "John");
map.set("age", 20);

// get value
console.log(map.get("name"));

// check key exists
console.log(map.has("age"));

// delete key
map.delete("age");

// size
console.log(map.size);

// clear all
map.clear();
```

### Looping Through a Map

```js
const userRoles = new Map([
  ["Alice", "Admin"],
  ["Bob", "User"]
]);

for (const [key, value] of userRoles) {
  console.log(key, value);
}
```

### Using Different Data Types as Keys

```js
const map = new Map();

const objKey = { id: 1 };
const funcKey = function () {};

map.set(objKey, "Object Value");
map.set(funcKey, "Function Value");

console.log(map.get(objKey));
console.log(map.get(funcKey));
```

### Convert Array to Map

```js
const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3]
];

const map = new Map(arr);

console.log(map);
```

### Convert Map to Array

```js
const map = new Map([
  ["x", 10],
  ["y", 20]
]);

const arr = [...map];

console.log(arr);
```

### Map vs Object

| Feature | Map | Object |
|---|---|---|
| Key types | Any type | String / Symbol |
| Order | Guaranteed | Mostly ordered |
| Size | .size | Manual (Object.keys()) |
| Iteration | Easy | Slightly harder |

### Summary

Maps are useful when you need:
- Flexible key types
- Fast key-value operations
- Ordered storage
- Easy iteration
