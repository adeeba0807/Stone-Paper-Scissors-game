let US=0;
let CS=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIx=Math.floor(Math.random()*3);
    return options[randIx];
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw.Play again.";
    msg.style.backgroundColor="#081b31";

}
let userChoice;
let compChoice;
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        US++;
        userScorePara.innerText=US;
        console.log("you win!");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        CS++;
        compScorePara.innerText=CS;
        console.log("you lose!");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}


const playGame=(userChoice)=>{
     const compChoice=genCompChoice();
     if(userChoice===compChoice){
        drawGame();

     }
     else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
             userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
            };



choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
          
          playGame(userChoice);
    })
})