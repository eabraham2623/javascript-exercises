function isDivisibleByFour(year)
{
    return ((year % 4) == 0);
    
}

function isDivisibleByOneHundred(year)
{
    return ((year % 100) == 0);
}

function isDivisibleByFourHundred(year)
{
    return ((year % 400) == 0);
}

function isSpecialCaseLeapYear(year)
{
    return !(isDivisibleByOneHundred(year)) || isDivisibleByFourHundred(year);
}
function isLeapYear(year)
{
    return (isDivisibleByFour(year) && isSpecialCaseLeapYear(year));
}

const leapYears = function(year) 
{
    return isLeapYear(year);
};

// Do not edit below this line
module.exports = leapYears;
