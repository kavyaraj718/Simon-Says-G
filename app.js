let gameseq = [];
let userseq = [];

let btns = ["pink", "lightblue", "orange", "blueviolet"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

document.addEventListener("keypress", () => {
    if(started == false) {
        console.log("Game is Started");
        started = true;

        levelUp();
    }
}
);

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    },500);
}

function btnFlashuser(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 500);
}

function levelUp() {
    userseq = [];
    level++;
    h4.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randbtn = document.querySelector(`.${randCol}`);
    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randbtn);
    gameseq.push(randCol);
    console.log(gameseq);
    btnFlash(randbtn);
}

function checkAns(idx) {
    if(userseq[idx] == gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h4.innerHTML = `Game Over!Your score was<b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.BackgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.BackgroundColor = "white";
        }, 500);
        reset();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    btnFlashuser(btn);

    userCol = btn.getAttribute("id");
    userseq.push(userCol);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}