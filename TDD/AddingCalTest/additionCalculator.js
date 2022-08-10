const additionCalculator = (...number) => {
  return number.reduce((sum, item) => sum + item, 0);
};
//module.exports = additionCalculator; without babelrc
export default additionCalculator; //with babelrc
//module.exports = function; exports it
//... is a rest operator in javascript to put the function into a array arg
//reduce() is a method to sum up all the items in a numbers array
