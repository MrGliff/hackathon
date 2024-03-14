import React, { useState, useEffect } from 'react';
import MotivationalQuotes from "./motivational_quotes.json"
import "./motivation.css"

const MotivationalQuote = () => {
  const [quote, setQuote] = useState({
    text: '',
    author: '',
  });

  useEffect(() => {
    newQuote(); // Call newQuote function when component mounts
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Fetch a random quote
  function newQuote() {
    const randomNumber = Math.floor(Math.random() * MotivationalQuotes.length);
    const newQuote = MotivationalQuotes[randomNumber].quote;
    const newAuthor = MotivationalQuotes[randomNumber].author;
    setQuote({
      text: newQuote,
      author: newAuthor
    });
  }

  return (
    <div className="quote-container">
      <h1>{quote.text}</h1>
      <h2>-{quote.author}</h2>
    </div>
  );
};

export default MotivationalQuote;
