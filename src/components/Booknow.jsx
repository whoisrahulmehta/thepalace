import React from "react";

function Booknow() {
  return (
    <div className="Booknow">
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
        <p>07AM to 03 Pm & 7:30Pm to 12PM</p>
        <p>
          <button>Book a Table Now</button>
        </p>
      </div>
      <div className="book">
        <h1>Book A Date With your Loved ones </h1>
        <form>
          <h1>Select from the following </h1>
          <label>
            <span>I am </span>
            <input type="text" id="name" name="name" placeholder="" /> .
          </label>
          <label>
            <span> I want to book a table on </span>
            <input type="date" id="date" name="date" />.
          </label>
          <label>
            <span> At </span>
            <input type="time" id="time" name="time" />.
          </label>
          <label>
            <span> I will be there with </span>
            <select id="guests" name="guests">
              <option value="">Guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5+">5+</option>
              <option value="5+">5+</option>
              <option value="20+">20+</option>
            </select>{" "}
            Guests
          </label>
          <label className="tips">
            <span> I would like to try </span>
            <select id="cousine" name="cousine">
              <option value="">Select A Category</option>
              <option value="Indian">Indian</option>
              <option value="Chineese">Chineese</option>
              <option value="Italian">Italian</option>
              <option value="French">French</option>
              <option value="Himachali">Himachali</option>
              <option value="Continental">Continental</option>
            </select>
            <span className="tip">
              (You can Select Any, Can also choose on the date !)
            </span>
          </label>
          <label>
            <span>You can contact me on</span>
            <input type="phone" id="phnumber" name="phnumber" />
          </label>
          <label>
            <span>Or email me at </span>
            <input type="email" id="email" name="email" />
          </label>
          <label>
            <span>Thank you </span>
          </label>
          <button>Get a response on this booking</button>
        </form>
      </div>
    </div>
  );
}

export default Booknow;
