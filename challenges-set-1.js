/*
    Challenge 1: Reverse a string
    Example output: reverse_string('hello') => 'olleh'
*/


// Solution 1
function reverse_string(str) {
    return str.split('').reverse().join('');
    //Cleaner way to chain methods
    return str
        .split('')
        .reverse()
        .join('');
};

// Solution 2
function reverse_string_2(str) {
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    };
    return revString;
};

// Solution 3
function reverse_string_3(str) {
    let revString = '';
    str.split('').forEach(function(char) {
        revString = char + revString;
    });

    return revString;
}


/*
    Challenge 2: Validate a palindrome
    Example output: isPalindrome('racecar') => false
*/

// Solution 1
function isPalindrome(str) {

}


reverse_string('hello')
reverse_string_2('Dit me may!')
reverse_string_3('Hay lam!')