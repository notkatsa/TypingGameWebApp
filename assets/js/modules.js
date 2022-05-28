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

//export {myKeyPress}
// let text = [
//     "Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.Integer ac pellentesque praesent.Lorem ipsum dolor.Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum.Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.",
//     "I'm not finished! As I came in here, I heard those words, \"cradle of leadership.\" Well, when the bough breaks, the cradle will fall. And it has fallen here; it has fallen. Makers of men; creators of leaders; be careful what kind of leaders you're producin' here. I don't know if Charlie's silence here today is right or wrong.",
//     "I'm not a judge or jury. But I can tell you this: he won't sell anybody out to buy his future!! And that, my friends, is called integrity! That's called courage! Now that's the stuff leaders should be made of. Now I have come to the crossroads in my life. I always knew what the right path was. Without exception, I knew. But I never took it. You know why? It was too damn hard. Now here's Charlie. He's come to the crossroads. He has chosen a path. It's the right path. It's a path made of principle -- that leads to character. Let him continue on his journey.",
//     "You hold this boy's future in your hands, committee. It's a valuable future. Believe me. Don't destroy it! Protect it. Embrace it. It's gonna make ya proud one day -- I promise you.",
//     "You wanna work eight, ten fucking hours? You own nothing, you got nothing! Do you want a chivato on every corner looking after you? Watching everything you do? Everything you say, man? Do you know I eat octopus three times a day? I got fucking octopus coming out of my fucking ears.",
//     "So you wanna go on with me, you say it. You don\'t, then you make a move.In this country, you gotta make the money first. Then when you get the money, you get the power. Then when you get the power, then you get the women.",
//     "The quality that makes you go to great effort to reduce overall energy expenditure. It makes you write labor-saving programs that other people will find useful, and document what you wrote so you don't have to answer so many questions about it. Hence, the first great virtue of a programmer. Also hence, this book. See also impatience and hubris.",
//     "The anger you feel when the computer is being lazy. This makes you write programs that don't just react to your needs, but actually anticipate them. Or at least pretend to. Hence, the second great virtue of a programmer.",
//     "Excessive pride, the sort of thing Zeus zaps you for. Also the quality that makes you write (and maintain) programs that other people won't want to say bad things about. Hence, the third great virtue of a programmer."
// ]

// let i = (Math.random() * 10)
// const quote = text[Math.trunc(i)]
// document.getElementById('quote').innerHTML = quote;

// let words = quote.split(" ")

// var bar = document.getElementById("myBar")
// var width = 0.1;
// var step = 100 / words.length