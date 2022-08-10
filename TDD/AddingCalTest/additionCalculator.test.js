const { default: test } = require("node:test");
const { describe } = require("yargs");
//const additionCalculator = require("./additionCalculator"); without babelrc
import additionCalculator from "./additionCalculator"; //with babelrc

// organize related test cases into a groups
describe("additionCalculator test case", () => {
  test("addition of 109 and 189 to equal 298", () => {
    expect(additionCalculator(109, 189)).toBe(298);
  });
  //allowed user to add any number of test
  test("addition of 111 and 222 to equal 298", () => {
    expect(additionCalculator(111, 222)).toBe(298);
  });
  test("addition of 100,50,20,45 and 30 to equal 245", () => {
    expect(additionCalculator(100, 50, 20, 45, 30)).toBe(245);
  });
  test("addition of 7 to equal 7", () => {
    expect(additionCalculator(7, 7)).toBe(7);
  });
  test("addition of no argument provided to equal 0", () => {
    expect(additionCalculator()).toBe(0);
  });
});
//Test() accepts three arg
//the name of the test and the function contain and the optional timeout arg
//expect() let you test the output of the test
//toBe() enable you to compare the expect() arg to primitive values
