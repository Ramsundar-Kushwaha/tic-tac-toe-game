'use strict'
let firstPlayer = 1;
let count = 0;
let gameOver = false;
let playerOneName, playerTwoName;


window.addEventListener("DOMContentLoaded",function (){
  const PLAYER1 = localStorage.getItem("player1");
  const PLAYER2 = localStorage.getItem("player2");
  if(PLAYER1 && PLAYER2){
    document.getElementById("fp1").textContent=PLAYER1;
    playerOneName = PLAYER1;
    document.getElementById("fp2").textContent=PLAYER2;
    playerTwoName = PLAYER2;
  }else{
    alert("player names not found. Redirecting...");
    window.location.href="index.html";
  }
});

for(let i = 0; i < 9; i++){
  let btn = document.getElementById(`btn${i+1}`);

  btn.addEventListener("click", function(){
    if(gameOver)return;
    if(btn.textContent == ""){
      btn.textContent = (firstPlayer == 1)?'❤️':'💕';
      count++;
    }
    firstPlayer = (firstPlayer == 1)?2:1;
    if(Win_Check()){
      gameOver = true;
    };
  });
}

//winCheck
function Win_Check(){
  let winnerFound = false;
  function comboCheck(a, b, c){
    const A = document.getElementById(a).textContent;
    const B = document.getElementById(b).textContent;
    const C = document.getElementById(c).textContent;

    if(A == B && B == C && A != ""){
      document.getElementById(a).style.backgroundColor = "green";
      document.getElementById(b).style.backgroundColor = "green";
      document.getElementById(c).style.backgroundColor = "green";

      let x = (document.getElementById(a).textContent == '❤️')?`${playerOneName} - Winner`:`${playerTwoName} - Winner`;
      document.getElementById("win").textContent = x;
      winnerFound = true;
      return true;
    }
    return false;
  }

  //for horizontal check
  if(comboCheck("btn1", "btn2", "btn3"))  return true;
  if(comboCheck("btn4", "btn5", "btn6"))  return true;
  if(comboCheck("btn7", "btn8", "btn9"))  return true;

  //for vertical check
  if(comboCheck("btn1", "btn4", "btn7"))  return true;
  if(comboCheck("btn2", "btn5", "btn8"))  return true;
  if(comboCheck("btn3", "btn6", "btn9"))  return true;

  //for diagonal check
  if(comboCheck("btn1", "btn5", "btn9"))  return true;
  if(comboCheck("btn3", "btn5", "btn7"))  return true;
  
  if(count == 9 && winnerFound == false){
    for(let i = 0; i < 9; i++){
      document.getElementById(`btn${i+1}`).style.backgroundColor = "yellow";
    }
    document.getElementById("win").textContent = "Match Draw";
    return false;
  }
}