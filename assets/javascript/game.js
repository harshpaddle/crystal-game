var currentWeight = 0;
var img1Weight = Math.floor(Math.random() * 13);
var img2Weight = Math.floor(Math.random() * 13);
var img3Weight = Math.floor(Math.random() * 13);


Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}

// Radom weight to target;
document.getElementById("weight").innerHTML = Math.ceil(Math.random() * 120);

// Random value

// document.getElementById("ci1").attr("data-crystalvalue", 6); 

// var crystalValue = ($("#ci1").attr("data-crystalvalue"));

document.getElementById("currentWeight").innerHTML = currentWeight;
