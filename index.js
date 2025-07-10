'use strict'

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
  const player1 = document.getElementById("playerOne").value;
  const player2 = document.getElementById("playerTwo").value;
  if(player1 && player2){
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location.href = "game.html"; // redirect to game page
  }
  else{
    alert("please enter both player names.");
  }
});
