const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const url = "https://api.quotable.io/quotes/random";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        quoteEl.innerText = json[0].content;
        authorEl.innerText = json[0].author;
        checkLength(quoteEl.innerText);
    } catch (error) {
        console.error(error.message);
    }
}

function checkLength(text) {
    console.log(text.length);
    if (text.length > 80) {
        quoteEl.style.fontSize = "24px";
    } else {
        quoteEl.style.fontSize = "32px";
    }
}

function tweet() {
    const tweetURL = `https://twitter.com/intent/tweet?text=${quoteEl.innerText}%0A 
                                                                    - ${authorEl.innerText}`;
    window.open(tweetURL, '_blank');
}

getQuote(url);


