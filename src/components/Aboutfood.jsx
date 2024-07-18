import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

function Aboutfood() {
  
  const navigate= useNavigate();
  return (
    <div className="aboutfood">
      <div className="golden">
        <motion.div className="image" initial={{ scale:0, rotateZ:'720deg'}} whileInView={{scale:1, rotateZ:0}} transition={{duration:2}}>
            <img src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/ffafb122f09c33bf635959713e1d33c7af5d5744/thepalace/foodplate.png " alt="food"/>
        </motion.div>
        <div className="text">
          <h1>About our Recepies</h1>
          <p>
            At <span className="brand">Lion Den Bakery</span>, our recipes are more
            than just ingredients—they're a legacy of craftsmanship and
            dedication to quality. Each specialty item is a testament to our
            commitment to using only the finest, freshest ingredients, sourced
            locally whenever possible. Our bakers blend traditional techniques
            with a creative touch, ensuring that every loaf of bread, every
            pastry, and every cake is a masterpiece of flavor and texture.
            Whether you're savoring our signature cinnamon rolls or indulging in
            a classNameic French croissant, you'll taste the difference that our
            time-tested recipes make. At{" "}
            <span className="brand">Lion Den Bakery</span>, excellence is baked into
            every bite.
          </p>
          <button onClick={()=>navigate('/recepies')}> Read More </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutfood;
