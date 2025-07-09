'use strict'
let player = 1;
let status = 0;
let player1 = prompt("Player 1","Ram");
let player2 = prompt("Player 2","Shyam");

let fp1 = document.getElementById("fp1");
let fp2 = document.getElementById("fp2");
fp1.style.color="blue";
if(player1 != null && player2 != null){
  fp1.textContent = player1;
  fp2.textContent = player2;
  for(let i = 0; i < 9; i++){
    console.log("working");
    let btn = document.getElementById(`btn${i+1}`);
    btn.addEventListener("click", function(){
      if(btn.textContent == ""){
        btn.textContent = (player == 1)?'X':'O';
        status++;
      }
      player = (player == 1)?2:1;
      if(player == 1){
        Win_Check();
        fp1.style.color="blue";
        fp2.style.color="black";
      }
      else{
        Win_Check();
        fp1.style.color="black";
        fp2.style.color="blue";
      }
    });
  }
}
else{
  alert("Please, Enter Players Name to Continue");
}

//winCheck
function Win_Check(){
  if(status >= 5 && status <= 9){
    //for horizontal cheaking
    if(document.getElementById("btn1").textContent == document.getElementById("btn2").textContent && document.getElementById("btn2").textContent == document.getElementById("btn3").textContent && document.getElementById("btn3").textContent != ""){

      document.getElementById("btn1").style.backgroundColor = "Green";
      document.getElementById("btn2").style.backgroundColor = "Green";
      document.getElementById("btn3").style.backgroundColor = "Green";

      let x = (document.getElementById("btn1").textContent == 'X')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }
    else if(document.getElementById("btn4").textContent == document.getElementById("btn5").textContent && document.getElementById("btn5").textContent == document.getElementById("btn6").textContent && document.getElementById("btn6").textContent != ""){

      document.getElementById("btn4").style.backgroundColor = "Green";
      document.getElementById("btn5").style.backgroundColor = "Green";
      document.getElementById("btn6").style.backgroundColor = "Green";

      alert((document.getElementById("btn4").textContent == 'X')?`${player1}. - Winner`:`${player2} - Winner`);
      return;
    }
    else if(document.getElementById("btn7").textContent == document.getElementById("btn8").textContent && document.getElementById("btn8").textContent == document.getElementById("btn9").textContent && document.getElementById("btn9").textContent != ""){

      document.getElementById("btn7").style.backgroundColor = "Green";
      document.getElementById("btn8").style.backgroundColor = "Green";
      document.getElementById("btn9").style.backgroundColor = "Green";

      let x = (document.getElementById("btn7").textContent == 'X')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }

    //for vertical cheaking
    else if(document.getElementById("btn1").textContent == document.getElementById("btn4").textContent && document.getElementById("btn4").textContent == document.getElementById("btn7").textContent && document.getElementById("btn7").textContent != ""){

      document.getElementById("btn1").style.backgroundColor = "Green";
      document.getElementById("btn4").style.backgroundColor = "Green";
      document.getElementById("btn7").style.backgroundColor = "Green";

      let x = (document.getElementById("btn1").textContent == 'X')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }
    else if(document.getElementById("btn2").textContent == document.getElementById("btn5").textContent && document.getElementById("btn5").textContent == document.getElementById("btn8").textContent && document.getElementById("btn8").textContent != ""){

      document.getElementById("btn2").style.backgroundColor = "Green";
      document.getElementById("btn5").style.backgroundColor = "Green";
      document.getElementById("btn8").style.backgroundColor = "Green";

      let x = (document.getElementById("btn2").textContent == 'X')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }
    else if(document.getElementById("btn3").textContent == document.getElementById("btn6").textContent && document.getElementById("btn6").textContent == document.getElementById("btn9").textContent && document.getElementById("btn9").textContent != ""){

      document.getElementById("btn3").style.backgroundColor = "Green";
      document.getElementById("btn6").style.backgroundColor = "Green";
      document.getElementById("btn9").style.backgroundColor = "Green";

      let x = (document.getElementById("btn3").textContent == 'X')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }

    //for diagonal cheaking
    else if(document.getElementById("btn1").textContent == document.getElementById("btn5").textContent && document.getElementById("btn5").textContent == document.getElementById("btn9").textContent && document.getElementById("btn9").textContent != ""){
      
      document.getElementById("btn1").style.backgroundColor = "Green";
      document.getElementById("btn5").style.backgroundColor = "Green";
      document.getElementById("btn9").style.backgroundColor = "Green";

      let x = (document.getElementById("btn1").textContent == 'X')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }
    else if(document.getElementById("btn3").textContent == document.getElementById("btn5").textContent && document.getElementById("btn5").textContent == document.getElementById("btn7").textContent && document.getElementById("btn7").textContent != ""){
      
      document.getElementById("btn3").style.backgroundColor = "Green";
      document.getElementById("btn5").style.backgroundColor = "Green";
      document.getElementById("btn7").style.backgroundColor = "Green";

      let x = (document.getElementById("btn3").textContent == 'X')?`${player1} - Winner`:`${player2} - Winner`;

      document.getElementById("win").textContent = x;
      return;
    }

    //if not any case match --> default case
    else if(status == 9){
      let x = "Match Draw";
      for(let i = 0; i < 9; i++){
        document.getElementById(`btn${i+1}`).style.backgroundColor = "red";
      }
      alert("MATCH DRAW");
      document.getElementById("win").textContent = x;
    }
  }
}