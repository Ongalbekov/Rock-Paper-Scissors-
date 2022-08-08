
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");
const restart_game= document.querySelector('#restart');

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function convertCase(anythingIwant) {
  if (anythingIwant === "paper") return "Paper";
  if (anythingIwant === "scissors") return "Scissors";
  return "Rock";
}

let userScore = 0;
let computerScore = 0;
gewinn=(user, computer)=>{
  userScore++;
  userScore_span.innerHTML = userScore;
  const userName = "(user)";
  const compName = " (comp)";
  result.innerHTML = `<p>${convertCase(user
)}${userName} beats ${convertCase(computer)}${compName}. You win!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("winningStyles");
  setTimeout(() => roundStatus.classList.remove("winningStyles"), 1000);
}

verloren=(user, computer) =>{
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const userName = "(user)"
  const compName = "(comp)"
  result.innerHTML = `<p>${convertCase(
    computer
  )}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("losingStyles");
  setTimeout(() => roundStatus.classList.remove("losingStyles"), 1000);
}

draw=(user)=>{
  result.innerHTML = `<p>It was a draw! You both chose ${convertCase(
    user
  )}</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("drawStyles");
  setTimeout(() => roundStatus.classList.remove("drawStyles"), 1000);
}

game=(userChoice)=>{
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      gewinn(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      verloren(userChoice, computerChoice);
      break;
      default:
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      draw(userChoice, computerChoice);
  }
  rounds();
}
restart=()=>{
  userScore=0;
  computerScore=0;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result.innerHTML='Let.s play!'
}
const round_5=document.querySelector('#round5');
const round_10=document.querySelector('#round10');
const round_15=document.querySelector('#round15');
const round_20=document.querySelector('#round20');

rounds=()=>{
        if(round_5.checked){
        if(userScore===5 ){
                restart(), result.innerHTML='Gratulation!!!';
        }
        else if(computerScore===5 ){
                restart(), result.innerHTML='Leider hast du verloren!!!';
        }
}
if(round_10.checked){
        if(userScore===10 ){
                restart(), result.innerHTML='Gratulation!!!' ;
                
        }
        else if(computerScore===10 ){
                restart(), result.innerHTML='Leider hast du verloren!!!';
        }
}
if(round_15.checked){
        if(userScore===15 ){
                restart(), result.innerHTML='Gratulation!!!' ;
                
        }
        else if(computerScore===15 ){
                restart(), result.innerHTML='Leider hast du verloren!!!';
        }
}
if(round_20.checked){
        if(userScore===20 ){
                restart(), result.innerHTML='Gratulation!!!' ;
                
        }
        else if(computerScore===5 ){
                restart(), result.innerHTML='Leider hast du verloren!!!';
        }
}
}

main=() =>{
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
  restart_game.addEventListener("click", () => restart());
}
main();
