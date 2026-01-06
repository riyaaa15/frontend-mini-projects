const api_url = "https://api.quotable.io/random";
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

async function getQuote(url){
    try{
        const response = await fetch(url);
        let data = await response.json();
        quote.innerHTML =  data.content;
        author.innerHTML = data.author;
    } catch (err) {
        quote.innerHTML = "Something went wrong!";
    }
}

let newQuote  = document.querySelector(".new");

newQuote.addEventListener("click", () => {
    getQuote(api_url);
});

function tweetQuote(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML,
        "Tweet Window", 
        "width=600, height=300");
}

let tweetBtn = document.querySelector(".tweet");

tweetBtn.addEventListener("click", ()=> {
    tweetQuote();
});

getQuote(api_url);