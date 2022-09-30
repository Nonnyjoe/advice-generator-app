let quoteNumber = document.getElementById('quoteNumber');
let quote = document.getElementById('quote');

function generateQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            quote.textContent = data.slip.advice;
            quoteNumber.textContent = `Advice #${data.slip.id}`;
        })
}

generateQuote();