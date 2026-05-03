
import "./products.css";
import { useState } from "react";
import axios from "axios";

function Products() {
  const [product, setProduct] = useState({
    id: "",
    product_name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/products/${product.id}`,
        product
      );

      alert("Product Updated Successfully");
    } catch (error) {
      console.log("Update Error:", error);
    }
  };

  return (
    <div className="products">
      <h1>Edit Product</h1>

      <input
        type="text"
        name="id"
        placeholder="Enter Product ID"
        onChange={handleChange}
      />

      <input
        type="text"
        name="product_name"
        placeholder="Product Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
      />

      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        onChange={handleChange}
      />

      <button onClick={handleUpdate}>
        Update Product
      </button>
    </div>
  );
}

export default Products;