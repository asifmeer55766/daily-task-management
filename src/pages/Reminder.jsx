import React, { useState, useEffect } from "react";
import "../styles/reminder.scss";

export default function Reminder() {
  const [list, setList] = useState([]);

  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    period: "AM",
  });

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();

      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      const period = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours === 0 ? 12 : hours;
      hours = String(hours).padStart(2, "0");

      setTime({ hours, minutes, seconds, period });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const getMessages = () => {
    const messages = JSON.parse(localStorage.getItem("list") || "[]");
    setList(messages);
  };
  useEffect(() => {
    getMessages();
  }, []);
  const pendingMessages = list.filter((msg) => msg.status === "pending");

  return (
    <>
      <section className="reminder-container">
        <div className="watch-section">
          <p>{time.hours}</p>
          <p>{time.minutes}</p>
          <p>{time.seconds}</p>
          <p>{time.period}</p>
        </div>
      </section>

      <section className="reminder-messages">
        {pendingMessages.length > 0 ? (
          pendingMessages.map((message, index) => (
            <div className="message-fields" key={index}>
              <p>{message.text}</p>
              <p> {message.status}</p>
            </div>
          ))
        ) : (
          <p>Congratulations 🎉, There is no Remaining Task </p>
        )}
      </section>
    </>
  );
}
