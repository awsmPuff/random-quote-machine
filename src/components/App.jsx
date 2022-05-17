import React, {useState} from "react";
import quotes from "../quotes";
import colorArray from "../colors";
import Footer from "./Footer";

function App() {

    const [quote, setQuote] = useState("The greatest glory in living lies not in never falling, but in rising every time we fall."); 
    const [author, setAuthor] = useState("Nelson Mandela");
    const [ranNum, setRanNum] = useState(0);
    const [mainColor, setMainColor] = useState("#e0b57c");
                  
    function getRanQuote(event) {
        
        const numX = Math.floor(Math.random() * quotes.length);
        setRanNum(numX);
        setQuote(quotes[numX].quote);
        setAuthor(quotes[numX].author);
        setMainColor(colorArray[numX]);
        event.preventDefault();
    }


    return (
      <header style={{backgroundColor:mainColor}}>
    
     <form id="quote-box" onClick={getRanQuote}>

         <div id="text" style={{color:mainColor}}>
         <i className="fa fa-quote-left" style={{color:mainColor}}></i> {quote}
         </div>
         <p id="author" style={{color:mainColor}}>
         - {author}
         </p>
         <div className="wrapper">
         <div className="left">
         <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" rel="noreferrer">
         <i className="fa-brands fa-twitter-square" style={{color:mainColor}}></i>
         </a>
         </div>
         <div className="right">
         <button id="new-quote" type="submit" style={{backgroundColor:mainColor}}>New Quote</button>
         </div>
         </div>

     </form>

     <Footer />
    </header>
    
    );
}


export default App;