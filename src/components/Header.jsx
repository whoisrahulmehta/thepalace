import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="rows row1" >
        <div className="heading">
          <h1>
            Restraunt <p> French Cousine </p>
          </h1>
        </div>
        <div className="dsc">
          <p>
            Welcome to <i>Palais De L'amour</i>, where every meal is a romance
            and every flavor tells a story. Nestled in the heart of culinary
            delight, our restaurant is a haven for lovers of exquisite cuisine
            and enchanting ambiance. Step into a world where the elegance of
            Paris meets the warmth of home, and let our carefully crafted dishes
            take you on a journey of love and taste. At <i>Palais De L'amour</i>
            , we don’t just serve food—we create memories. Join us for an
            unforgettable dining experience where passion is always on the menu.
          </p>
        </div>
        <div className="btn">
          <button onClick={()=>navigate('/book')}>Book Now !</button>
        </div>
      </div>
      <div className="rows row2">
        <img className="slideintop" src="/burger.png" alt="img" />
        <img className="slideinleft" src="/burger.png" alt="img" />
        <img className="slideinright" src="/burger.png" alt="img" />
      </div>
    </header>
  );
}

export default Header;
