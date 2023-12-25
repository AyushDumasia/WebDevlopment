let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","purple", "green"]

let started = false;
let level = 0;


document.addEventListener("click",function(){
    h3 = document.querySelector("h3");
    if(started == false){
        started = true;
        console.log(started);

        levelUp();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },300);
}

function levelUp(){
    level++;
    h3.innerText = `level ${level}`;

    let ranIdx  = Math.floor(Math.random() * 4);
    let ranColor  = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    console.log(ranIdx);


    btnflash(ranbtn);
}