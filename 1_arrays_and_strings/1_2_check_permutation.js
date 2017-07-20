/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 *
 * Rationale: First, we know that if one string is not the length of a second string, we can safely say they are not
 * permutations of each other. Second, if we sort the two strings, we can iterate through and check to see if each char
 * matches.
 */

var test1 = ['abcdefg', 'gfedcba'];
var test2 = ['abcdefg', 'gfedhba'];

console.log('test1: ' + isPermutation(test1[0], test1[1]));
console.log('test2: ' + isPermutation(test2[0], test2[1]));

function isPermutation(s1, s2) {
    var table = {};
    // we know that if one string does not equal the length of the other, we can return false
    if (s1.length !== s2.length) return false;
    // sort strings
    s1 = sort(s1);
    s2 = sort(s2);

    // iterate through
    for (var i = 0; i < s1.length; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) return false;
    }
    return true;
}

// sort helper function
function sort(s) {
    var arr = s.split('');
    arr = arr.sort();
    return arr.toString();
}