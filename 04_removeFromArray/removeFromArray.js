

const removeFromArray = function(arr, ...args) {
    let result = arr.filter (
        function(el) {
            return el != args;
        }
    );
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;


/*

[1, 2, 3],  3

function takes ...arg as input

filter if element is equal to 3
function(el)
{
    return 3 == el;
}
*/