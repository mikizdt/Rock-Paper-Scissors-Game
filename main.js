//Display game result

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let resetBtn = document.getElementById("resetBtn");
let result = document.getElementById("result");
// the computer has to generate a random choice.
const choiceArray = ["Rock", "Paper", "Scissors"];

function computerChoice() {
  const randomElement = Math.floor(Math.random() * choiceArray.length);
  const randomChoice = choiceArray[randomElement];
  return randomChoice;
}

//Target the selected player choice and compare to computer choice
rockBtn.addEventListener("click", function () {
  let computerTurn = computerChoice();
  let playerTurn = choiceArray[0];
  if (computerTurn == playerTurn) {
    result.textContent = ` 
    Computer choice is ${computerTurn}🪨 and your choice is ${playerTurn}🪨 : It's a draw!
    `;
  } else if (computerTurn !== playerTurn && computerTurn == choiceArray[1]) {
    result.textContent = ` 
    Computer choice is ${computerTurn}📄 and your choice is ${playerTurn}🪨 : You lose! 
    `;
  } else {
    result.textContent = ` 
    Computer choice is ${computerTurn}✂️ and your choice is ${playerTurn}🪨 : You win!
    `;
  }
});

paperBtn.addEventListener("click", function () {
  let computerTurn = computerChoice();
  let playerTurn = choiceArray[1];

  if (computerTurn == playerTurn) {
    result.textContent = ` 
    Computer choice is ${computerTurn}📄 and your choice is ${playerTurn}📄 : It's a draw!
    `;
  } else if (computerTurn !== playerTurn && computerTurn == choiceArray[2]) {
    result.textContent = ` 
    Computer choice is ${computerTurn}✂️ and your choice is ${playerTurn}📄 : You lose!
    `;
  } else {
    result.textContent = ` 
    Computer choice is ${computerTurn}🪨 and your choice is ${playerTurn}📄 : You win!
    `;
  }
});

scissorsBtn.addEventListener("click", function () {
  let computerTurn = computerChoice();
  let playerTurn = choiceArray[2];
  if (computerTurn == playerTurn) {
    result.textContent = ` 
    Computer choice is ${computerTurn}✂️ and your choice is ${playerTurn}✂️ : It's a draw!
    `;
  } else if (computerTurn !== playerTurn && computerTurn == choiceArray[0]) {
    result.textContent = ` 
    Computer choice is ${computerTurn}🪨 and your choice is ${playerTurn}✂️ : You lose!
    `;
  } else {
    result.textContent = ` 
    Computer choice is ${computerTurn}📄 and your choice is ${playerTurn}✂️ : You win!
    `;
  }
});

//Reset button to reset the game
resetBtn.addEventListener("click", function () {
  result.textContent = "Select your choice";
});
