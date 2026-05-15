# Fibonarchy

Fibonarchy Number is a sum of it's previous two numbers

```bash
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
```

## Basic Implementation

```js
function fib(n) {
    // as a base case,
    // if n is 1 or below 1 (it means 0) then return n; which means 1 / 0
    if(n <= 1) return n;

    // other wise,
    // start recursion
    return fib(n-1) + fib(n-2);
}
```
