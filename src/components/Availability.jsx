import React from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Availability() {
  return (
    <div className="bookN">
      <h1>Tee best Place to take your loved ones on a date !</h1>
      <h2>Visit Lion Den Bakers Now</h2>
      <p>We are Available on </p>
      <p className="days">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </p>
      <p className="timer"> <FaClock />07AM to 03 PM & 7:30PM to 12PM</p>
      <p>
       <Link to="/book">
       <button>Book a Table Now</button></Link>
      </p>
    </div>
  );
}

export default Availability;
