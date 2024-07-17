import React from "react";
import { FaStar } from "react-icons/fa";

function Reveiws() {
  return (
    <div className="reviews">
      {[
        {
          id: 1,
          star: <FaStar />,
          review:
            "Palais De L'amour offers a truly exquisite dining experience. The flavors are rich and authentic, and the ambiance is both romantic and welcoming. Every dish is a masterpiece, crafted with love and attention to detail. Highly recommended for a memorable culinary adventure.",
          author: "Rahul Mehta",
        },
        {
          id: 2,
          star: <FaStar />,
          review:
            "A wonderful place with a delightful menu. The service is impeccable, and the food is out of this world. Every bite is a burst of flavor. The atmosphere is perfect for a romantic evening. I will definitely be coming back. Palais De L'amour is a true gem.",
          author: "Emily Johnson",
        },
        {
          id: 3,
          star: <FaStar />,
          review:
            "Dining at Palais De L'amour is an experience like no other. The dishes are not only delicious but beautifully presented. The staff is friendly and attentive, making sure every guest feels special. A perfect spot for celebrating special occasions. Highly recommend.",
          author: "Arjun Verma",
        },
        {
          id: 4,
          star: <FaStar />,
          review:
            "This restaurant exceeded all my expectations. The ambiance is cozy yet elegant, and the food is simply divine. Each dish is prepared with fresh ingredients and bursts with flavor. The staff is knowledgeable and makes great recommendations. Palais De L'amour is a must-visit.",
          author: "Samantha Lee",
        },
        {
          id: 5,
          star: <FaStar />,
          review:
            "An outstanding culinary experience! The menu offers a variety of dishes that are both innovative and comforting. The flavors are well-balanced, and the presentation is top-notch. The atmosphere is intimate and perfect for a date night. I can't wait to return.",
          author: "Michael Davis",
        },
        {
          id: 6,
          star: <FaStar />,
          review:
            "From the moment we walked in, we were treated like royalty. The ambiance is elegant and charming, perfect for a romantic dinner. The food was exceptional, with every dish bursting with flavor. Highly recommended for anyone looking for an unforgettable dining experience.",
          author: "Priya Kapoor",
        },
        {
          id: 7,
          star: <FaStar />,
          review:
            "Palais De L'amour is a hidden gem. The attention to detail in both the decor and the food is impressive. The flavors are complex and delightful, and the service is top-notch. It's a great place to enjoy a special meal with loved ones. Will definitely visit again.",
          author: "John Smith",
        },
        {
          id: 8,
          star: <FaStar />,
          review:
            "What an amazing experience! The ambiance is inviting and the food is out of this world. Every dish we tried was flavorful and beautifully presented. The staff made us feel welcome and provided excellent service. Palais De L'amour is now my favorite restaurant.",
          author: "Sarah Brown",
        },
        {
          id: 9,
          star: <FaStar />,
          review:
            "I had the pleasure of dining at Palais De L'amour last weekend and it was fantastic. The atmosphere is serene and the food is simply divine. The staff are very attentive and the service is outstanding. I highly recommend this restaurant to anyone.",
          author: "Anil Sharma",
        },
        {
          id: 10,
          star: <FaStar />,
          review:
            "An extraordinary dining experience! The ambiance is perfect for a romantic evening, and the food is delicious beyond words. The staff is courteous and ensures you have a great time. Palais De L'amour is a must-visit for anyone who loves good food and great service.",
          author: "Jessica Williams",
        },
      ].map((rev, i) => (
        <div className="review" key={i}>
          <p >{rev.star}</p>
          <p>{rev.review}</p>
          <p>{rev.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Reveiws;
