var randomNumber1 = Math.floor((Math.random()*6+1));
console.log(randomNumber1);

var randomImage1 = "/images/"+"dice"+randomNumber1+".png";
console.log(randomImage1)

var randomNumber2 = Math.floor((Math.random()*6+1));
console.log(randomNumber2);

var randomImage2 = "/images/"+"dice"+randomNumber2+".png";
console.log(randomImage2)

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =     "⛳ Player1 Wins";
} 
else if (randomImage1 < randomImage2) {
    (document.querySelector("h1").innerHTML = "Player2 wins ⛳");
}
else (document.querySelector("h1").innerHTML = "Draw⛳");