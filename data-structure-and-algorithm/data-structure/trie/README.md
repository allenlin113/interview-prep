# Trie

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
