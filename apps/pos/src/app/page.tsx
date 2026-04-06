const products = [
  { name: "Extension Cable", code: "MM-001", price: "KES 850" },
  { name: "LED Flood Light", code: "MM-002", price: "KES 2,500" },
  { name: "Wall Socket", code: "MM-003", price: "KES 350" },
  { name: "Circuit Breaker", code: "MM-004", price: "KES 1,100" },
  { name: "Phone Charger", code: "MM-005", price: "KES 1,200" },
  { name: "TV Bracket", code: "MM-006", price: "KES 2,200" }
];

const cartItems = [
  { name: "Extension Cable", qty: 1, price: "KES 850" },
  { name: "Wall Socket", qty: 2, price: "KES 700" }
];

export default function PosHomePage() {
  return (
    <main className="pos-page">
      <header className="pos-header">
        <div>
          <span className="badge">Mastermind POS</span>
          <h1>Point of Sale</h1>
          <p>Fast retail billing for the shop floor, quotations and receipts.</p>
        </div>

        <div className="header-actions">
          <a href="/held-sales" className="btn btn--ghost">
            Held Sales
          </a>
          <a href="/quotations" className="btn btn--ghost">
            Quotations
          </a>
          <a href="/end-of-day" className="btn btn--primary">
            End of Day
          </a>
        </div>
      </header>

      <section className="workspace">
        <div className="catalog-panel">
          <div className="search-card">
            <label htmlFor="search">Search product or code</label>
            <input
              id="search"
              type="text"
              placeholder="Type product name or code..."
            />
          </div>

          <div className="section-head">
            <h2>Quick Products</h2>
            <p>Tap an item to add it into the cart later.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.code}>
                <span className="code">{product.code}</span>
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
                <button className="btn btn--primary" type="button">
                  Add
                </button>
              </article>
            ))}
          </div>
        </div>

        <aside className="cart-panel">
          <div className="cart-head">
            <div>
              <span className="cart-label">Current Sale</span>
              <h2>Cart</h2>
            </div>
            <button className="btn btn--ghost" type="button">
              Clear
            </button>
          </div>

          <div className="cart-items">
            {cartItems.map((item, index) => (
              <article className="cart-item" key={`${item.name}-${index}`}>
                <div>
                  <h3>{item.name}</h3>
                  <p>Qty: {item.qty}</p>
                </div>
                <strong>{item.price}</strong>
              </article>
            ))}
          </div>

          <div className="summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>KES 1,550</strong>
            </div>
            <div className="summary-row">
              <span>Discount</span>
              <strong>KES 0</strong>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <strong>KES 1,550</strong>
            </div>
          </div>

          <div className="payment-box">
            <h3>Payment</h3>
            <div className="payment-actions">
              <button className="btn btn--primary" type="button">
                Cash
              </button>
              <button className="btn btn--ghost" type="button">
                Paystack
              </button>
              <button className="btn btn--ghost" type="button">
                Hold Sale
              </button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
