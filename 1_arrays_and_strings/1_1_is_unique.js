/**
 * 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use
 * additional data structures?
 *
 * Rationale: We can use a hash table to check the key value pairs as we iterate through the string. If the key-value
 * returns a letter, we can assume that the value already exists and return false. This solution takes O(n) time and O(1)
 * space.
 */
var testCases = ['abcd', 'aabb', 'abcdefgg', 'abcdefd'];

runTest(testCases);

function runTest(tCases) {
    for (var i = 0; i < testCases.length; i++) {
        console.log(isUnique(testCases[i]));
    }
}

function isUnique(s) {
    if (s > 128) return false; // larger than ascii max
    var table = {};
    for (var i = 0; i < s.length; i++) {
        if (table[s.charAt(i)] === s.charAt(i)) {
            return false;
        }
        table[s.charAt(i)] = s.charAt(i);
    }
    return true;
}