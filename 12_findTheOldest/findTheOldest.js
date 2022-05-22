// oldest = initial oldest person/previous oldest person
// person = current person to be evaluated as oldest person
function getOldestAge(oldest, person)
{
    if (typeof person.yearOfDeath === "undefined")
    {
        age = 2022 - person.yearOfBirth;
    }
    else 
    {
        age = person.yearOfDeath - person.yearOfBirth;
    }

    if (age > oldest.age)
    {
        return {age: age, name: person.name};
    }
    else
    {
        return oldest;
    }
}
const findTheOldest = function(arr) {
    let oldestAge = 0;
    // reduce(function, initialValue)
    let newArr = arr.reduce(getOldestAge, {age: 0, name: "no name"});
    return newArr;
};

// Do not edit below this line
module.exports = findTheOldest;
