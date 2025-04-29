let passwordbox = document.querySelector("input");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let symbols = "!$@#%^&*";
let numbers = "0123456789";
let genbtn = document.querySelector("button");
let allChars = uppercase + lowercase + symbols + numbers;
let cpy = document.querySelector(".display img");

function generate(){
    let password = "";
    password = password + uppercase[Math.floor(Math.random() * uppercase.length)];
    password = password + lowercase[Math.floor(Math.random() * lowercase.length)];
    password = password + symbols[Math.floor(Math.random() * symbols.length)];
    password = password + numbers[Math.floor(Math.random() * numbers.length)];
    // this one i saw it from gpt hehe

    for(let i =0; i<4; i++){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password;
}

genbtn.addEventListener("click",()=>{
    let pass = generate();

    // this logic is mine but it give a little weak password but still a good logic by me :)
    // for(let i=0; i<1; i++){
    //     let extra = generate();
    //     pass = pass + extra;
    // }

    passwordbox.value = pass;
})

cpy.addEventListener("click", ()=>{
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value)
 
})