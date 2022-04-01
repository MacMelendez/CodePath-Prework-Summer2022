/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/*Global Constants*/ 
 
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

/*Global variables*/ 
var pattern = [];// [2,2,4,3,2,1,2,4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var lives;//Variable that holds user remaining lives

function startGame(){
    //initialize game variables    
    randomVals();//Creation of random pattern
    lives = 2;//Initialization of user lives
    progress = 0;
    gamePlaying = true;    
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    
}


function stopGame(){
    gamePlaying = false;// swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 265.9, 
  2: 333.3,
  3: 401.0,
  4: 469.2,
  5: 537.3//Added button
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  guessCounter = 0; 
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    if(clueHoldTime >= 300)//It would be too fast if the time is shorter
      {
        clueHoldTime -= 70
      }    
    
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost :(");
}

function winGame(){
  stopGame();
  alert("Game over You Won!! :)");
}

function guess(btn){
  console.log("User guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  
  if(pattern[guessCounter] == btn){
    
    //Guess was correct!
      if(guessCounter == progress){

          if(progress == pattern.length - 1)
          {
            //GAME OVER: WIN!
            winGame();
          }
          else
          {
            //Pattern correct. Add next segment
            progress++;
            playClueSequence();
          }
      }
      else{
        //so far so good... check the next guess
        guessCounter++;
      }
  }
  else{
    //Guess was incorrect
    //User Will have to click the correct button
    if(lives > 0)
      {
        lives --;//Substract one from the lives
        alert("Oh No! you are wrong click the correct button, Remaining lives: " + (lives+1));//Show alert to let the user know
      }
    else
      {
        loseGame();  //GAME OVER: LOSE! User ran out of lives :(  
      }
    
  }    
  
}

function randomVals(){
  let aux = 0;
    for(let i =0; i < 7; i++)
      {
        aux = Math.random();
        aux = Math.floor(aux * 5); //Max amount
        aux ++;//One more so it does not result in 0
        pattern [i] = aux; // Add to the pattern (creates the whole pattern)
        console.log("Aux = " + aux);//Shows the numbers of the pattern on the console for testing purposes
        
      }
  }





