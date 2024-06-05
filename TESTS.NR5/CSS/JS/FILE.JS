// if(nosacījums){darbības;}

let now = new Date();
let hour_x = 18;

console.log(now);
console.log(typeof(now));

console.log(now.getHours());
console.log(typeof(now.getHours()));

console.log(now.getHours() < hour_x);
console.log(typeof(now.getDate.Hours() < hour_x));

//if (now.getHours() < hour_x) {
//    console.log("Output Nr.1 from if.");
//    console.log("Output Nr.2 from if.");
//    document.getElementById("demo").innerHTML = "Good day!";
//} 
if (now.getHours() < hour_x) {
    console.log("Output Nr.1 from if.");
    console.log("Output Nr.2 from if.");
    document.getElementById("demo").innerHTML = "Good day!";
} 