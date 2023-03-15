let moves = document.getElementsByClassName("moves");
let humanMove, machineMove;
let result = document.getElementById("location");
let countLeft = 0,
  countRight = 0;

for (let i = 0; i < moves.length; i++) {
  if (
    moves[i].addEventListener("click", () => {
      humanMove = moves[i].value;
      machineMove = randomMove(moves);
      document.getElementById("human").value = humanMove;
      document.getElementById("computer").value = machineMove;
      compare(humanMove, machineMove);
    })
  );
}

let message = ["Player Wins!", "Computer Wins!", "Its a TIE!"];
let picture = [
  `<img src="./images/rock.svg" class="pic" alt="rock">`,
  `<img src="./images/paper.svg" class="pic" alt="paper">`,
  `<img src="./images/scissor.svg" class="pic" alt="scissor">`,
];
let docArray = [
  document.getElementById("human"),
  document.getElementById("computer"),
];
// let resetPicture = [
//   `<img src="./images/orange.svg"class="pic"  alt="orange">`,
//   `<img src="./images/banana.svg" class="pic" alt="banana">`,
// ];
function randomMove(arr) {
  //random index
  const randomIndex = Math.floor(Math.random() * arr.length);
  //random item
  const item = arr[randomIndex];
  return item.value;
}
function randomReset(arr) {
  //random index
  const randomIndex = Math.floor(Math.random() * 2);
  //random item
  const item = arr[randomIndex];
  return item;
}

function compare(human, machine) {
  if (human == "rock") {
    docArray[0].innerHTML = picture[0];
    if (machine == "rock") {
      docArray[1].innerHTML = picture[0];
      result.innerHTML = message[2];
    } else if (machine == "paper") {
      docArray[1].innerHTML = picture[1];
      result.innerHTML = "Computer Wins!";
      countRight++;
      document.getElementById("scoreRight").innerHTML = countRight;
    } else {
      docArray[1].innerHTML = picture[2];
      result.innerHTML = "Player Wins!";
      countLeft++;
      document.getElementById("scoreLeft").innerHTML = countLeft;
    }
  }
  if (human == "paper") {
    docArray[0].innerHTML = picture[1];
    if (machine == "paper") {
      document.getElementById("computer").innerHTML = picture[1];
      result.innerHTML = message[2];
    } else if (machine == "scissor") {
      docArray[1].innerHTML = picture[2];
      result.innerHTML = "Computer Wins!";
      countRight++;
      document.getElementById("scoreRight").innerHTML = countRight;
    } else {
      docArray[1].innerHTML = picture[0];
      result.innerHTML = "Player Wins!";
      countLeft++;
      document.getElementById("scoreLeft").innerHTML = countLeft;
    }
  }
  if (human == "scissor") {
    docArray[0].innerHTML = picture[2];
    if (machine == "scissor") {
      docArray[1].innerHTML = picture[2];
      result.innerHTML = message[2];
    } else if (machine == "rock") {
      docArray[1].innerHTML = picture[0];
      result.innerHTML = "Computer Wins!";
      countRight++;
      document.getElementById("scoreRight").innerHTML = countRight;
    } else {
      docArray[1].innerHTML = picture[1];
      result.innerHTML = message[2];
      result.innerHTML = "Player Wins!";
      countLeft++;
      document.getElementById("scoreLeft").innerHTML = countLeft;
    }
  }

  document.getElementById("reset").addEventListener("click", () => {
    countLeft = 0;
    countRight = 0;
    docArray[0].innerHTML = `<img src="./images/orange.svg"class="pic"  alt="orange">`;
    docArray[1].innerHTML = `<img src="./images/orange.svg"class="pic"  alt="orange">`;
    document.getElementById("scoreLeft").innerHTML = "0";
    document.getElementById("scoreRight").innerHTML = "0";
  });
}
