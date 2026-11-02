function Navbar({ products }) {
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 5).length;
  const outOfStock = products.filter((p) => p.stock === 0).length;

  return (
    <header className="navbar">
      <h1>📦 Product & Inventory Dashboard</h1>
      <div className="summary">
        <div className="summary-item">
          <span>{totalProducts}</span> Products
        </div>
        <div className="summary-item">
          <span>{totalStock}</span> Total Stock
        </div>
        <div className="summary-item warning">
          <span>{lowStock}</span> Low Stock
        </div>
        <div className="summary-item danger">
          <span>{outOfStock}</span> Out of Stock
        </div>
      </div>
    </header>
  );
}

export default Navbar;
