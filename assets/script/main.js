//1

let frontend = document.querySelector("a:nth-of-type(1)");

frontend.addEventListener("dblclick", frontendHandler);
frontend.addEventListener("animationend", frontendHandler);

function frontendHandler() {
  frontend.classList.toggle("nth-of-type-active");
  frontend.classList.toggle("frontend");
}
//design


let design = document.querySelector("a:nth-of-type(2)");

design.addEventListener("dblclick", designHandler);
design.addEventListener("animationend", designHandler);

function designHandler() {
  design.classList.toggle("nth-of-type-active");
  design.classList.toggle("design");
}




//-----E-----

let E = document.querySelector("a:nth-of-type(3)");

E.addEventListener("dblclick", EHandler);
E.addEventListener("animationend", EHandler);


function EHandler() {
  E.classList.toggle("nth-of-type-active");
  E.classList.toggle("E");
}




//-----disco-----


let disco = document.querySelector('a:nth-of-type(4)')

disco.addEventListener('mouseover', discoHandler)


function discoHandler() {
  disco.classList.toggle('nth-of-type-active')
  disco.classList.toggle('disco')
}



//sprint5


let sprint5 = document.querySelector("a:nth-of-type(5)");

sprint5.addEventListener("dblclick", sprint5Handler);
sprint5.addEventListener("animationend", sprint5Handler);

function sprint5Handler() {
  sprint5.classList.toggle("nth-of-type-active");
  sprint5.classList.toggle("sprint5");
}

//6
let fix = document.querySelector("a:nth-of-type(6)");

fix.addEventListener("click", fixHandler);
fix.addEventListener("animationend", fixHandler);

function fixHandler() {
  fix.classList.toggle("nth-of-type-active");
  fix.classList.toggle("fix");
}


//the


let the = document.querySelector("a:nth-of-type(7)");

the.addEventListener("dblclick", theHandler); 
function theHandler() {
  the.classList.toggle("nth-of-type-active");
  the.classList.toggle("the");
}

//flow


let flow = document.querySelector("a:nth-of-type(8)");

flow.addEventListener("dblclick", flowHandler); 
function flowHandler() {
  flow.classList.toggle("nth-of-type-active");
  flow.classList.toggle("flow");
}





//user
let user = document.querySelector("a:nth-of-type(9)");

user.addEventListener("dblclick", userHandler); 
function userHandler() {
  user.classList.toggle("nth-of-type-active");
  user.classList.toggle("user");
}


//interface
let interface = document.querySelector("a:nth-of-type(10)");

interface.addEventListener("click", interfaceHandler); 
function interfaceHandler() {
  interface.classList.toggle("nth-of-type-active");
  interface.classList.toggle("interface");
}















//12justus
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

