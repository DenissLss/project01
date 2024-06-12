function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius();
  document.getElementById("demo").innerHTML = value;