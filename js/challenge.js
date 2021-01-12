// referencing HTML elements 

let counter = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let likes = document.getElementsByClassName("likes")[0];
let comment = document.getElementById("comment-form");
let commentInput = document.getElementById("comment-input");

// minus.onclick = function() {increment(false)}
minus.onclick = increment.bind(minus, false);
plus.onclick = increment.bind(plus, true);
let commentsList = document.getElementById("list");
function timer(){
    // let current = counter.innerHTML;
    // counter.innerHTML = ++current
    //counter.innerHTML = ++counter.innerHTML;
    counter.innerHTML++;
   
}

function increment( bool ) {
    if (bool) counter.innerHTML++;
    else counter.innerHTML--;
}

heart.onclick = likeCounter.bind(heart)

function likeCounter() {
    let x = counter.innerHTML
    let ref = document.getElementById(x);
    if( ref ) document.getElementById(`${x}_likes`).innerHTML++;
    else likes.innerHTML+=`<li id="${x}">${x} (<span id="${x}_likes">1</span>❤️) </li>`; 
}



// starting timer 

function setTimer(){
    pause.innerHTML = "pause"
   let interval = setInterval(timer, 1000);
    pause.onclick = function() { 
        
        clearInterval(interval) 
        pause.innerHTML = "resume";
        pause.onclick = setTimer.bind(pause);
    };
}
// setInterval gets triggered periodically (given input) 
comment.onsubmit = leaveAComment.bind(comment);
function leaveAComment(e){
    console.log(e);
    commentsList.innerHTML+=`<div>${commentInput.value}</div>`
    e.preventDefault();
    commentInput.value = "";
}
setTimer()