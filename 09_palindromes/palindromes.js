function reverseString(str)
{
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    let lowerCasedReversed = reversed.toLowerCase();
    let lowerCasedNoSpaceReversed = lowerCasedReversed.replace(/\s+/g, '');
    let lowerCasedNoSpaceNoSpecialCharReversed = lowerCasedNoSpaceReversed.replace(/[^\w\s]/gi, '');
    return lowerCasedNoSpaceNoSpecialCharReversed;
}

const palindromes = function (str) {
    reversedString = reverseString(str);

    let strLower = str.toLowerCase();
    let strNoSpaceLower = strLower.replace(/\s+/g, '');
    let strNoSpaceNoSpecialCharLower = strNoSpaceLower.replace(/[^\w\s]/gi, '');
    if (strNoSpaceNoSpecialCharLower === reversedString)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
