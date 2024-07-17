import React from "react";

function Teams() {
  return (
    <div className="team">
      <div className="heading">Meet Our Staff</div>
      <div className="card">
        {[
          {
            id: 1,
            name: "Rajesh Kumar",
            speciality: "Chinese Cuisine",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            id: 2,
            name: "Anna Green",
            speciality: "Italian Cuisine",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
          },
          {
            id: 3,
            name: "Vikram Singh",
            speciality: "Indian Cuisine",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
          },
          {
            id: 4,
            name: "Laura White",
            speciality: "French Cuisine",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
          },
          {
            id: 5,
            name: "David Brown",
            speciality: "Pastry and Desserts",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
          },
          {
            id: 6,
            name: "Sneha Patel",
            speciality: "Fusion Cuisine",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
          },
          {
            id: 7,
            name: "Mark Taylor",
            speciality: "Grill and BBQ",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
          },
          {
            id: 8,
            name: "Olivia Harris",
            speciality: "Seafood",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
          },
          {
            id: 9,
            name: "Kunal Das",
            speciality: "Japanese Cuisine",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
          },
          {
            id: 10,
            name: "Sophia Wilson",
            speciality: "Mediterranean Cuisine",
            image: "https://randomuser.me/api/portraits/women/5.jpg",
          },
        ].map((te, i) => (
          <div className="tcard" key={i}>
            <div className="picture"><img src={te.image} alt="image" /></div>
            <div className="about">
              <p> {te.name} </p>
              <p>{te.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
