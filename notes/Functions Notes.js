/*
FUNCTIONS
*/

// "REGULAR" FUNCTION //
function printHello() {
  // code here
}

// "ARROW" FUNCTION //
const printHi = () => {
  // code here
};

// A "function declaration" is something like:
// const printHello = () => {}

// A "function call" is something like:
// printHello();

// FUNCTION CODE EXAMPLES //
const writeHello = () => {
  console.log("Hello!");
};
writeHello(); // "Hello!"

const print = (message) => {
  console.log(message);
};
print("omg, does this work?");
// omg, does this work?

// MULTIPLE FUNCTION PARAMETERS //
const printMany = (message, num) => {
  for (let i = 0; i < num; i++) {
    console.log(message);
  }
};
printMany("Joe", 3);
// Prints "Joe" three times

// MULTIPLE PARAMETERS CODE //
const sum = (num1, num2) => {
  console.log(num1 + num2);
};
sum(5, 6); // 11
sum(10, 10); // 20
sum(); // NaN
sum(1); // NaN

// RETURN STATEMENT //
const sum2 = (num1, num2) => {
  return num1 + num2;
};

const result = sum2(10, 20);
console.log(result);

// MULTIPLY //
const mul = (num1, num2) => {
  return num1 * num2;
};
mul(2, 3); // 6 (stored but not printed)

const result2 = mul(10, 10);
console.log(result2); // 100 (printed)

// Return statements are "undefined" by default.
// You must override the return statement.

const myName = () => {
  console.log("Joe");
  return "Joe";
};
myName();

const myNameResult = myName();
console.log(myNameResult);
