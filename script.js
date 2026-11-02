function mainScreen(){
let userName = document.getElementById("user-input").value;
document.getElementById("options-card").style.display= "flex";
document.getElementById("intro-card").style.display="none";
document.getElementById("card-title").innerHTML = userName+", WELCOME TO COOL MATH GAMES";
}
//This spwns the settings page
function easy(){
    document.getElementById("options-card").style.display="none";
    document.getElementById('settings-card-1').style.display="block";
}
//This spawns the second settins page
function hard(){
    document.getElementById("options-card").style.display="none";
    document.getElementById('settings-card-2').style.display="block";
}
//This spawn the addition game elements
function game1(){
    document.getElementById("settings-card-1").style.display="none";
    document.getElementById("game").style.display="flex";
    document.getElementById("start-B").style.display="block";
    document.querySelector(".instructions").style.display="block";
    document.getElementById("options-con").style.display="none";
    document.getElementById("box").style.display="none";
    document.getElementById("Questions").style.visibility = "hidden";
}
//This spwns the subtraction game elements
function game2(){
    document.getElementById("settings-card-1").style.display="none";
    document.getElementById("game2").style.display="flex";
    document.getElementById("start-B2").style.display="block";
    document.querySelector(".instructions2").style.display="block";
    document.getElementById("options-con2").style.display="none";
    document.getElementById("box2").style.display="none";
    document.getElementById("Questions2").style.visibility = "hidden";
}
let score=0;
let currentCorrectAnswer;
// this creates random math questions
function game1Questions(){
    document.querySelector(".instructions").style.display="none";
    document.getElementById("start-B").style.display="none";
    document.getElementById("score").style.display="block";
    document.getElementById("options-con").style.display="block";
    document.getElementById("box").style.display="flex";

    document.getElementById("Questions").style.visibility="visible";
    document.getElementById("box").innerHTML="?";
    document.getElementById("score").innerHTML="SCORE:"+score;

    const num1 = Math.floor(Math.random()*20)+1;
    const num2 = Math.floor(Math.random()*20)+1;

   currentCorrectAnswer = num1+num2;

    document.getElementById("Questions").innerHTML= num1+"+"+num2+"=";
    const btnArea = document.getElementById("options");
    btnArea.innerHTML = "";

    let options= [
        currentCorrectAnswer,
        currentCorrectAnswer - 3,
        currentCorrectAnswer + 3,
        Math.floor(Math.random()*20)+2
    ];

    options.sort(() => Math.random() - 0.5);

    options.forEach( choice =>{
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick= () =>game1CheckAnswer(choice, button);
        btnArea.appendChild(button);
        button.classList.add("choice-btn");
    });
// This checks if the answer chosen is correct
    function game1CheckAnswer(choice, button){
        if (choice === currentCorrectAnswer) {
            
            document.getElementById("box").innerHTML = currentCorrectAnswer;
            score += 10;
            document.getElementById("score").innerHTML = "SCORE:" +score;
            setTimeout(() =>{game1Questions();}, 1000);

           if(score > 0){ 
            document.getElementById("score").style.color = "white";
           }
          
        }else{
            button.classList.add("shake");
            setTimeout(() => button.classList.remove("shake"), 400);
            score -= 10;
            document.getElementById("score").innerHTML = "score: " +score;
            if (score < 0){
                document.getElementById("score").style.color ="red";
            }
        }
    }
}

// This creates random questions
function game2Questions(){
    document.querySelector(".instructions2").style.display="none";
    document.getElementById("start-B2").style.display="none";
    document.getElementById("score2").style.display="block";
    document.getElementById("options-con2").style.display="block";
    document.getElementById("box2").style.display="flex";

    document.getElementById("Questions2").style.visibility="visible";
    document.getElementById("box2").innerHTML="?";
    document.getElementById("score2").innerHTML="SCORE:"+score;

    const num1 = Math.floor(Math.random()*20)+1;
    const num2 = Math.floor(Math.random()*20)+1;

   currentCorrectAnswer = num1-num2;

    document.getElementById("Questions2").innerHTML= num1+"-"+num2+"=";
    const btnArea = document.getElementById("options2");
    btnArea.innerHTML = "";

    let options= [
        currentCorrectAnswer,
        currentCorrectAnswer - 3,
        currentCorrectAnswer + 3,
        Math.floor(Math.random()*20)+2
    ];

    options.sort(() => Math.random() - 0.5);

    options.forEach( choice =>{
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick= () =>game2CheckAnswer(choice, button);
        btnArea.appendChild(button);
        button.classList.add("choice-btn2");
    });
// This checks if the answer chosen is correct
    function game2CheckAnswer(choice, button){
        if (choice === currentCorrectAnswer) {
            
            document.getElementById("box2").innerHTML = currentCorrectAnswer;
            score += 10;
            document.getElementById("score").innerHTML = "SCORE:" +score;
            setTimeout(() =>{game2Questions();}, 1000);

           if(score > 0){ 
            document.getElementById("score").style.color = "white";
           }
          
        }else{
            button.classList.add("shake");
            setTimeout(() => button.classList.remove("shake"), 400);
            score -= 10;
            document.getElementById("score").innerHTML = "score: " +score;
            if (score < 0){
                document.getElementById("score").style.color ="red";
            }
        }
    }
}

