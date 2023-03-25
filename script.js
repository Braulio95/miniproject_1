const quote = document.querySelector(".quote");
const background = document.querySelector(".background");

function getCouncil(){
    const advices = fetch("https://api.adviceslip.com/advice");
    advices.then(res => res.json())
        .then(response => {
            quote.innerText = `"${response.slip.advice}"`;
        })
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomColor () {
    const r = getRandomNumber(255);
    const g = getRandomNumber(255);
    const b = getRandomNumber(255);
    return `rgb(${r}, ${g}, ${b})`;
  };

function getCouncilAndRandomColorBackground(){
    getCouncil();
    setTimeout(()=>{
        background.style.backgroundColor = getRandomColor()
    },500);
  }

function twitterPost(){
    const twurl = `https://twitter.com/intent/tweet?url=${quote.innerHTML}`;
    window.open(twurl,"_blank")
}
getCouncil();