// Add two numbers and return result
function add(num1, num2) {
    return num1 + num2;
}
// subtract two numbers and return the result
function subtract(num1, num2) {
    return num1 - num2;
}
// multiply two numbers and return the result
function multiply(num1, num2) {
    return num1 * num2;
}
// Divide two numbers and return the result
function divide(num1, num2) {
    return num1/num2;
}
// Increments a number and returns the result
function increment(num) {
    return num+=1;
}
// decrements a number and returns the result
function decrement(num) {
    return num-=1;
}
// takes a string input and converts it to an integer with a radix of 10
function makeInt(string) {
    return parseInt(string, 10);
}
// takes a string input and converts it to a float
function preserveDecimal(string) {
    return parseFloat(string);
}