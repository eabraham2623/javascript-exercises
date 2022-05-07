const sumAll = function(first, last) {
    // check to see if first or last numbers are negative or not numbers
    if (first < 0 || typeof first !== 'number' || last < 0 || typeof last !== 'number')
    {
        return "ERROR";
    }
    let numOfIntegers = Math.abs(first - last) + 1;

    // summation formula used
    return (numOfIntegers * (first + last))/2;  
};

// Do not edit below this line
module.exports = sumAll;
