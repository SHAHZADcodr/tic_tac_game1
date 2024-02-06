let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newBtn=document.querySelector("#new");
let massaging=document.querySelector(".massage");
let msg=document.querySelector("#msg");
let turnX=true;// playerX and playerO
const winnerPattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];
    
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{ console.log("Box was click");
    if(turnX)
    {
        box.innerText="X";
        turnX=false;
    }
    else{
       box.innerText="O";
        turnX=true;
    }
    box.disabled=true;
    checkWinner();
    });
        });
         const checkWinner =()=>{
            for(pattern of winnerPattern){
 
                let pos1Value=boxes[pattern[0]].innerText;
                let pos2Value=boxes[pattern[1]].innerText;
                let pos3Value=boxes[pattern[2]].innerText;
                if(pos1Value!=""&&pos2Value!=""&&pos3Value!="")
                {
                  if(pos1Value===pos2Value&&pos2Value===pos3Value) {
                    console.log("Winner");
                    showWinner(pos1Value);
                  } 
                }
            }
         }
         const showWinner = (winner)=>{
msg.innerText=`Congratulations Winner is ${winner} `;
massaging.classList.remove("hide");
disableBoxes();
         }
         const resetGame = () =>{
turnX=true;
enableBoxes();
massaging.classList.add("hide");
         }
         const disableBoxes = () =>{
            for(let box of boxes)
            {
            box.disabled =true;
            }
         }
         const enableBoxes = () =>{
            for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
         }
         newBtn.addEventListener("click",resetGame);
         resetBtn.addEventListener("click",resetGame);