import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
const [quote, setQuote] = useState("");
const colors = ["green", "yellow", "blue", "magenta", "orange", "yellowgreen"];
const textRef = useRef();

const getQuote = () => {
  
  fetch("https://dummyjson.com/quotes")
   .then(response => response.json())
   .then(data => {
    let randomQuote = Math.floor(Math.random() * data.quotes.length);
    setQuote(data.quotes[randomQuote]);
   })
   .catch(error => console.error('Error:', error));
}

useEffect(()=> {
  getQuote()
}, []);

useEffect(() => {
  textRef.current.style.background = colors[Math.floor(Math.random()*colors.length)]
}, [quote]);

  return (
    <div className="App" ref={textRef}>
      <div className='quote' id="quote-box">
        <p id="text">QOTD: <strong>" {quote.quote} "</strong></p>
        <p id="author">Author: <strong>{quote.author}</strong></p>
        <div className='btn-container'>
          <button onClick={getQuote} className='btn' id="new-quote">Get Quote</button>
          <a href="" target='_blank' rel='noopener noreferer' className='btn' id="tweet-quote">Post Quote</a>
        </div>
      </div>
      
    </div>
  )
}

export default App
