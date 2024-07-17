import React from "react";
import { Link } from "react-router-dom";

function Error() {

  return (
    <div className="Error">
      <p>OOPSSS ! You were not supossed to be here</p>
      <p>404</p>
      <p>Let's go back home </p>
     <Link to="/">Go Back To Home</Link>
    </div>
  );
}

export default Error;
