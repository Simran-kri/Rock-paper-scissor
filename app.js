let userscore = 0;
let compscore = 0;
const yourscore =document.querySelector("#yourscore");
const computerSCore =document.querySelector("#computerscore");



const message = document.querySelector("#message");
const choice = document.querySelectorAll(".choices div");
const chin=document.querySelector("#chin");
const winner=["rock","paper","scissor"];
choice.forEach((choices)=>{
choices.addEventListener("click",()=>{
let userChoice = choices.id;
console.log("YOUR CHOICE IS ",userChoice);
 let comp = genCompchoice();
console.log("computer choice is ",comp);
if(comp===userChoice){
  message.innerText="OOPS!! THE GAME IS DRAW";
  message.setAttribute("style","color:brown;font-weight:bold;font-size:50px;");

  
  
}

  if(comp==="rock"&& userChoice==="paper"){
    userscore++;
  message.setAttribute("style","color:green;font-weight:bold;font-size:50px;");
    message.innerText="YOU WON!!,Your PAPER beats Computer's ROCK";
  
    yourscore.innerText=userscore;}
  if(comp==="scissor"&& userChoice==="rock"){
    userscore++;
  message.setAttribute("style","color:green;font-weight:bold;font-size:50px;");
  message.innerText="YOU WON!!,Your ROCK beats Computer's SCISSOR";
  yourscore.innerText=userscore;}
  if(comp==="paper"&& userChoice==="scissor"){
    userscore++;
    message.setAttribute("style","color:green;font-weight:bold;font-size:50px;");
  message.innerText="YOU WON!!,Your SCISSOR beats Computer's PAPER";
  yourscore.innerText=userscore;}







    
    if(comp==="rock"&& userChoice==="scissor"){
      compscore++;
      computerSCore.innerText=compscore;
      message.innerText="YOU LOSE!! ,Computer's ROCK beats Your SCISSOR";
  message.setAttribute("style","color:red;font-weight:bold;font-size:50px;");
}
if(comp==="paper"&& userChoice==="rock"){
  compscore++;
  computerSCore.innerText=compscore;
  message.innerText="YOU LOSE!! ,Computer's PAPER beats Your ROCK";
message.setAttribute("style","color:red;font-weight:bold;font-size:50px;");
}
if(comp==="scissor"&& userChoice==="paper"){
  compscore++;
  computerSCore.innerText=compscore;
  message.innerText="YOU LOSE!! ,Computer's SCISSOR beats Your PAPER";
message.setAttribute("style","color:red;font-weight:bold;font-size:50px;");
}

    




    

    
});
});
 
const genCompchoice=()=>{
  let  options=Math.floor(Math.random()*3);
return winner[options];
}