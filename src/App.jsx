import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";

const initialProducts = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 1500, stock: 25 },
  { id: 2, name: "Notebook A4", category: "Stationery", price: 250, stock: 3 },
  { id: 3, name: "Office Chair", category: "Furniture", price: 18000, stock: 8 },
  { id: 4, name: "USB Keyboard", category: "Electronics", price: 2200, stock: 0 },
  { id: 5, name: "Desk Lamp", category: "Furniture", price: 3500, stock: 12 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase().trim();
    return (
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="app">
      <Navbar products={products} />
      <main className="container">
        <AddProductForm onAddProduct={addProduct} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProductList products={filteredProducts} onDelete={deleteProduct} />
      </main>
    </div>
  );
}

export default App;
