function mainScreen(){
let userName = document.getElementById("user-input").value;
document.getElementById("options-card").style.display= "flex";
document.getElementById("intro-card").style.display="none";
document.getElementById("card-title").innerHTML = userName+", WELCOME TO COOL MATH GAMES";
}

function easy(){
    document.getElementById("options-card").style.display="none";
    document.getElementById('settings-card-1').style.display="block";
}

function hard(){
    document.getElementById("options-card").style.display="none";
    document.getElementById('settings-card-2').style.display="block";
}

function game1{
    document.getElementById("settings-card-1").style.display="none";
    document.getElementById("game").style.display="flex";
    
}
function gaem1Questions(){
    document.querySelector(".instructions").style.display="none";
    document.getElementById("start-B").style.display="none";
    document.getElementById("score").style.display="block";
    document.getElementById("options-con").style.display="block";
    document.getElementById("box").style.display="flex";

    document.getElementById("Questions").style.visibility="visible";
    document.getElementById("box").innerHTML="?";
    document.getElementById("score").innerHTML="SCORE:"+ScrollTimeline;

    const num1 = Math.floor(Math.random()*20)+1;
    const num2 = Math.floor(Math.random()*20)+1;

    currentCoreectAnswer = num1+num2;

    document.getElementById

}