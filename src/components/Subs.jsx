import React from "react";
import { Link } from "react-router-dom";

function Subs() {
  return (
    <div className="subs">
      <h1>Please subscribe for update !</h1>
      <p>
        Here where and there excuse me there Here where and there excuse me
        thereHere where and there excuse me thereHere where and there excuse me
        there
      </p>
      <button><Link to="/contact">Subscribe Now</Link></button>
    </div>
  );
}

export default Subs;
