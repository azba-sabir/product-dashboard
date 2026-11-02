function ProductCard({ product, onDelete }) {
  const { id, name, category, price, stock } = product;

  let status = "In Stock";
  let statusClass = "in-stock";
  if (stock === 0) {
    status = "Out of Stock";
    statusClass = "out-of-stock";
  } else if (stock <= 5) {
    status = "Low Stock";
    statusClass = "low-stock";
  }

  return (
    <div className="card">
      <span className="category-tag">{category}</span>
      <h3>{name}</h3>
      <p className="price">Rs {price.toLocaleString()}</p>
      <p>Stock: {stock}</p>
      <span className={`status ${statusClass}`}>{status}</span>
      <button className="btn-delete" onClick={() => onDelete(id)}>
        🗑 Delete
      </button>
    </div>
  );
}

export default ProductCard;
