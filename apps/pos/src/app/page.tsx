"use client";

import { useMemo, useState } from "react";

const products = [
  { id: "1", name: "Extension Cable", code: "MM-001", price: 850 },
  { id: "2", name: "LED Flood Light", code: "MM-002", price: 2500 },
  { id: "3", name: "Wall Socket", code: "MM-003", price: 350 },
  { id: "4", name: "Circuit Breaker", code: "MM-004", price: 1100 },
  { id: "5", name: "Phone Charger", code: "MM-005", price: 1200 },
  { id: "6", name: "TV Bracket", code: "MM-006", price: 2200 }
];

export default function PosPage() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});

  const visibleProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) =>
      `${p.name} ${p.code}`.toLowerCase().includes(q)
    );
  }, [search]);

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({
          product: products.find((p) => p.id === id),
          qty
        }))
        .filter((item) => item.product),
    [cart]
  ) as { product: (typeof products)[number]; qty: number }[];

  const total = useMemo(
    () => cartItems.reduce((sum, line) => sum + line.product.price * line.qty, 0),
    [cartItems]
  );

  function add(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }

  function minus(id: string) {
    setCart((prev) => {
      const next = { ...prev };
      const current = next[id] || 0;
      if (current <= 1) delete next[id];
      else next[id] = current - 1;
      return next;
    });
  }

  return (
    <main className="pos-page">
      <header className="pos-header">
        <div>
          <span className="badge">Mastermind POS</span>
          <h1>Point of Sale</h1>
          <p>Fast billing, quotations and payment handling for the shop floor.</p>
        </div>

        <div className="header-actions">
          <button className="btn btn--ghost">Held Sales</button>
          <button className="btn btn--ghost">Quotations</button>
          <button className="btn btn--primary">End of Day</button>
        </div>
      </header>

      <section className="workspace">
        <div className="catalog-panel">
          <div className="search-card">
            <label htmlFor="search">Search product or code</label>
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Type product name or code..."
            />
          </div>

          <div className="section-head">
            <h2>Quick products</h2>
            <p>Tap-ready layout for fast retail sales.</p>
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article key={product.id} className="product-card">
                <span className="code">{product.code}</span>
                <h3>{product.name}</h3>
                <strong>KES {product.price.toLocaleString()}</strong>
                <button className="btn btn--primary" onClick={() => add(product.id)}>
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
            <button className="btn btn--ghost">Clear</button>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-state">No items added yet.</div>
            ) : (
              cartItems.map((item) => (
                <article key={item.product.id} className="cart-item">
                  <div>
                    <h3>{item.product.name}</h3>
                    <p>KES {item.product.price.toLocaleString()}</p>
                  </div>

                  <div className="qty">
                    <button onClick={() => minus(item.product.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => add(item.product.id)}>+</button>
                  </div>
                </article>
              ))
            )}
          </div>

          <div className="summary">
            <div className="summary-row">
              <span>Total</span>
              <strong>KES {total.toLocaleString()}</strong>
            </div>
          </div>

          <div className="payment-box">
            <h3>Payment</h3>
            <div className="payment-actions">
              <button className="btn btn--primary">Cash</button>
              <button className="btn btn--ghost">Credit</button>
              <button className="btn btn--ghost">Wallet</button>
              <button className="btn btn--ghost">Paystack</button>
            </div>
          </div>
        </aside>
      </section>

      <style jsx>{`
        .pos-page {
          min-height: 100vh;
          padding: 24px;
          background:
            radial-gradient(circle at top left, rgba(250, 204, 21, 0.12), transparent 24%),
            #fffdf7;
          color: #111827;
        }

        .pos-header {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .badge,
        .cart-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #facc15;
        }

        .pos-header h1 {
          margin: 10px 0 8px;
          font-size: 2.4rem;
        }

        .pos-header p {
          margin: 0;
          color: #6b7280;
        }

        .header-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .workspace {
          display: grid;
          grid-template-columns: 1.5fr 0.9fr;
          gap: 18px;
          align-items: start;
        }

        .catalog-panel,
        .cart-panel,
        .search-card,
        .product-card {
          background: white;
          border-radius: 22px;
          border: 1px solid rgba(250, 204, 21, 0.22);
          border-top: 4px solid #111827;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }

        .catalog-panel,
        .cart-panel {
          padding: 18px;
        }

        .search-card {
          padding: 18px;
          margin-bottom: 18px;
        }

        .search-card label {
          display: block;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .search-card input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 14px;
          padding: 14px 16px;
          font: inherit;
        }

        .section-head {
          margin-bottom: 16px;
        }

        .section-head h2 {
          margin: 0 0 6px;
        }

        .section-head p {
          margin: 0;
          color: #6b7280;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .product-card {
          padding: 16px;
          display: grid;
          gap: 10px;
        }

        .product-card h3 {
          margin: 0;
          font-size: 1rem;
        }

        .code {
          display: inline-flex;
          width: fit-content;
          background: #111827;
          color: #facc15;
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 800;
        }

        .cart-head {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          margin-bottom: 16px;
        }

        .cart-head h2 {
          margin: 8px 0 0;
        }

        .cart-items {
          display: grid;
          gap: 10px;
        }

        .empty-state {
          color: #6b7280;
          padding: 12px 0;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          padding: 14px;
          border-radius: 16px;
          background: #fffef8;
          border: 1px solid rgba(250, 204, 21, 0.16);
        }

        .cart-item h3,
        .summary-row,
        .payment-box h3 {
          margin: 0;
        }

        .cart-item p {
          margin: 4px 0 0;
          color: #6b7280;
        }

        .qty {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .qty button {
          width: 30px;
          height: 30px;
          border: none;
          border-radius: 10px;
          font-weight: 900;
          cursor: pointer;
          background: #facc15;
          color: #111827;
        }

        .summary {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid #e5e7eb;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .payment-box {
          margin-top: 18px;
        }

        .payment-actions {
          display: grid;
          gap: 10px;
          margin-top: 12px;
        }

        .btn {
          border: none;
          border-radius: 14px;
          padding: 12px 14px;
          font-weight: 800;
          cursor: pointer;
        }

        .btn--primary {
          background: linear-gradient(180deg, #fde047 0%, #facc15 100%);
          color: #111827;
        }

        .btn--ghost {
          background: #111827;
          color: #facc15;
        }

        @media (max-width: 980px) {
          .workspace,
          .product-grid {
            grid-template-columns: 1fr 1fr;
          }

          .workspace {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .pos-page {
            padding: 16px;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }

          .header-actions {
            width: 100%;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
