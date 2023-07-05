# Binary Trees

[Binary Tree Algorithms for Technical Interviews - Full Course](https://www.youtube.com/watch?v=fAAZixBzIAI)

## TreeNode Implementation

```javascript
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
```

## Breadth-first Search

```javascript
const bfs = (root) => {
    if (!root) return [];

    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    return result;
};
```

## Depth-first Search

### Iterative

```javascript
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

### Recursive

```javascript
const dfs = (root) {
	if (!root) return;
	console.log(root.val);

	dfs(root.left);
	dfs(root.right);
}
```
