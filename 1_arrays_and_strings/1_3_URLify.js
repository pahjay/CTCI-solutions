/**
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at
 * the end to hold the additional characters, and that you are given the "true" length of the string.
 *
 * Rationale: First we check for leading whitespaces, and then we create a substring to remove the trailing whitespaces.
 * Finally, we iterate through and replace any white space with '%20' and return the new string.
 */

var test = ['Mr John Smith     ', 13];
var test1 = ['        My name is Ryan        ', 15];

console.log(urlify(test[0], test[1]));
console.log(urlify(test1[0], test1[1]));

function urlify(str, len) {
    // optional, not necessarily in problem specs
    // check for leading whitespaces
    var x = 0;
    while(str.charAt(x) === ' ') {
        x++;
    }

    // convert to array
    var strArr = str.substr(x, len).split('');
    for (var i = 0; i < len; i++) {
        // replace if whitespace
        if (strArr[i] === ' '){
            strArr[i] = '%20';
        }
    }
    // convert to string
    return strArr.join('');
}