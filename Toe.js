let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn"); 
let newbtn= document.querySelector("#newGame");
let msgbox = document.querySelector(".msgbox");
let msg = document.querySelector("#msg")

let turnO =true; 
const Winpattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],

];  


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was Clicked"); 
        if(turnO)
        {
           box.innerText = "O"; 
           box.style.color="green";
           turnO = false;

        }
        else{
            box.innerText="X"; 
            box.style.color="red";
            turnO=true; 
        } 
        box.disabled =true;   

        checkWinner();
    });
});
   
const disableBoxes = () => {
      for(let box of boxes){
        box.disabled = true ;
      }
} 

const enableBoxes = () => {
    for(let box of boxes){
      box.disabled = false ; 
      box.innerText= "";
    }
}

const showWinner = (Winner) => {
     msg.innerText = `Congratulation, Winner is ${Winner}`;
     msgbox.classList.remove("hide"); 
     disableBoxes();
}

const checkWinner = () => {
    for(let pattern of Winpattern)
    {
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
     
      if(pos1val !="" && pos2val != "" , pos3val != "")
      {
       if (pos1val === pos2val && pos2val === pos3val)
       {
        console.log("winner",pos1val); 
    
        showWinner(pos1val);
       }
      }
       }
    };  

    const resetGame = () => {
        turn0 =true ; 
        enableBoxes(); 
        msgbox.classList.add("hide");
    }   

    newbtn.addEventListener("click",resetGame);
    reset.addEventListener("click",resetGame);


