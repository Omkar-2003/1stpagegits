
const typing = document.querySelector(".typing");

const words = ["<GITS-DMCE"];

let count = 0;
let letterCount = 0;

function type(){
    // if(count === words.length){
    //     count = 0;
    // }
    let currentWord = words[count];
    let letter = currentWord.slice(0,++letterCount);
    typing.textContent = letter;

    //for repeating animation
    // if(letter.length===currentWord.length){
    //     letterCount=0;
    //     count++;
    // }

    setTimeout(type,400)
}

type();
