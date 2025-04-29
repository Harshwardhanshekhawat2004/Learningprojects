let gameSequence = [];
let userSequence = [];
let highScore = 0;

let gamesStarted = false;
let level = 0;
let randBtn = ["green", "yellow", "purple", "red"];
document.addEventListener("keydown", function(){
    if(gamesStarted==false){
        console.log("game started");
        levelup();
       
        gamesStarted = true;
    }
})

function btnflash(randombutn){
    // gameSequence = [randombutn];
    randombutn.classList.add("flash");
    setTimeout(function(){
        randombutn.classList.remove("flash");
    },250)
   
};
function levelup(){
    userSequence= [];
    level++;
    document.querySelector("h2").innerText = `level ${level}`;
    let btnidx = Math.floor(Math.random()*3);
    let btnColor = randBtn[btnidx];
    
    let randombutn = document.querySelector(`.${btnColor}`);
    btnflash(randombutn);
    gameSequence.push(btnColor);
    console.log(gameSequence);
}
function check(idx){
    // let idx = level-1;
    if(gameSequence[idx]===userSequence[idx]){
            // console.log("same value");
            if(userSequence.length === gameSequence.length){
               setTimeout(levelup, 1000);
            }
    }else{
        document.querySelector("body").style.backgroundColor = "red";
        setInterval(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        document.querySelector("h2").innerText = `game over press any key to restart your score is ${level}`;
       if(highScore==0){
        document.querySelector("h2").innerText = `game over press any key to restart your score is ${level} and high score is ${level}`;
        highScore = level;
       }else{
        if(highScore>level){
            document.querySelector("h2").innerText = `game over press any key to restart your score is ${level} and high score is ${highScore}`;
  
        }else{
            document.querySelector("h2").innerText = `game over press any key to restart your score is ${level} and high score is ${level}`;
        }
       }
        reset();
    }
}
function btnpress(){
    // console.log("btn pressed");
    
    let btn = this;
    
    btnflash(btn);
    let usercolor = btn.getAttribute("id");
    userSequence.push(usercolor);
    console.log(userSequence);
    check(userSequence.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    gameSequence=[];
    userSequence=[];
    level = 0;
    gamesStarted = false;
}

// function checkk(randombutn){
    
//     let allBtn = document.querySelectorAll(".btn");
//     allBtn.addEventListener("onclick", function(){
//         if(allBtn.innerText == randombutn){
//             level++;
//             document.querySelector("h2").innerText = `level ${level}`;
//             btnflash();
//         }
//     })
// }