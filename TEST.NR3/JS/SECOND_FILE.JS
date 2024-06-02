a = 10;
console.log("a value: " + a);


var x = 10;
console.log("x value before {}: " + x);
{
    x = 20;
    console.log("x value in {} and after = action: " + x);
    var x = 100;
    console.log("x value before {} and after repeat var: " + x);
}
console.log("x value after {}: " + x);
x = 30;
console.log("x value after {} and after = action: " + x);
var x = 40;
console.log("x value after {} and after repeat var: " + x);