'use strict'

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
  const PLAYER1 = document.getElementById("playerOne").value;
  const PLAYER2 = document.getElementById("playerTwo").value;
  if(PLAYER1 && PLAYER2){
    localStorage.setItem("player1",PLAYER1);
    localStorage.setItem("player2",PLAYER2);
    window.location.href = "game.html";// redirect to game page
  }
  else{
    alert("please enter both player names.");
  }
});