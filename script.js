let newBtn = document.querySelector(".mode");
let body = document.querySelector("body");
let currtentMode = "light";
newBtn.addEventListener("click",()=>{
    if (currtentMode==="light"){
        currtentMode = "dark";
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        newBtn.innerText = "☀"
    }else{
        currtentMode = "light";
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        newBtn.innerText = "⏾"
    }
})
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let displayText = document.querySelector(".display");
let msgText = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");
let turnO = true ;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turnO = true ;
    enableBoxes();  
    displayText.classList.add("hide");
    newGame.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (turnO===true){
            box.innerText = "O";
            turnO = false ;
        }else{
            box.innerText = "X";
            turnO = true ;
        }
        box.disabled = true;
        checkWinner();
    });
});
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false ;
        box.innerText ="";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}
const showWinner= (Winner) =>{
    msgText.innerText = `Congratulations, Winner is ${Winner}`;
    displayText.classList.remove("hide");
    newGame.classList.remove("hide")
    disableBoxes();
}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText ;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !=""&& pos2Val !="" && pos3Val !=""){
            if (pos1Val===pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);