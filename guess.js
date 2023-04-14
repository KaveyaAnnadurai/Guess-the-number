let level = 0,trial = 3;
var introDiv = document.getElementById("intro");
var gameDiv = document.getElementById("game");
var newgamebutton =  document.getElementById("newGameButton");
var nextLevelButton = document.getElementById("nextLevelButton");
var resultLine= document.getElementById("resultPara");
var pointsRef = document.getElementById("points");
var guessButton = document.getElementById("guessButton");
var restartButton =  document.getElementById("restartButton");
var actualAnswer ="";
var points=0;
  
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function game(a){
    newgamebutton.style.display = "none";
    nextLevelButton.style.display = "none";
    // resultLine.innerHTML = "";
    // pointsRef.innerHTML = "";
    if(a == 1)
        level = 1;
    else if(a==2) 
            level = 2;
    else level = 3;
    console.log(level);
    introDiv.style.display = "none";
    if(level == 1)
       {
        document.getElementById("range").innerHTML = "1 to 10";
       }
    else if(level ==2) {
        document.getElementById("range").innerHTML= "1 to 15";
       }
    else {
        document.getElementById("range").innerHTML= "1 to 20";
    }
       gameDiv.style.display = "flex";


}

function sam(){
    console.log("lala");
}

function newGame(){
    trial = 3;
    actualAnswer = "";
    document.getElementById('guessedAns').value = "";
    //loader
    document.getElementById('lives').innerHTML = "&hearts;  &hearts;  &hearts;";
    resultLine.innerHTML = "";
    points = 0;
    newgamebutton.style.display = "none";
    pointsRef.innerHTML = "";
    nextLevelButton.style.display = "none";
    guessButton.style.display = "block";
    restartButton.style.display = "block";
}
function result(){ 
   newgamebutton.style.display = "block";
   nextLevelButton.style.display = "block";
    guessButton.style.display = "none";
    restartButton.style.display = "none";
}

function guessNumber(){
   
    if(trial == 3){
        document.getElementById('lives').innerHTML= "&hearts;  &hearts;";
    }if(trial == 2){
        document.getElementById('lives').innerHTML= "&hearts;";
    }if(trial == 1){
        document.getElementById('lives').innerHTML= "";
    }
   
    if(trial > 0){
    var guessedAnswer = document.getElementById('guessedAns').value;
    
    if(actualAnswer == ""){
       
     if(level == 1){
       actualAnswer = randomNumber(1,10);
    }
    else if(level == 2){
        actualAnswer = randomNumber(1,15);
    }
    else actualAnswer = randomNumber(1,20);
    actualAnswer = Math.round(actualAnswer);
}
 
    console.log('trail:'+trial);
    console.log("ans:" + actualAnswer);
    console.log('guess:'+guessedAnswer);

    if(actualAnswer == guessedAnswer){
        if(trial == 3)
            points = 100;
        else if(trial == 2)
                points = 50;
        else points = 25;
        document.getElementById("resultPara").innerHTML= "Congratulations! You guessed it right.😍";
     pointsRef.innerHTML = "Points:" + points;
        result();
    }
    else if(trial == 1)
          {  document.getElementById("resultPara").innerHTML="Failed! game over!😢.<br>The number was "+ actualAnswer;

          result();
}
    else if(actualAnswer > guessedAnswer){
        document.getElementById("resultPara").innerHTML= "Try greater";
    }
    else {
          document.getElementById("resultPara").innerHTML= "Try smaller";
      
    }
}

trial -= 1;

document.getElementById('guessedAns').value = "";
}

function nextLevel(){
    newGame();
    gameDiv.style.display = "none";
    introDiv.style.display = "flex";
}