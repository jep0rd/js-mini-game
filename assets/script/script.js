// variables
let playerImg = document.querySelector("#display");
let compImg = document.querySelector("#display2");
let comp_img;
let loadingText = document.querySelector("#loading-text");
let loadingAnimation = document.querySelector("#loading-animation");
let playerScoreText = document.querySelector("#player-score");
let compScoreText = document.querySelector("#comp-score");
let modal = document.querySelector("#game-mode-modal");
let winText = document.querySelector("#win-text");
let playerScore = 0;
let compScore = 0;
let winnerScore = 0;
let counter = 0;
let gameDif = "none";
let player = "none";
let comp = "none";
let bgAudio = document.querySelector("#bg-audio")
bgAudio.volume = .1;

// easy mpde
const easyMode1 = [
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  }
];
const easyMode2 = [
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  }
];
const easyMode3 = [
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  }
]

// normal mode
const normalMode = [
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  }
];

// hard mode
const hardMode1 = [
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  }
];
const hardMode2 = [
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  }
];
const hardMode3 = [
  {
    pokemon: "squirtle",
    img: "assets/images/squirtle.gif",
  },
  {
    pokemon: "charmander",
    img: "assets/images/charmander.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  },
  {
    pokemon: "bulbasaur",
    img: "assets/images/bulbasaur.gif",
  }
];



// buttons
let squirtle = document.querySelector("#squirtle");
let charmander = document.querySelector("#charmander");
let bulbasaur = document.querySelector("#bulbasaur");
let battle = document.querySelector("#battle");
let nextRd = document.querySelector("#next-rd");
let easy = document.querySelector("#easy");
let normal = document.querySelector("#normal");
let hard = document.querySelector("#hard");
let threeRds = document.querySelector("#three-rds");
let fiveRds = document.querySelector("#five-rds");
let sevenRds = document.querySelector("#seven-rds");
let startBtn = document.querySelector("#start-btn");
let newGame = document.querySelector("#new-game-btn");
let resetBtn = document.querySelector("#reset");

// events
squirtle.addEventListener("click", playerChoseSquirtle);
charmander.addEventListener("click", playerChoseCharmander);
bulbasaur.addEventListener("click", playerChoseBulbasaur);
battle.addEventListener("click", intGame);
nextRd.addEventListener("click", nextRound);
easy.addEventListener("click", difficulty);
normal.addEventListener("click", difficulty);
hard.addEventListener("click", difficulty);
threeRds.addEventListener("click", rounds);
fiveRds.addEventListener("click", rounds);
sevenRds.addEventListener("click", rounds);
startBtn.addEventListener("click", startGame);
newGame.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);


let mode = normalMode;
// functions
function difficulty(event){
  gameDif = event.target.value;
}

function compChose(i){
  if(gameDif == "easy" && player == "squirtle"){
    mode = easyMode2;
  } else if(gameDif == "easy" && player == "charmander"){
    mode = easyMode3;
  } else if(gameDif == "easy" && player == "bulbasaur"){
    mode = easyMode1;
  } else if(gameDif == "hard" && player == "squirtle"){
    mode = hardMode3;
  } else if(gameDif == "hard" && player == "charmander"){
    mode = hardMode1;
  } else if(gameDif == "hard" && player == "bulbasaur"){
    mode = hardMode2;
  } else {
    mode = normalMode;
  }
  i = Math.trunc(Math.random() * mode.length);
  comp = mode[i].pokemon;
  comp_img = mode[i].img;
}

function playerChoseSquirtle(){ 
  player = normalMode[0].pokemon;
  playerImg.src = normalMode[0].img;
  playerImg.style.width = "75px";
}

function playerChoseCharmander(){
  player = normalMode[1].pokemon;
  playerImg.src = normalMode[1].img;
  playerImg.style.width = "75px";
}

