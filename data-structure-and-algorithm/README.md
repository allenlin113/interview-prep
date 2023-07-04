# Data Struture and Algorithm

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

## Coding

-   Recursion
    -   Always use base case instead of guarding if case
    -   Return the same object type
-   LinkedList
    -   Do not prematurely check next. Stay present
        -   while (current !== null) vs while (current.next !== null)
    -   Use [sentinel node](https://en.wikipedia.org/wiki/Sentinel_node)
-   Arrays
    -   map, reduce, filter
    -   array.join() to compare Strings
-   Objects
    -   nullish coalescing operator (??) to assign
    -   array.join("&") to convert array to string as key
-   Big O Notation
    -   Analyzing Functions with Multiple Arguments
        -   O(max(m, n))
        -   O(n) where n is the length of the longer string
    -   Space complexity in recursion is stack height

## Big O Notation
1. [The Complete Guide to Big O Notation & Complexity Analysis for Algorithms: Part 1 of 2
](https://www.youtube.com/watch?v=HfIH3czXc-8)
2. [The Complete Guide to Big O Notation & Complexity Analysis for Algorithms: Part 2 of 2
](https://www.youtube.com/watch?v=zo7YFqw5hNw)

