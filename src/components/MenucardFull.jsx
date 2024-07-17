import React from "react";
import { FaCircle, FaRupeeSign } from "react-icons/fa";

function MenucardFull() {
  return (
    <div className="menucard">
      {[
        {
          category: "Chinese",
          dishes: [
            { name: "Momos", price: "240", category: "veg" },
            { name: "Chow Mein", price: "260", category: "non-veg" },
            { name: "Sweet and Sour Tofu", price: "280", category: "veg" },
            { name: "Kung Pao Chicken", price: "300", category: "non-veg" },
            { name: "Spring Rolls", price: "200", category: "veg" },
            { name: "Peking Duck", price: "500", category: "non-veg" },
            { name: "Ma Po Tofu", price: "250", category: "veg" },
            { name: "Dim Sum", price: "400", category: "non-veg" },
            { name: "Hot and Sour Soup", price: "180", category: "veg" },
            { name: "Szechuan Beef", price: "350", category: "non-veg" },
            {
              name: "General Tso's Chicken",
              price: "320",
              category: "non-veg",
            },
            { name: "Egg Fried Rice", price: "220", category: "veg" },
            { name: "Beef and Broccoli", price: "340", category: "non-veg" },
            { name: "Wonton Soup", price: "200", category: "non-veg" },
            { name: "Lo Mein", price: "260", category: "veg" },
          ],
        },
        {
          category: "Italian",
          dishes: [
            { name: "Margherita Pizza", price: "350", category: "veg" },
            { name: "Pepperoni Pizza", price: "450", category: "non-veg" },
            { name: "Pasta Alfredo", price: "300", category: "veg" },
            { name: "Pasta Carbonara", price: "400", category: "non-veg" },
            { name: "Bruschetta", price: "180", category: "veg" },
            { name: "Lasagna", price: "380", category: "non-veg" },
            { name: "Fettuccine Alfredo", price: "320", category: "veg" },
            { name: "Spaghetti Bolognese", price: "360", category: "non-veg" },
            { name: "Caprese Salad", price: "220", category: "veg" },
            { name: "Risotto", price: "340", category: "veg" },
            { name: "Minestrone Soup", price: "200", category: "veg" },
            { name: "Chicken Parmigiana", price: "420", category: "non-veg" },
            { name: "Gnocchi", price: "300", category: "veg" },
            { name: "Panzanella", price: "180", category: "veg" },
            { name: "Tiramisu", price: "240", category: "veg" },
          ],
        },
        {
          category: "French",
          dishes: [
            { name: "Ratatouille", price: "320", category: "veg" },
            { name: "Coq au Vin", price: "550", category: "non-veg" },
            { name: "Croissants", price: "180", category: "veg" },
            { name: "Quiche Lorraine", price: "400", category: "non-veg" },
            { name: "Beef Bourguignon", price: "600", category: "non-veg" },
            { name: "Bouillabaisse", price: "450", category: "non-veg" },
            { name: "Nicoise Salad", price: "250", category: "veg" },
            { name: "Crepes", price: "200", category: "veg" },
            { name: "French Onion Soup", price: "220", category: "veg" },
            { name: "Duck Confit", price: "580", category: "non-veg" },
            { name: "Escargots", price: "400", category: "non-veg" },
            { name: "Tarte Tatin", price: "260", category: "veg" },
            { name: "Cassoulet", price: "480", category: "non-veg" },
            { name: "Baguette", price: "150", category: "veg" },
            { name: "Cheese Souffle", price: "300", category: "veg" },
          ],
        },
        {
          category: "Indian",
          dishes: [
            { name: "Paneer Butter Masala", price: "280", category: "veg" },
            { name: "Chicken Biryani", price: "350", category: "non-veg" },
            { name: "Aloo Gobi", price: "220", category: "veg" },
            { name: "Lamb Rogan Josh", price: "400", category: "non-veg" },
            { name: "Daal Tadka", price: "200", category: "veg" },
            { name: "Chole Bhature", price: "240", category: "veg" },
            { name: "Fish Curry", price: "380", category: "non-veg" },
            { name: "Butter Chicken", price: "340", category: "non-veg" },
            { name: "Palak Paneer", price: "260", category: "veg" },
            { name: "Masala Dosa", price: "180", category: "veg" },
            { name: "Mutton Korma", price: "420", category: "non-veg" },
            { name: "Bhel Puri", price: "160", category: "veg" },
            { name: "Tandoori Chicken", price: "360", category: "non-veg" },
            { name: "Pav Bhaji", price: "220", category: "veg" },
            { name: "Gulab Jamun", price: "140", category: "veg" },
          ],
        },
        {
          category: "Mexican",
          dishes: [
            { name: "Vegetarian Tacos", price: "200", category: "veg" },
            { name: "Chicken Quesadilla", price: "250", category: "non-veg" },
            { name: "Guacamole", price: "150", category: "veg" },
            { name: "Beef Burrito", price: "300", category: "non-veg" },
            { name: "Enchiladas", price: "280", category: "non-veg" },
            { name: "Chiles Rellenos", price: "260", category: "veg" },
            { name: "Fajitas", price: "320", category: "non-veg" },
            { name: "Tostadas", price: "200", category: "veg" },
            { name: "Carnitas", price: "350", category: "non-veg" },
            { name: "Salsa", price: "120", category: "veg" },
            { name: "Chicken Tamales", price: "270", category: "non-veg" },
            { name: "Pico de Gallo", price: "100", category: "veg" },
            { name: "Fish Tacos", price: "320", category: "non-veg" },
            { name: "Black Bean Soup", price: "180", category: "veg" },
            { name: "Churros", price: "140", category: "veg" },
          ],
        },
        {
          category: "American",
          dishes: [
            { name: "Cheeseburger", price: "250", category: "non-veg" },
            { name: "Mac and Cheese", price: "220", category: "veg" },
            { name: "Buffalo Wings", price: "300", category: "non-veg" },
            { name: "Caesar Salad", price: "200", category: "veg" },
            { name: "BBQ Ribs", price: "500", category: "non-veg" },
            { name: "Clam Chowder", price: "280", category: "non-veg" },
            { name: "Grilled Cheese Sandwich", price: "180", category: "veg" },
            { name: "Philly Cheesesteak", price: "350", category: "non-veg" },
            { name: "Apple Pie", price: "160", category: "veg" },
            { name: "Cornbread", price: "150", category: "veg" },
            { name: "Jambalaya", price: "400", category: "non-veg" },
            { name: "Chicken Fried Steak", price: "380", category: "non-veg" },
            { name: "Pancakes", price: "200", category: "veg" },
            { name: "Meatloaf", price: "340", category: "non-veg" },
            { name: "Coleslaw", price: "120", category: "veg" },
          ],
        },
      ].map((cat, CI) => (
        <div className="card" key={CI}>
          <h1>{cat.category}</h1>
          <ul>
            {cat.dishes.map((dis, dI) => (
              <li key={dI}>
                {
                  <>
                    {" "}
                    <span>{dis.name} </span>
                    <span>
                      <FaRupeeSign />
                      {dis.price}
                    </span>{" "}
                    <span className={`cat ${dis.category}`}>
                      <b>
                        <FaCircle />
                      </b>
                    </span>{" "}
                  </>
                }
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MenucardFull;
