import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="brand">
        <p style={{textTransform:"uppercase"}}>
          <span><img src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/thepalace/favicon.png"alt="img" />palais de l'amour </span>
        </p>
      </div>
      <div className="navmenu">
        {[
          { name: "Home", path: "/" },
          { name: "Recepies", path: "/recepies" },
          { name: "Menu", path: "/menu" },
          { name: "Book Now", path: "/book" },
          { name: "About", path: "/about" },
        ].map((m, i) => (
          <p key={i}>
            <NavLink to={m.path}>{m.name}</NavLink>
          </p>
        ))}
      </div>
      <div className="contact">
        <p> <NavLink to ="contact"> Business Enquiry</NavLink></p>
      </div>
    </nav>
  );
}

export default Navbar;
