# Data Struture and Algorithm

## Roadmap

[NeetCode Roadmap](https://neetcode.io/roadmap)

-   **Data Structures**: Linked Lists, Binary Trees, Tries, Stacks, Vectors / ArrayLists, Queues, Hash Tables
-   **Algorithms**: Breadth First Search, Depth First Search, Binary Search, Merge Sort, Tree Insert / Find, Quick Sort
-   **Concepts**: Bit Manipulation, Singleton Design Pattern, Factory Design Pattern, Memory (Stack vs. Heap), Recursion, Big-O Time

## Approach

1. Clarify the question
    - Ambiguous requirements
    - Edge cases
2. Establish test cases
3. Explain solution
4. State Time and Space Complexity
    - Sum Rule
    - Product Rule
5. Code
6. Dry run

## Big O Notation

The Complete Guide to Big O Notation & Complexity Analysis for Algorithms

-   [Part 1 of 2](https://www.youtube.com/watch?v=HfIH3czXc-8)
-   [Part 2 of 2](https://www.youtube.com/watch?v=zo7YFqw5hNw)

## Recursion

[Intro to Recursion: Anatomy of a Recursive Solution](https://www.youtube.com/watch?v=yBWlPte6FhA)
[Complex Recursion Explained Simply](https://www.youtube.com/watch?v=wRH2I6IN4BE)

-   Always use base case instead of guarding if case
-   Return the same object type

## Map

[MDN Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

```javascript
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2
```

## Set

[MDN Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```javascript
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true

mySet1.size; // 4

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 3, since we just removed one value
```

## Objects

-   Object key data types can be Strings or Symbols
-   Use nullish coalescing operator (??) to assign value to key
-   To use an array as a key, use **Array.join("&")** to convert array to string

```javascript
const obj = {};

// Check if key exists in Object
if ("key" in obj)

// Get list of all keys
const keys = Object.keys(obj);

// Get number of keys
const numKeys = Object.keys(obj).length;
```
