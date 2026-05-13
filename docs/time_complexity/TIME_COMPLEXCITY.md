# Time Complexity

Measure efficiency of an algorythm speed when the input size grows

```bash
Low complexity --> Good better solution
```

```bash
Time Complexity !== Time taken by algo
```

For represent Time Complexity we are using `Big O Notation`

<br />

## Time Complexities

| Complexity     | Name         | Example                        | Growth Speed      | Easy Meaning                 |
| -------------- | ------------ | ------------------------------ | ----------------- | ---------------------------- |
| **O(1)**       | Constant     | Access array element           | 🚀 Fastest        | Time never changes           |
| **O(log n)**   | Logarithmic  | Binary Search                  | ⚡ Very Fast       | Problem halves each step     |
| **O(n)**       | Linear       | Simple loop                    | 🙂 Moderate       | Grows with input             |
| **O(n log n)** | Linearithmic | Merge Sort                     | 👍 Efficient      | Slightly more than linear    |
| **O(n²)**      | Quadratic    | Nested loops                   | 🐢 Slow           | Every item checks every item |
| **O(n³)**      | Cubic        | 3 nested loops                 | 🐌 Very Slow      | Huge growth                  |
| **O(2ⁿ)**      | Exponential  | Recursive Fibonacci            | 💀 Extremely Slow | Doubles every step           |
| **O(n!)**      | Factorial    | Traveling Salesman brute force | ☠️ Worst          | Tries every possibility      |

<br />

## Time Complexities (Worst → Best)

| Rank | Complexity     | Name         | Performance    |
| ---- | -------------- | ------------ | -------------- |
| 1 ❌  | **O(n!)**      | Factorial    | Worst          |
| 2    | **O(2ⁿ)**      | Exponential  | Extremely Slow |
| 3    | **O(n³)**      | Cubic        | Very Slow      |
| 4    | **O(n²)**      | Quadratic    | Slow           |
| 5    | **O(n log n)** | Linearithmic | Efficient      |
| 6    | **O(n)**       | Linear       | Good           |
| 7    | **O(log n)**   | Logarithmic  | Very Fast      |
| 8 ✅  | **O(1)**       | Constant     | Best           |

<br />

## Easy Memory Order

```bash
O(n!)> O(2n)
```

<br />

## Simple Meaning

O(n!) → tries every possible way


O(2ⁿ) → doubles work every step


O(n³) → 3 nested loops


O(n²) → 2 nested loops


O(n log n) → smart sorting


O(n) → one loop


O(log n) → halves problem each step


O(1) → instant answer

<br />

## Graph
