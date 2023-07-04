# Linked List

[Linked Lists for Technical Interviews - Full Course](https://www.youtube.com/watch?v=Hj_rA0dhr2I)

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