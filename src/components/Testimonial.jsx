import React from "react";
import { FaPenFancy } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="testimonials">
      <div className="tes">
        <h6>
          "Dining at Palais De L'amour has been an unforgettable experience. The
          exquisite flavors, the enchanting ambiance, and the impeccable service
          make this restaurant truly special. Every dish is crafted with such
          attention to detail and passion, it's like a piece of art on a plate.
          I have celebrated many special moments here and each visit leaves me
          more impressed than the last. Palais De L'amour is not just a
          restaurant; it's a culinary journey that stays with you long after the
          meal is over. Highly recommended to anyone who appreciates fine dining
          at its best."
        </h6>
        <p><FaPenFancy /> - Gustavo Aslekesinsa(Founder & CEO)</p>
      </div>
    </div>
  );
}

export default Testimonial;
