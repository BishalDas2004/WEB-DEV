let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rst-btn");
let newgamebtn=document.querySelector("#new-btn");
let container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; // playerX    playerO
let count=0;

const winningPatterns=[          //storing the winning patterns(2D array)
        [0,1,2],//row wise
        [3,4,5],//row wise
        [6,7,8],//row wise
        [0,3,6],//column wise
        [1,4,7],//column wise
        [2,5,8],//column wise
        [0,4,8],//diagonally
        [2,4,6] //diagonally
]; 

// alert("error");

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    container.classList.add("hide");
};

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Button was clicked");
            if(turnO===true){//playerO turn
               box.innerText="O";
               box.style.color="rgba(10, 133, 10, 0.76)";
               turnO=false;
            }else{ //playerX turn
               box.innerText="X";
               box.style.color="rgba(143, 10, 10, 0.74)";
               turnO=true;
            }
            box.disabled=true;//one cannot change the given turn       
            count++;

            checkWinner();
            
    });
});

const checkWinner = ()=>{
   for(let pattern of winningPatterns){
    //    console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]); 
        let pos0val=boxes[pattern[0]].innerText;
        let pos1val=boxes[pattern[1]].innerText;
        let pos2val=boxes[pattern[2]].innerText;

        if(pos0val!=="" && pos1val!=="" && pos2val!==""){
            if(pos0val===pos1val && pos1val===pos2val){
                console.log("Winner!! is player"+ pos1val);
                showWinner(pos1val);
            }
            else{
                if(count===9){
                    // console.log("Draw!!");
                    showDraw();
                }
            }
        }
   }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations!! winner is player${winner}`;
    container.classList.remove("hide");
    disableBoxes();
};

const disableBoxes=()=>{
   for(let box of boxes){
    box.disabled=true;
   }
};

const showDraw = ()=>{
    msg.innerText="Draw!!";
    container.classList.remove("hide");
};

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);
