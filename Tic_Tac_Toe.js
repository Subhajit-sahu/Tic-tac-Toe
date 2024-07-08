let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector(".new-btn");
let msgCont = document.querySelector(".msg-cnt");
let msg = document.querySelector(".msg");

let turn = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = ()=>{
    turn = true;
    count = 0;
    anableGame();
}

function anableGame(){
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = ""
        msgCont.style.display = "none";
    })
}
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "X";
            turn = false;
            box.disabled = true;
            box.style.color = "black"
        }
        else{
            box.innerText = "O";
            turn = true;
            box.disabled = true;
        }
        count++;
        checkWinner();
        if(count == 9){
            msg.innerText = "Draw";
            msgCont.style.display = "flex";
        }
    })
})

function showWinner(val){
    msg.innerText = `Winner is ${val}`;
    msgCont.style.display = "flex";
}
const checkWinner = ()=>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(`Winner is ${pos1Val}`);
                showWinner(pos1Val);
                boxes.forEach((box) => {
                    box.disabled = true;
                })
            }
        }
    }
}


newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
