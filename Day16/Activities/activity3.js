

const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const doMaths = (num1) =>{
    return (num2 , fn) => {
        return fn(num1, num2);
    };
};

console.log(doMaths(5)(2, add));
// const doMaths = (5) =>{
//     return (2 , add) => {
//         return add(5, 2);
//     };
// };

console.log(doMaths(5)(2, subtract));
// const doMaths = (5) =>{
//     return (2 , subtract) => {
//         return subtract(5, 2);
//     };
// };

console.log(doMaths(5)(2, multiply));
// const doMaths = (5) =>{
//     return (2 , multiply) => {
//         return multiply(5, 2);
//     };
// };

console.log(doMaths(5)(2, divide));
// const doMaths = (5) =>{
//     return (2 , divide) => {
//         return divide(5, 2);
//     };
// };
