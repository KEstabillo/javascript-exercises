const reverseString = function(word) {
    var reversed = "";
    for(let i = word.length-1; i >= 0; i--){
        reversed = reversed.concat(word.charAt(i));
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
