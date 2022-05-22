const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  
  let currentTotal = 0;
  for (let i = 0; i < arr.length; i++)
  {
    currentTotal = add(currentTotal, arr[i]);
  }
  return currentTotal;
};

const multiply = function(arr) {
  let currentProduct = 1;
  for (let i = 0; i < arr.length; i++)
  {
    currentProduct *= arr[i];
  }
  return currentProduct;
  
};

const power = function(base, exponent) {
  if (exponent == 0)
  {
    return 1;
  }
  let currentProduct = 1;
  for (let i = 0; i < exponent; i++)
  {
    currentProduct *= base;
  }
  return currentProduct;
	
};

const factorial = function(num) 
{
  if (num == 0)
  {
    return 1;
  }
  else
  {
    return num * factorial(num - 1) ;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
