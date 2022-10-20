const actualQoute = document.getElementById('actualquote')
const author = document.getElementById('quote-author')
const btnclick=document.getElementById('btn')


async function getQuote(){

    // const proxyurl="htt ps://cors-anywhere.herokuapp.com/"
    
    const apiurl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    try {
        const response = await fetch( apiurl)
        const data = await response.json()
        actualQoute.innerText = data.quoteText;
        author.innerText=data.quoteAuthor
    } catch (error) {
        getQuote()
        console.log(error,'oops something is error occured');
    }
}



btnclick.addEventListener('click',getQuote)

