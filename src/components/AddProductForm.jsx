import { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !category.trim() || price === "" || stock === "") {
      setError("Please fill in all fields.");
      return;
    }
    if (Number(price) < 0 || Number(stock) < 0) {
      setError("Price and stock cannot be negative.");
      return;
    }

    onAddProduct({
      name: name.trim(),
      category: category.trim(),
      price: Number(price),
      stock: Number(stock),
    });

    setName("");
    setCategory("");
    setPrice("");
    setStock("");
    setError("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>➕ Add New Product</h2>
      <div className="form-row">
        <input type="text" placeholder="Product name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="number" placeholder="Price (Rs)" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
        <button type="submit" className="btn-add">Add Product</button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default AddProductForm;
