# Index

-   [Data Structures](#data-structures)
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
-   [Coding Patterns](#coding-patterns)
    -   [Cyclic Sort](#cyclic-sort)
    -   [Two Heaps](#two-heaps)
    -   [Topological Sort](#topological-sort)

## Data Structures



### Stacks


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

### Depth First Search


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



### Two Heaps

-   [JS PriorityQueue Library](https://github.com/datastructures-js/priority-queue/tree/v4.1.1)
-   [LeetCode doc](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-)

```javascript
const minHeap = new MinPriorityQueue();
const maxHeap = new MaxPriorityQueue();
```


