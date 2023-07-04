# Linked List

[Linked Lists for Technical Interviews - Full Course](https://www.youtube.com/watch?v=Hj_rA0dhr2I)

- Do not prematurely check next. Stay present
	- while (current !== null) vs while (current.next !== null)
- Use [sentinel node](https://en.wikipedia.org/wiki/Sentinel_node)

## ListNode Implementation

```javascript
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
```

## In-Place Reversal of a LinkedList

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