const repeatString = function(str, num) {
    if( num < 0){
        return "ERROR";
    }
    var repeatedString = "";
    for(let i = 0; i < num; i++){
        repeatedString = repeatedString.concat(str);
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
