//Dice-1

var randomNumber1 = Math.floor(Math.random()*6)+1;//creating randomNumber1

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";//creating ramdom Dice image

//set attribute

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);

//Dice-2

var randomNumber2=Math.floor(Math.random()*6)+1;//creating randomNumber2

var randomDiceImage2="images/dice" + randomNumber2 + ".png";//creating random dice image

//set attribute

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

//winner


    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🤖 Player 1 Wins!"
    }
    else if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML="🙃 Match is draw";
    }
    else{
        document.querySelector("h1").innerHTML=("👾 Player 2 Wins!");
    }
