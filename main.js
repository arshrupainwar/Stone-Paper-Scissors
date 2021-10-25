//const choices = document.getElementsByClassName("choice");
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
//console.log(modal); 

const scoreboard = {
  player: 0,
  computer: 0
}


function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33)
    return "rock";
  else if (randomNumber < 0.66)
    return "paper";
  else
    return "siccsors";
}

// function play(e)
// {
//   console.log(e.target.id)
// }
// choices.forEach(function(x){
//   x.addEventListener('click',play)
// })


// same thing using arrow functions

function getWinner(p, c) {
  //console.log(p,c);
  if (p === c)
    return "draw";
  else if (p === "rock") {
    if (c === "paper")
      return "computer";
    else
      return "player";
  }
  else if (p === "paper") {
    if (c === "siccsors")
      return "computer";
    else
      return "player";
  }
  else {
    if (c === "rock")
      return "computer";
    else
      return "player";
  }
}

const play = (e) => {
  //console.log(e.target.id)
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computrChoice = getComputerChoice();
  let winner = getWinner(playerChoice, computrChoice);
  //console.log(winner);
  showWinner(winner, computrChoice);
}

function restartGame()
{
  scoreboard.player=0;
  scoreboard.computer=0;
  score.innerHTML=` <p>Player:${scoreboard.player}</p>
                    <p>Computer:${scoreboard.computer}</p>`
}

function showWinner(winner, computrChoice) {
  if (winner == "player") {
    scoreboard.player++;
    result.innerHTML = `<h1 class="text-win">You Win</h1>
                        <i class ="fas fa-hand-${computrChoice} fa-10x"></i>
                        <p>Computer Choice <strong>${computrChoice.charAt(0).toUpperCase() + computrChoice.slice(1)}`;
  }

  else if (winner == "computer") {
    scoreboard.computer++;
    result.innerHTML = `<h1 class="text-lose">You Lose</h1>
                        <i class ="fas fa-hand-${computrChoice} fa-10x"></i>
                        <p>Computer Choice <strong>${computrChoice.charAt(0).toUpperCase() + computrChoice.slice(1)}`;
  }

  else {
    result.innerHTML = `<h1 class="text-draw">It's a Draw</h1>
                        <i class ="fas fa-hand-${computrChoice} fa-10x"></i>
                        <p>Computer Choice <strong>${computrChoice.charAt(0).toUpperCase() + computrChoice.slice(1)}`;
  }
  modal.style.display = "block";

  score.innerHTML=
  ` <p>Player:${scoreboard.player}</p>
    <p>Computer:${scoreboard.computer}</p>
  `
}

function clearModal(e) {
  if (e.target == modal)
    modal.style.display = "none";

}
choices.forEach((x) => { x.addEventListener('click', play) });
window.addEventListener('click', clearModal);
restart.addEventListener('click',restartGame);