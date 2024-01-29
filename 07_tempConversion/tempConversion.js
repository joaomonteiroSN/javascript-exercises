const convertToCelsius = function(temp) {
  let celcius = (((temp - 32) * (5/9)));
  let rounded = Math.round(celcius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  let fah = ((temp * 9/5) + 32);
  let rounded = Math.round(fah * 10) / 10;
  return rounded
};

console.log(convertToCelsius(-100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
