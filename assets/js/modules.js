const QUOTE_API_URL = 'http://api.quotable.io/random'

async function getRandomQuote() {
    fetch(QUOTE_API_URL + '?minLength=70')
        .then((data) => data.json())
        .then(data => main(data));
    
}

const main = (data) => {

    quote = data.content
    document.getElementById('quote').innerHTML = quote;
    words = quote.split(" ")
    step = 100 / words.length
    document.getElementById('chat').focus();
    document.getElementById('chat').select();
    start = Date.now();    
} 
window.prompt("Press OK to start TYPING!\nCursor is focused and ready to go!")
getRandomQuote()
var start = 0;
var bar = document.getElementById("myBar")
var width = 0.1;
var step = 0
let current_word_num = 0;
let words = []

const myKeyPress = () => { // happens on keypress

    let word = document.getElementById("chat").value
    let last_letter = word.slice(-1)

    if (last_letter == ' '){
        if (word == words[current_word_num] + ' '){
            width+=step;
            if (Math.ceil(width) >= 100)            //ms->min(milliseconds/1000)/60)
                if (window.prompt("Finished!\n Press Ok to play again! "+ words.length/(((Date.now()-start)/1000)/60) + "WPM!") === '') document.location.reload()    
            bar.style.width = width+"%"
            current_word_num++
            document.getElementById("chat").value = ''
            document.getElementById("chat").placeholder=words[current_word_num]
        }
    }
    if (current_word_num >= words.length - 1) return;
    
}
