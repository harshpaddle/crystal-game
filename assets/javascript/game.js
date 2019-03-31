var currentWeight = 0;
var targetWeight = Math.ceil(Math.random() * 120);
var img1Weight = Math.floor(Math.random() * 13);
var img2Weight = Math.floor(Math.random() * 13);
var img3Weight = Math.floor(Math.random() * 13);
var wins = 0;
var loses = 0;


// Radom weight to target;
document.getElementById("weight").innerHTML = targetWeight;


function newGame() {
  targetWeight = Math.ceil(Math.random() * 120);
  currentWeight = 0;
  img1Weight = Math.floor(Math.random() * 13);
  img2Weight = Math.floor(Math.random() * 13);
  img3Weight = Math.floor(Math.random() * 13);
  document.getElementById("weight").innerHTML = targetWeight;
  document.getElementById("currentWeight0").innerHTML = currentWeight;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("loses").innerHTML = loses;
};

$(".ci1").on('click', function() {
  currentWeight += img1Weight;
  document.getElementById("currentWeight0").innerHTML = currentWeight;
});

$("#ci2").on('click', function() {
  currentWeight += img2Weight;
  document.getElementById("currentWeight0").innerHTML = currentWeight;
});

$("#ci3").on('click', function() {
  currentWeight += img3Weight;
  document.getElementById("currentWeight0").innerHTML = currentWeight;
});

$(".clickingArea").on("click", function() {
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("loses").innerHTML = loses;

  if (currentWeight === targetWeight) {
    alert('you win this one');
    wins++;
    newGame();
  } else if (targetWeight < currentWeight) {
    alert('you lose');
    loses++;
    newGame();
  }
});




Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}



// Random value

// document.getElementById("ci1").attr("data-crystalvalue", 6); 

// var crystalValue = ($("#ci1").attr("data-crystalvalue"));


