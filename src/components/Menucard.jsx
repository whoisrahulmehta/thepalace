import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Menucard() {
  return (
    <div className="menu">
      <p className="visit">
        <Link to="/menu">Full Menu</Link>
      </p>
      <div className="heading">
        <h1>Check out our menu</h1>
      </div>
      <div className="menucard">
        {[
          {
            id: 1,
            dish: "Raj Mah",
            image: "https://example.com/raj_mah.jpg",
            rating: (
              <>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </>
            ),
          },
          {
            id: 2,
            dish: "Spicy Szechuan Chicken",
            image: "https://example.com/szechuan_chicken.jpg",
            rating: (
              <>
                <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </>
            ),
          },
          {
            id: 3,
            dish: "Tiramisu",
            image: "https://example.com/tiramisu.jpg",
            rating: (
              <>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </>
            ),
          },
          {
            id: 4,
            dish: "Coq au Vin",
            image: "https://example.com/coq_au_vin.jpg",
            rating: (
              <>
                <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </>
            ),
          },
          {
            id: 5,
            dish: "Lobster Thermidor",
            image: "https://example.com/lobster_thermidor.jpg",
            rating: (
              <>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                <FaStar />
              </>
            ),
          },
        ].map((dish, i) => (
          <div className="card" key={i}>
            <div className="image">
              {" "}
              {/* <img src={dish.image} alt="image" />{" "} */}
              <img
                src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/thepalace/burger.png"
                alt="image"
              />{" "}
            </div>
            <div className="name">
              {" "}
              <p>{dish.dish}</p>
              <p>{dish.rating}</p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menucard;