function playerChoseBulbasaur(){ 
  player = normalMode[2].pokemon;
  playerImg.src = normalMode[2].img;
  playerImg.style.width = "75px";
}

function intGame(){
  if (player == "none") {
    alert("Please select your Pokemon");
  }
  else {
    squirtle.setAttribute("disabled","");
    charmander.setAttribute("disabled","");
    bulbasaur.setAttribute("disabled","");
    battle.style.display = "none";
    loadingText.style.display = "block";
    loadingAnimation.style.display = "block";

    const loadingID = setInterval(loading, 500);
    function loading(){
      if (counter == 3){
        clearInterval(loadingID);
        loadingAnimation.style.display = "none";
        roundResult();
      }
      else{
        loadingText.textContent += "."
        counter += 1;
      }
    }
  }
}


function roundResult(){
  compChose();
  compImg.src = comp_img;
  compImg.style.width = "75px";
  loadingText.style.fontSize = "2.5rem";
  if (player == "squirtle" && comp == "charmander") {
    loadingText.textContent = "You win!";
    loadingText.style.color = "#16FF00";
    playerScore++;
    playerScoreText.textContent = playerScore; 
  }
  else if (player == "charmander" && comp == "bulbasaur") {
    loadingText.textContent = "You win!";
    loadingText.style.color = "#16FF00";
    playerScore++;
    playerScoreText.textContent = playerScore;
  }
  else if (player == "bulbasaur" && comp == "squirtle") {
    loadingText.textContent = "You win!";
    loadingText.style.color = "#16FF00";
    playerScore++;
    playerScoreText.textContent = playerScore;
  }
  else if(player == comp){
    loadingText.textContent = "Draw";
  }
  else{
    loadingText.textContent= "You lose!";
    loadingText.style.color = "#DF2E38";
    compScore++;
    compScoreText.textContent = compScore;
  }
  winnerResult()
}



function nextRound(){
  squirtle.removeAttribute("disabled");
  charmander.removeAttribute("disabled");
  bulbasaur.removeAttribute("disabled");
  loadingText.style.display = "none";
  nextRd.style.display = "none";
  battle.style.display = "block";
  player = "none";
  comp = "none";
  playerImg.src = "assets/images/pokemon-ball.gif";
  compImg.src = "assets/images/pokemon-ball.gif";
  counter = 0;
  loadingText.textContent = "Computer is thinking";
  loadingText.style.color = "white";
  loadingText.style.fontSize = "1.2rem";
  compImg.style.width = "50px";
  playerImg.style.width = "50px";
}

function rounds(games){
 winnerScore = parseFloat(games.target.value);
}

function startGame(){
  if(gameDif == "none" || winnerScore == 0){
    alert("Please select difficulty and number of wins.");
  } else{
    modal.style.display = "none";
    winText.textContent = "Best of" + " " + winnerScore + " " + "wins";
  }
}

function winnerResult(){
  if (playerScore == winnerScore){
    loadingText.textContent = "Player win!";
    loadingText.style.fontSize = "3rem";
    loadingText.style.textAlign = "center";
    newGame.style.display = "block";
  }
  else if (compScore == winnerScore){
    loadingText.textContent = "Computer win!";
    loadingText.style.fontSize = "3rem";
    loadingText.style.textAlign = "center";
    newGame.style.display = "block";
  }
  else{
    nextRd.style.display = "block";
  }
}
function reset(){
  document.querySelector("#easy").checked = false;
  document.querySelector("#normal").checked = false;
  document.querySelector("#hard").checked = false;
  document.querySelector("#three-rds").checked = false;
  document.querySelector("#five-rds").checked = false;
  document.querySelector("#seven-rds").checked = false;
  playerScore = 0;
  playerScoreText.textContent = playerScore;
  compScore = 0;
  compScoreText.textContent = compScore;
  winnerScore = 0;
  newGame.style.display = "none";
  modal.style.display = "flex";
  nextRound();
  gameDif = "none";
}