// if(nosacījums){darbības;}

let now = new Date();
let hour_x = 20;

console.log(now);
console.log(typeof(now));

console.log(now.getHours());
console.log(typeof(now.getHours()));

console.log(now.getHours() < hour_x);
console.log(typeof(now.getDate.Hours() < hour_x));

if (now.getHours().getHours() < hour_x) {
    console.log("Output from if.");
    document.getElementById("demo").innerHTML = "Good day!";
} 