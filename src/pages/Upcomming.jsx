import React, { useEffect, useState } from "react";
import words from "../assets/words.json";
import "../styles/upcoming.scss";
import Loader from "../components/Loader";
export default function Upcomming() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [todayWords, setTodayWords] = useState([]);
  const [load, setLoad] = useState(false);
  const fetchData = async () => {
    setLoad(true);
    const API = "https://dummyjson.com/quotes";
    const response = await fetch(API);
    const data = await response.json();

    setQuotes(data.quotes);

    // show one random quote immediately
    generateRandomQuote(data.quotes);
    setLoad(false);
  };
  const generateRandomQuote = (list = quotes) => {
    if (list.length === 0) return;

    const randomIndex = Math.floor(Math.random() * list.length);
    setQuote(list[randomIndex]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setTodayWords(words[randomIndex].group);
  }, []);
  return (
    <>
      <div className="upcomming-container">
        <h1>Motivation of the day</h1>

        {load ? (
          <p className="loader-div">
            <Loader />
          </p>
        ) : (
          <div className="qoutes-container">
            {quote && (
              <div className="qoutes-box">
                <p>{quote.quote}</p>
                <p>Author : {quote.author}</p>
              </div>
            )}
          </div>
        )}
        <button onClick={() => generateRandomQuote()}>next</button>
      </div>
      <div className="words-of-day">
        <h1>Words of the day</h1>
        <div className="container-words">
          {todayWords.map((word, index) => (
            <div className="words" key={index}>
              <p>{word}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
