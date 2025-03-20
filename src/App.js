import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h1>E-commerce Store</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={product.image} alt={product.name} width="100" />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
