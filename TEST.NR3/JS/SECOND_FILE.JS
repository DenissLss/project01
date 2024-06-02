/*----------------------------TESTS AR VAR----------------------------*/
a = 10;
console.log("a value: " + a);


var x = 10;
console.log("x value before {}: " + x);
{
    x = 20;
    console.log("x value in {} and after = action: " + x);
    var x = 100;
    console.log("x value before {} and after repeat var: " + x);
    var xx = 1000;
}
console.log("x value after {}: " + x);
console.log("xx value after {}: " + xx);
x = 30;
console.log("x value after {} and after = action: " + x);
var x = 40;
console.log("x value after {} and after repeat var: " + x);
/*----------------------------TESTS AR LET----------------------------*/

let y = 10;
console.log("y value before {}: " + y);
{
    //console.log("y value after {}: " + y);
    //y = 20;
    //console.log("y value in {} and after = action: " + y);
    let y = 100;
    console.log("y value before {} and after repeat let: " + y);
}
console.log("y value after {}: " + y);
y = 30;
console.log("y value after {} and after = action: " + y);
//let y = 40;
console.log("y value after {} and after repeat let: " + y);