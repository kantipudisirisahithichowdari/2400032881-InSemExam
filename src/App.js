import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Cozy Hoodie",
      price: "₹799",
      shortDesc: "Warm and comfy for chilly days",
      fullDesc: "This hoodie is made from soft, breathable cotton. Perfect for chilly campus evenings or casual hangouts with friends.",
      image: "https://images.unsplash.com/photo-1621597774441-c4e8b41c6d35?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Campus Coffee Mug",
      price: "₹299",
      shortDesc: "Start your day right",
      fullDesc: "Enjoy your favorite beverages in this stylish ceramic mug featuring the university logo. Ideal for early lectures or study sessions.",
      image: "https://images.unsplash.com/photo-1590080871881-ccf2b1a70f96?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Classic Notebook",
      price: "₹149",
      shortDesc: "Jot down your ideas",
      fullDesc: "80 pages of smooth, high-quality paper. Perfect for lecture notes, doodles, or personal journaling.",
      image: "https://images.unsplash.com/photo-1580910051074-824b0f1b1598?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Durable Backpack",
      price: "₹1299",
      shortDesc: "Carry everything with ease",
      fullDesc: "Spacious, lightweight backpack with multiple compartments. Ideal for laptops, books, and daily essentials.",
      image: "https://images.unsplash.com/photo-1571847125787-23ec9f1b5e53?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Eco Water Bottle",
      price: "₹399",
      shortDesc: "Stay hydrated responsibly",
      fullDesc: "Reusable, BPA-free water bottle to keep you hydrated throughout your campus day. Stylish and eco-friendly.",
      image: "https://images.unsplash.com/photo-1598908319853-902d565a6d97?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Colorful Pen Set",
      price: "₹199",
      shortDesc: "Add color to your notes",
      fullDesc: "Pack of 5 gel pens in vibrant colors. Smooth writing, perfect for notes, doodles, or creative projects.",
      image: "https://images.unsplash.com/photo-1581091215367-fd9891fdf330?auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  return (
    <div className="app">
      <h1>Student Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => openPopup(product)}
          >
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.shortDesc}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={closePopup}>
              ✖
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <p>{selectedProduct.fullDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
