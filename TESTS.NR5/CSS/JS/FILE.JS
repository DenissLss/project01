// if(nosacījums){darbības;}

let now = new Date();
console.log(now);
console.log(typeof(now));

console.log(now.getHours());
console.log(typeof(now.getHours()));

console.log(now.getHours() < 20);
console.log(typeof(now.getDate.Hours() < 20));

if (new Date().getHours() < 20) {
    document.getElementById("demo").innerHTML = "Good day!";
  }