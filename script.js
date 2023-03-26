const quote = document.querySelector(".quote");
const background = document.querySelector(".background"); //Setting the HTML elements to javascript variables

function getCouncil(){
    const advices = fetch("https://api.adviceslip.com/advice"); //Petition to the API is done
    advices.then(res => res.json())
        .then(response => {
            quote.innerText = `"${response.slip.advice}"`; //We access to the advice located in the JSON
        })
}

function getRandomNumber(max) {                 //The next two functions are done to generate a random RGB color
    return Math.floor(Math.random() * max);
  }

function getRandomColor () {
    const r = getRandomNumber(255);
    const g = getRandomNumber(255);
    const b = getRandomNumber(255);
    return `rgb(${r}, ${g}, ${b})`;
  };

function getCouncilAndRandomColorBackground(){ //This functions calls the getCouncil and the getRandomColor functions and is called when the button "new advice" is clicked
    getCouncil();
    setTimeout(()=>{
        background.style.backgroundColor = getRandomColor()
    },500);
  }

function twitterPost(){ //This functions opens a new twitter window and allow the user to share the current advice in their profile, this function is called when the twitter button is clicked
    const twurl = `https://twitter.com/intent/tweet?url=${quote.innerHTML}`;
    window.open(twurl,"_blank")
}
getCouncil();