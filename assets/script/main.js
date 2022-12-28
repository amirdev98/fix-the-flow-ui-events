let frontend = document.querySelector("a:nth-of-type(1)");

frontend.addEventListener("dblclick", frontendHandler);
frontend.addEventListener("animationend", frontendHandler);

function frontendHandler() {
  frontend.classList.toggle("nth-of-type-active");
  frontend.classList.toggle("frontend");
}

let design = document.querySelector("a:nth-of-type(2)");

design.addEventListener("dblclick", designHandler);
design.addEventListener("animationend", designHandler);

function designHandler() {
  design.classList.toggle("nth-of-type-active");
  design.classList.toggle("design");
}




//-----3-----
let E = document.querySelector("a:nth-of-type(3)");

E.addEventListener("dblclick", EHandler);
E.addEventListener("animationend", EHandler);


function EHandler() {
  E.classList.toggle("nth-of-type-active");
  E.classList.toggle("E");
}




//-----4-----
let disco = document.querySelector('a:nth-of-type(4)')

disco.addEventListener('mouseover', discoHandler)


function discoHandler() {
  disco.classList.toggle('nth-of-type-active')
  disco.classList.toggle('disco')
}




let sprint5 = document.querySelector("a:nth-of-type(5)");

sprint5.addEventListener("dblclick", sprint5Handler);
sprint5.addEventListener("animationend", sprint5Handler);

function sprint5Handler() {
  sprint5.classList.toggle("nth-of-type-active");
  sprint5.classList.toggle("sprint5");
}

let fix = document.querySelector("a:nth-of-type(6)");

fix.addEventListener("dblclick", fixHandler);
fix.addEventListener("animationend", fixHandler);

function fixHandler() {
  fix.classList.toggle("nth-of-type-active");
  fix.classList.toggle("fix");
}


let The = document.querySelector("a:nth-of-type(6)");

The.addEventListener("dblclick", TheHandler);


function TheHandler() {
  The.classList.toggle("nth-of-type-active");
  The.classList.toggle("The");
}


let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

