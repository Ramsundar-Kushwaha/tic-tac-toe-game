'use strict'
let player = 1;
let status = 0;
let player1,player2;

window.addEventListener("DOMContentLoaded",function (){
  const PLAYER1 = localStorage.getItem("player1");
  const PLAYER2 = localStorage.getItem("player2");
  if(PLAYER1 && PLAYER2){
    document.getElementById("fp1").textContent=PLAYER1;
    player1 = PLAYER1;
    document.getElementById("fp2").textContent=PLAYER2;
    player2 = PLAYER2;
  }else{
    alert("player names not found. Redirecting...");
    window.location.href="index.html";
  }
});

for(let i = 0; i < 9; i++){
  console.log("working");
  let btn = document.getElementById(`btn${i+1}`);
  btn.addEventListener("click", function(){
    if(btn.textContent == ""){
      btn.textContent = (player == 1)?'🐘':'🐎';
      status++;
    }
    player = (player == 1)?2:1;
    Win_Check();
  });
}

//winCheck
function Win_Check(){
  if(status >= 5 && status <= 9){
    //for horizontal cheaking
    if(document.getElementById("btn1").textContent == document.getElementById("btn2").textContent && document.getElementById("btn2").textContent == document.getElementById("btn3").textContent && document.getElementById("btn3").textContent != ""){

      document.getElementById("btn1").style.backgroundColor = "#366566";
      document.getElementById("btn2").style.backgroundColor = "#366566";
      document.getElementById("btn3").style.backgroundColor = "#366566";

      let x = (document.getElementById("btn1").textContent == '🐘')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }
    else if(document.getElementById("btn4").textContent == document.getElementById("btn5").textContent && document.getElementById("btn5").textContent == document.getElementById("btn6").textContent && document.getElementById("btn6").textContent != ""){

      document.getElementById("btn4").style.backgroundColor = "#366566";
      document.getElementById("btn5").style.backgroundColor = "#366566";
      document.getElementById("btn6").style.backgroundColor = "#366566";

      alert((document.getElementById("btn4").textContent == '🐘')?`${player1}. - Winner`:`${player2} - Winner`);
      return;
    }
    else if(document.getElementById("btn7").textContent == document.getElementById("btn8").textContent && document.getElementById("btn8").textContent == document.getElementById("btn9").textContent && document.getElementById("btn9").textContent != ""){

      document.getElementById("btn7").style.backgroundColor = "#366566";
      document.getElementById("btn8").style.backgroundColor = "#366566";
      document.getElementById("btn9").style.backgroundColor = "#366566";

      let x = (document.getElementById("btn7").textContent == '🐘')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }

    //for vertical cheaking
    else if(document.getElementById("btn1").textContent == document.getElementById("btn4").textContent && document.getElementById("btn4").textContent == document.getElementById("btn7").textContent && document.getElementById("btn7").textContent != ""){

      document.getElementById("btn1").style.backgroundColor = "#366566";
      document.getElementById("btn4").style.backgroundColor = "#366566";
      document.getElementById("btn7").style.backgroundColor = "#366566";

      let x = (document.getElementById("btn1").textContent == '🐘')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }
    else if(document.getElementById("btn2").textContent == document.getElementById("btn5").textContent && document.getElementById("btn5").textContent == document.getElementById("btn8").textContent && document.getElementById("btn8").textContent != ""){

      document.getElementById("btn2").style.backgroundColor = "#366566";
      document.getElementById("btn5").style.backgroundColor = "#366566";
      document.getElementById("btn8").style.backgroundColor = "#366566";

      let x = (document.getElementById("btn2").textContent == '🐘')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }
    else if(document.getElementById("btn3").textContent == document.getElementById("btn6").textContent && document.getElementById("btn6").textContent == document.getElementById("btn9").textContent && document.getElementById("btn9").textContent != ""){

      document.getElementById("btn3").style.backgroundColor = "#366566";
      document.getElementById("btn6").style.backgroundColor = "#366566";
      document.getElementById("btn9").style.backgroundColor = "#366566";

      let x = (document.getElementById("btn3").textContent == '🐘')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }

    //for diagonal cheaking
    else if(document.getElementById("btn1").textContent == document.getElementById("btn5").textContent && document.getElementById("btn5").textContent == document.getElementById("btn9").textContent && document.getElementById("btn9").textContent != ""){
      
      document.getElementById("btn1").style.backgroundColor = "#366566";
      document.getElementById("btn5").style.backgroundColor = "#366566";
      document.getElementById("btn9").style.backgroundColor = "#366566";

      let x = (document.getElementById("btn1").textContent == '🐘')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }
    else if(document.getElementById("btn3").textContent == document.getElementById("btn5").textContent && document.getElementById("btn5").textContent == document.getElementById("btn7").textContent && document.getElementById("btn7").textContent != ""){
      
      document.getElementById("btn3").style.backgroundColor = "#366566";
      document.getElementById("btn5").style.backgroundColor = "#366566";
      document.getElementById("btn7").style.backgroundColor = "#366566";

      let x = (document.getElementById("btn3").textContent == '🐘')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }

    //if not any case match --> default case
    else if(status == 9){
      let x = "Match Draw";
      for(let i = 0; i < 9; i++){
        document.getElementById(`btn${i+1}`).style.backgroundColor = "red";
      }
      document.getElementById("win").textContent = x;
    }
  }
}