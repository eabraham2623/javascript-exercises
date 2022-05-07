const reverseString = function(str) {
    let strLength = str.length;
    let result = "";
    // start iteration from end of string 
    // and keep going until 0th index of string
    for (i = strLength - 1; i != -1 ; i--)
    {
        result+=str[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
