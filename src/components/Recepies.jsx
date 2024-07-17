import React from "react";
import { FaCircle } from "react-icons/fa";

function Recepies() {
  return (
    <div className="Recepies">
      <h1>Our Recipes</h1>
      {[
        {
          name: "Kadhai Paneer",
          details:
            "A spicy and flavorful paneer dish made with bell peppers, tomatoes, and a blend of Indian spices. It's a popular vegetarian option in Indian cuisine.",
          origin: "India",
          category: "veg",
          image: "/burger.png",
        },
        {
          name: "Chicken Alfredo",
          details:
            "A rich and creamy pasta dish made with fettuccine pasta, heavy cream, parmesan cheese, and grilled chicken. A classic Italian-American favorite.",
          origin: "Italy",
          category: "non-veg",
          image: "/burger.png",
        },
        {
          name: "Sushi",
          details:
            "A Japanese dish consisting of vinegared rice, raw fish, and vegetables. It's often served with soy sauce, wasabi, and pickled ginger.",
          origin: "Japan",
          category: "non-veg",
          image: "/foodplate.jpg",
        },
        {
          name: "Tacos",
          details:
            "A traditional Mexican dish made with a corn or wheat tortilla folded or rolled around a filling. Common fillings include beef, chicken, pork, and vegetables.",
          origin: "Mexico",
          category: "non-veg",
          image: "/burger.jpg",
        },
        {
          name: "Falafel",
          details:
            "Deep-fried balls or patties made from ground chickpeas, herbs, and spices. Often served in pita bread with vegetables and tahini sauce.",
          origin: "Middle East",
          category: "veg",
          image: "https://example.com/falafel.jpg",
        },
        {
          name: "Margherita Pizza",
          details:
            "A simple yet delicious pizza topped with fresh tomatoes, mozzarella cheese, and basil. It's a staple in Italian cuisine.",
          origin: "Italy",
          category: "veg",
          image: "https://example.com/margherita-pizza.jpg",
        },
        {
          name: "Peking Duck",
          details:
            "A famous Chinese dish known for its crispy skin and tender meat. It's often served with pancakes, hoisin sauce, and green onions.",
          origin: "China",
          category: "non-veg",
          image: "https://example.com/peking-duck.jpg",
        },
        {
          name: "Paella",
          details:
            "A Spanish rice dish originally from Valencia. It includes a variety of seafood, meats, and vegetables, and is seasoned with saffron.",
          origin: "Spain",
          category: "non-veg",
          image: "https://example.com/paella.jpg",
        },
        {
          name: "Baklava",
          details:
            "A sweet dessert made of layers of filo pastry filled with chopped nuts and sweetened with syrup or honey. It's popular in Middle Eastern and Mediterranean cuisines.",
          origin: "Turkey",
          category: "veg",
          image: "https://example.com/baklava.jpg",
        },
        {
          name: "Beef Bourguignon",
          details:
            "A traditional French stew made with beef braised in red wine, along with garlic, onions, mushrooms, and bacon.",
          origin: "France",
          category: "non-veg",
          image: "https://example.com/beef-bourguignon.jpg",
        },
        {
          name: "Pad Thai",
          details:
            "A popular Thai stir-fried noodle dish made with rice noodles, eggs, tofu or shrimp, peanuts, bean sprouts, and a tangy tamarind sauce.",
          origin: "Thailand",
          category: "non-veg",
          image: "https://example.com/pad-thai.jpg",
        },
        {
          name: "Moussaka",
          details:
            "A traditional Greek dish made with layers of eggplant, minced meat, and béchamel sauce. It's baked to perfection and served hot.",
          origin: "Greece",
          category: "non-veg",
          image: "https://example.com/moussaka.jpg",
        },
        {
          name: "Tom Yum Soup",
          details:
            "A hot and sour Thai soup made with shrimp, mushrooms, tomatoes, lemongrass, kaffir lime leaves, and galangal. It's a flavorful and aromatic dish.",
          origin: "Thailand",
          category: "non-veg",
          image: "https://example.com/tom-yum-soup.jpg",
        },
        {
          name: "Gnocchi",
          details:
            "Soft, pillowy dumplings made from potatoes, flour, and eggs. They're often served with a variety of sauces, such as tomato, pesto, or butter and sage.",
          origin: "Italy",
          category: "veg",
          image: "https://example.com/gnocchi.jpg",
        },
        {
          name: "Bibimbap",
          details:
            "A Korean mixed rice dish topped with assorted vegetables, meat (usually beef), a fried egg, and gochujang (chili pepper paste).",
          origin: "Korea",
          category: "non-veg",
          image: "https://example.com/bibimbap.jpg",
        },
      ].map((dish, dI) => (
        <div className="rcard" key={dI}>
          <span className={`${dish.category} cate`}><b><FaCircle /></b></span>
          <div className="rimage">
            <img src="/burger.png" alt="image" />
            {/* <img src={dish.image} alt="image" /> */}
          </div>
          <div className="rdsc">
            <h2>{dish.name}</h2>
            <p>{dish.details}</p>
            <p>Origin of{dish.origin}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recepies;
