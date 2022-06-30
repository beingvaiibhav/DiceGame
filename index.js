var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImg = "images/"+"dice"+randomNumber1+".png";
var randomImg = document.querySelectorAll("img")[0];
randomImg.setAttribute("src",randomDiceImg);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "images/"+"dice"+randomNumber2+".png";
var randomImg2 = document.querySelectorAll("img")[1];
randomImg2.setAttribute("src",randomDiceImg2);

if(randomNumber1>randomNumber2){
    //Player 1 Win
    document.querySelectorAll("h1")[0].innerHTML = "🚩 Player 1 Won";

}else if(randomNumber2>randomNumber1){
    //Player 2 Win
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Won 🚩";

}else{
    //Draw
    document.querySelectorAll("h1")[0].innerHTML = "Draw";

}
