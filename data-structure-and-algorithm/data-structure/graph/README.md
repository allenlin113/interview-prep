# Graph

## Graph Algorithms for Technical Interviews - Full Course

[![Graph Algorithms for Technical Interviews - Full Course](https://img.youtube.com/vi/tWVWeAqZ0WU/0.jpg)](https://www.youtube.com/watch?v=tWVWeAqZ0WU)

## Topological Sort

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

## LeetCode Questions

-   [269. Alien Dictionary](https://leetcode.com/problems/alien-dictionary)
