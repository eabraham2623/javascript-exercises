const removeFromArray = function(arr, ...args) {
    // store result with initial value of the array
    let result = arr;

    // for each arguement, filter the element from the array 
    // result array is replaced each iteration
    for (let i = 0; i < args.length; i++)
    {
        result = result.filter(
            // filter function check if element is strictly equal to the argument value
            function(element) 
            {
                return element !== args[i];
            }
        );
    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;

