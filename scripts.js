function changeTurn(turn){
    // console.log(turn);
    return turn === "X" ? "O" : "X";
}
function isWin(){
    let winsarr= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let text= document.getElementsByClassName("turn");
    winsarr.forEach((ele) =>{
        if((text[ele[0]].innerText === text[ele[1]].innerText) && (text[ele[0]].innerText === text[ele[2]].innerText) && text[ele[0]].innerText !== ""){
            //won
            let winner= text[ele[0]].innerText;
            document.querySelector(".winner").innerText = `${winner} Won!!`;
            
            win= true;
            count= 0;
        }
    })
}

let turn= "X";
let win= false;
let count=0;

let box= document.getElementsByClassName("box");
box= Array.from(box);
// console.log(box);
box.forEach((ele)=>{
    let text= ele.querySelector(".turn");
    // console.log(text.innerText)
    ele.addEventListener("click", ()=>{
        count++;
        console.log(count)
        if(text.innerText == ""){
            text.innerText= turn;
            turn= changeTurn(text.innerText);
            isWin();
            if(count === 9 && win === false){
                document.querySelector(".winner").innerText = "Game Draw";
            }
        }
    })
})
let reset= document.querySelector(".reset");
reset.addEventListener("click", ()=>{
    let turn= document.getElementsByClassName("turn");
    turn= Array.from(turn);
    turn.forEach((ele)=>{
        ele.innerText = "";
        document.querySelector(".winner").innerText = "";
        win= false;
    })
});


