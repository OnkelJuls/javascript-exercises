const reverseString = function(string) {
    let reverse = []
    reverse = string.split('');
    reversed = reverse.reverse();
    reversed = reverse.join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
