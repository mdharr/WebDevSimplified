// function printVariable(variable) {
//     console.log(variable);
// }

// function func(x) {
//     x("hello world");
// }

// func(printVariable);

// function sumCallback(a, b, callback) {
//     callback(a + b);
// }

// function handleSum(sum) {
//     console.log(sum);
// }

// sumCallback(1, 2, handleSum);

// function printVariable(variable) {
//     console.log(variable);
// }

function greeting(name, callback) {
    callback("Hello " + name);
}

greeting("Michael", function (variable) {
    console.log(variable);
});