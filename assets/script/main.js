//1

let trill = document.querySelector("a:nth-of-type(1)");

trill.addEventListener("dblclick", trillHandler);


function trillHandler() {
  trill.classList.toggle("nth-of-type-active");
  trill.classList.toggle("trill");
}
//design


let jump2 = document.querySelector("a:nth-of-type(2)");

jump2.addEventListener("dblclick", jump2Handler);


function jump2Handler() {
  jump2.classList.toggle("nth-of-type-active");
  jump2.classList.toggle("jump2");
}




//-----updown-----

let updown = document.querySelector("a:nth-of-type(3)");

updown.addEventListener("dblclick", updownHandler);



function updownHandler() {
  updown.classList.toggle("nth-of-type-active");
  updown.classList.toggle("updown");
}




//-----disco-----


let disco = document.querySelector('a:nth-of-type(4)')

disco.addEventListener('mouseover', discoHandler)


function discoHandler() {
  disco.classList.toggle('nth-of-type-active')
  disco.classList.toggle('disco')
}



//sprint5


let toggle = document.querySelector("a:nth-of-type(5)");

toggle.addEventListener("dblclick", toggleHandler);


function toggleHandler() {
  toggle.classList.toggle("nth-of-type-active");
  toggle.classList.toggle("toggle");
}

//zoomin
let zoomin = document.querySelector("a:nth-of-type(6)");

zoomin.addEventListener("click", zoominHandler);


function zoominHandler() {
  zoomin.classList.toggle("nth-of-type-active");
  zoomin.classList.toggle("zoomin");
}


//turn


let turn = document.querySelector("a:nth-of-type(7)");

turn.addEventListener("dblclick", turnHandler); 
function turnHandler() {
  turn.classList.toggle("nth-of-type-active");
  turn.classList.toggle("turn");
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

interface.addEventListener("mouseover", interfaceHandler); 
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

