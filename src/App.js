import './App.css';
import { useState, useEffect } from "react"
import Loading from './components/Loading';
import Animations from './components/Animations';

function App() {
  const apiUrl = "https://api.quotable.io/random"
  const [quote, setQuote] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const generateQuote = () => {

    setIsLoading(true)
    setTimeout(() => {
      fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setQuote(data)
        setIsLoading(false)
      })
    } , 1000)
  }

  useEffect(() => {
    generateQuote()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
    <Animations />
    <div className="app-container">
      <h1 className="app-title">Quote Generator</h1>
      <div className="quote-wrapper">
        <p className='quote-content'>{quote.content}</p>
        <span className='quote-author'>{quote.author}</span>
      </div>
      <div class="line">
        <div class="quote"></div>
      </div>
      <div className="btns">

      <button onClick={generateQuote}>generate</button>

      <button>
      <a href={`whatsapp://send?text=${quote.content}`}>
        <img src={require("./images/whatsapp-logo.png")} alt="WhatsApp" />
       </a> 
        
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
