const ftoc = function(temp) {
  // perform farenheit to celsisus calculation
  let convertedTemperature = ((temp - 32) * (5/9))//.toFixed(1);
  if (!(convertedTemperature % 1 == 0))
  {
    // return value fixed to 1 decimal place if not divisible by 1
    // convert to number, unary operator used
    return +(convertedTemperature.toFixed(1));
  }
  return convertedTemperature;
};

const ctof = function(temp) {
  // perform celsisus to farenheit calculation
  let convertedTemperature =  ((temp) * (9/5) + 32);
  if (!(convertedTemperature % 1 == 0))
  {
    // return value fixed to 1 decimal place if not divisible by 1
    // convert to number, unary operator used
    return +(convertedTemperature.toFixed(1));
  }
  return convertedTemperature;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
