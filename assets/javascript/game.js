var myScore = document.getElementById('MyScore');
//var myScore = getElementById("red", "yellow", "green", "blue");
myScore.innerHTML = 0;
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(100, 50);

function addToScore(val) {
    console.log(val)
    var numberToAdd = parseInt(val);
    var currentScore = parseInt(myScore.innerHTML);
    myScore.innerHTML = numberToAdd + currentScore;
}

var red = document.getElementById("red");
red.setAttribute("value", getRandomValue(10, 4));

var yellow = document.getElementById("yellow");
yellow.setAttribute("value", getRandomValue(10, 4));
var green = document.getElementById("green");
green.setAttribute("value", getRandomValue(10, 4));
var blue = document.getElementById("blue");
blue.setAttribute("value", getRandomValue(10, 4));

red.addEventListener('click', function () {
    addToScore(this.value);

});

yellow.addEventListener('click', function () {
    addToScore(this.value);
    checkMyScore();
});

green.addEventListener('click', function () {
    addToScore(this.value);
    checkMyScore();
});

blue.addEventListener('click', function () {
    addToScore(this.value);
    checkMyScore();
});
var sum = parseInt(red.value) + parseInt(yellow.value) + parseInt(green.value) + parseInt(blue.value);

function getRandomValue(a, b) {
    return Math.floor((Math.random() * a) + b);
}

function checkMyScore() {
    //myScore, targetScore(parseFloat());
    var playerInt = parseInt(myScore.innerHTML);
    var targetInt = parseInt(targetScore.innerHTML);
    if (playerInt === targetInt) {
        alert('You matched random boring boxes to a random number! Congrats! Now go reward yourself with some oreos or something.');
    } else if (playerInt > targetInt) {
        alert('You cant even match some boring looking boxes? Why not try again?');
    }
};
