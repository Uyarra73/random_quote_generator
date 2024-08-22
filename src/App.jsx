import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [quote, setQuote] = useState("");

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
}, [])

  return (
    <div className="App">
      <div className='quote'>
        <p>QOTD: <strong>{quote.quote}</strong></p>
        <p>Author: <strong>{quote.author}</strong></p>  {/* Use destructuring to access properties directly */}
      </div>
      <div className='btn'>
        <button onClick={getQuote}>Get Quote</button>
      </div>
    </div>
  )
}

export default App
