# Index

-   [Data Structures](#data-structures)
    -   [Linked List](#linked-list)
    -   [Binary Trees](#binary-trees)
    -   [Tries](#tries)
    -   [Stacks](#stacks)
    -   [Queues](#queues)
    -   [HashMap](#hashmap)
    -   [Objects](#objects)
-   [Algorithms](#algorithms)
    -   [Breadth First Search](#breadth-first-search)
    -   [Depth First Search](#depth-first-search)
    -   [Binary Search](#binary-search)
    -   [Quick Sort](#quick-sort)
    -   [Merge Sort](#merge-sort)
    -   [Tree Traversal](#tree-traversal)
    -   [Dynamic Programming](#dynamic-programming)
-   [Coding Patterns](#coding-patterns)
    -   [Cyclic Sort](#cyclic-sort)
    -   [In-Place Reversal of a LinkedList](#in-place-reversal-of-a-linkedlist)
    -   [Two Heaps](#two-heaps)
    -   [Topological Sort](#topological-sort)

## Data Structures

### Linked List

```javascript
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
```

### Binary Trees

-   [Binary Tree Algorithms for Technical Interviews - Full Course
    ](https://www.youtube.com/watch?v=fAAZixBzIAI)

```javascript
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
```

### Tries

```javascript
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;

    for (let char of word) {
        if (!(char in node)) {
            node[char] = {};
        }
        node = node[char];
    }
    node.isEnd = true;
};

Trie.prototype.traverse = function (word) {
    let node = this.root;

    for (let char of word) {
        if (!(char in node)) {
            return null;
        }
        node = node[char];
    }
    return node;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.traverse(word);
    return node !== null ? node.isEnd === true : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.traverse(prefix);
    return node !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

### Stacks

```javascript
const stack = [];

// Insert element
stack.push("a");

// Remove element
stack.pop();

// Peek at next element
stack[stack.length - 1];
```

### Queues

```javascript
const queue = [];

// Insert element
stack.push("a");

// Remove element
stack.shift();

// Peek at next element
stack[0];
```

### HashMap

```javascript
const map = new Map();
```

### Objects

```javascript
const obj = new Obj;

// Check if key exists in Object
if ("key" in obj)

```

## Algorithms

### Breadth First Search

#### Binary Tree BFS

```javascript
const bfs = (root) => {
    if (!root) return [];

    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const current = queue.shift();

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return result;
};
```

#### Graph BFS

### Depth First Search

#### Binary Tree DFS

```javascript
// Iterative
const dfs = (root) => {
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current.val);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
};
```

```javascript
// Recursive
const dfs = (root) {
	if (!root) return;
	console.log(root.val);

	dfs(root.left);
	dfs(root.right);
}
```

#### Graph DFS

### Binary Search

```javascript
var binarySearch = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};
```

### Quick Sort

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    quicksort(nums, 0, nums.length - 1);
    return nums;
};

const quicksort = (nums, left, right) => {
    if (left >= right) return;

    const mid = Math.floor(left + (right - left) / 2);
    let pivot = nums[mid];
    const index = partition(nums, left, right, pivot);

    quicksort(nums, left, index - 1);
    quicksort(nums, index, right);
};

const partition = (nums, left, right, pivot) => {
    while (left <= right) {
        while (nums[left] < pivot) left++;
        while (nums[right] > pivot) right--;

        if (left <= right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    return left;
};
```

### Merge Sort

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return mergesort(nums);
};

var mergesort = function (nums) {
    if (nums.length < 2) {
        return nums;
    }

    let mid = Math.floor(nums.length / 2),
        left = nums.slice(0, mid),
        right = nums.slice(mid);

    return merge(mergesort(left), mergesort(right));
};

var merge = function (left, right) {
    let merged = [],
        l = 0,
        r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            merged.push(left[l]);
            l++;
        } else {
            merged.push(right[r]);
            r++;
        }
    }

    while (l < left.length) {
        merged.push(left[l]);
        l++;
    }

    while (r < right.length) {
        merged.push(right[r]);
        r++;
    }

    return merged;
};
```

### Tree Traversal

### Dynamic Programming

-   [Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges
    ](https://www.youtube.com/watch?v=oBt53YbR9Kk)

#### Top-Down (Memoization)
- Recipe
	1. Make it work
		- Visualize the problem as a tree
		- Implement tree using **recursion**
		- Test it
	2. Make it efficient
		- Add memo object
		- Add base case to return memo object
		- Store return values as memo object

#### Bottom-Up (Tabulation)
- Recipe
	1. Visualize the problem as a table
	2. Size the table based on the inputs
	3. Initialize the table with default values
	4. Seed the trivial answers into the table
	5. **Iterate** through the table

## Coding Patterns

### Cyclic Sort

```javascript
const n = nums.length;
let i = 0;

while (i < n) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
        i++;
    }
}
```

### In-Place Reversal of a LinkedList

```javascript
var reverseList = function (head) {
    let current = head;
    let previous = null;

    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};
```

### Two Heaps

-   [JS PriorityQueue Library](https://github.com/datastructures-js/priority-queue/tree/v4.1.1)
-   [LeetCode doc](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-)

```javascript
const minHeap = new MinPriorityQueue();
const maxHeap = new MaxPriorityQueue();
```

### Topological Sort

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const inDegrees = new Array(numCourses).fill(0);
    const graph = {};
    const queue = [];
    const sortedOrder = [];

    for (let [edge, vertex] of prerequisites) {
        if (!(vertex in graph)) graph[vertex] = [];
        graph[vertex].push(edge);
        inDegrees[edge]++;
    }

    for (let i = 0; i < numCourses; i++) {
        if (inDegrees[i] === 0) queue.push(i);
    }

    while (queue.length > 0) {
        const vertex = queue.shift();
        sortedOrder.push(vertex);

        if (vertex in graph) {
            for (let edge of graph[vertex]) {
                inDegrees[edge]--;
                if (inDegrees[edge] === 0) queue.push(edge);
            }
        }
    }
    return sortedOrder.length === numCourses;
};
```
