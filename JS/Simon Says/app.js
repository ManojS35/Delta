let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

// let highestScore = 0;
// let highScore = document.createElement('h4');
// highScore.innerText = '0';
// document.querySelector('h4').classList.add(highScore);

let btns = ['yellow', 'red', 'green', 'purple'];
let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if(started == false) {
        console.log("Game is started!");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 100);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
} 

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    }, 100);
}
let wrongBtnPress = (currWrong) => {
    currWrong.style.backgroundColor = 'red';
    setTimeout(() => {
        currWrong.style.backgroundColor = 'white';
    }, 150);
}
function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        highestScore = Math.max()
    } else {
        if(gameSeq == 0) {
            h2.innerHTML = 'First Press any key button!!';
            let currWrong = document.querySelector('h2');
            wrongBtnPress(currWrong);
        } else {
            h2.innerHTML = `Game Over! Your Score was <strong>${level-1}</strong> <br> Press any key to start the game`;
            let currWrong = document.querySelector('body');
            wrongBtnPress(currWrong);
            reset();
        }
    }
}
function btnPress() {
    let btn = this;

    let userCol = btn.getAttribute('id');
    userSeq.push(userCol);
    // console.log(userSeq);
    userFlash(btn);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = 0;
    level = 0;
}