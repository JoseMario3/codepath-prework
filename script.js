//global constants
const cluePauseTime = 800; //how long to pause in between clues
const nextClueWaitTime = 1500; //how long to wait before starting playback

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.3; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 500; //how long to hold each clue's light/sound
var lives = 4;

//generates a random pattern for each new game
function randPattern() {
  pattern.length = 4;
  for(let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.floor(Math.random() * 5) + 1;
  }
}

//begin the game
function startGame(){
  //initialize game variables
  lives = 4;
  progress = 0;
  gamePlaying = true;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randPattern();
  playClueSequence();
}

//end the game
function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

//play new animal audio
function playMyAudio(btn){
 document.getElementById("Audio"+btn).play();
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playMyAudio(btn);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0; i<=progress;i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) //set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
  clueHoldTime = clueHoldTime - 30;
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn) {
    if(guessCounter == progress) {
      if(progress == pattern.length - 1) {
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
      } 
  }else if(lives > 1){
    lives--;
    if(lives == 1){
      console.log("You only have " + lives + " life left!");
    } else {
      console.log("You have " + lives + " lives left!");
    }
    playClueSequence();
  }else{
    loseGame();
  }
}