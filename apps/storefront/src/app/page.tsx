"use client";

import { useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  code: string;
  category: string;
  price: number;
  image: string;
  stock: number;
};

const products: Product[] = [
  {
    id: "1",
    name: "Extension Cable",
    code: "MM-001",
    category: "Electrical Supplies",
    price: 850,
    image: "https://images.unsplash.com/photo-1581092919535-7146ff1a590d?auto=format&fit=crop&w=800&q=80",
    stock: 18
  },
  {
    id: "2",
    name: "LED Flood Light",
    code: "MM-002",
    category: "Lighting",
    price: 2500,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    stock: 9
  },
  {
    id: "3",
    name: "Wall Socket",
    code: "MM-003",
    category: "Electrical Supplies",
    price: 350,
    image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
    stock: 40
  },
  {
    id: "4",
    name: "Circuit Breaker",
    code: "MM-004",
    category: "Protection",
    price: 1100,
    image: "https://images.unsplash.com/photo-1565373677928-31b2c8b5f2d8?auto=format&fit=crop&w=800&q=80",
    stock: 13
  },
  {
    id: "5",
    name: "Phone Charger",
    code: "MM-005",
    category: "Chargers",
    price: 1200,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    stock: 22
  },
  {
    id: "6",
    name: "TV Bracket",
    code: "MM-006",
    category: "Accessories",
    price: 2200,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    stock: 7
  }
];

const services = [
  "Electrical supplies and wiring accessories",
  "Lighting solutions and fittings",
  "Electronics and home accessories",
  "Satellite support installation",
  "Gas refill support",
  "M-Pesa and payment support"
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((product) =>
      `${product.name} ${product.code} ${product.category}`.toLowerCase().includes(q)
    );
  }, [query]);

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({
          product: products.find((p) => p.id === id),
          qty
        }))
        .filter((item) => item.product),
    [cart]
  ) as { product: Product; qty: number }[];

  const total = useMemo(
    () => cartItems.reduce((sum, line) => sum + line.product.price * line.qty, 0),
    [cartItems]
  );

  function addToCart(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }

  function reduceFromCart(id: string) {
    setCart((prev) => {
      const next = { ...prev };
      const current = next[id] || 0;
      if (current <= 1) delete next[id];
      else next[id] = current - 1;
      return next;
    });
  }

  return (
    <main className="store-page">
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <span className="badge">MASTERMIND ELECTRICALS &amp; ELECTRONICS</span>
          <h1>Quality Electricals, Electronics &amp; Everyday Shop Solutions</h1>
          <p>
            Shop trusted products, place orders online, and enjoy a clean Mastermind
            shopping experience built for real business use.
          </p>

          <div className="hero__actions">
            <a href="#catalog" className="btn btn--primary">
              Shop Now
            </a>
            <a href="#services" className="btn btn--ghost">
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section className="section section--search">
        <div className="container">
          <div className="search-card">
            <div>
              <span className="eyebrow">Search Products</span>
              <h2>Find products fast</h2>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, code or category..."
            />
          </div>
        </div>
      </section>

      <section id="services" className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Built for real shop needs</h2>
            <p>Electricals, electronics, installations, accessories and reliable service.</p>
          </div>

          <div className="service-grid">
            {services.map((item) => (
              <article key={item} className="service-card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="section">
        <div className="container catalog-layout">
          <div>
            <div className="section-head">
              <span className="eyebrow">Catalog</span>
              <h2>Popular products</h2>
            </div>

            <div className="product-grid">
              {filtered.map((product) => (
                <article key={product.id} className="product-card">
                  <div
                    className="product-card__image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="product-card__body">
                    <span className="code">{product.code}</span>
                    <h3>{product.name}</h3>
                    <p className="muted">{product.category}</p>
                    <p className="stock">Stock: {product.stock}</p>
                    <strong>KES {product.price.toLocaleString()}</strong>
                    <button className="btn btn--primary" onClick={() => addToCart(product.id)}>
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="cart-panel">
            <div className="cart-panel__head">
              <span className="eyebrow">Checkout</span>
              <h2>Cart</h2>
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-cart">No items in cart yet.</div>
            ) : (
              <div className="cart-items">
                {cartItems.map((line) => (
                  <article key={line.product.id} className="cart-item">
                    <div>
                      <h3>{line.product.name}</h3>
                      <p>KES {line.product.price.toLocaleString()}</p>
                    </div>

                    <div className="qty">
                      <button onClick={() => reduceFromCart(line.product.id)}>-</button>
                      <span>{line.qty}</span>
                      <button onClick={() => addToCart(line.product.id)}>+</button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="summary">
              <div className="summary-row">
                <span>Total</span>
                <strong>KES {total.toLocaleString()}</strong>
              </div>
            </div>

            <div className="checkout-actions">
              <button className="btn btn--primary">Pay with Paystack</button>
              <button className="btn btn--ghost">Order with M-Pesa</button>
              <button className="btn btn--ghost">Place Order via WhatsApp</button>
            </div>
          </aside>
        </div>
      </section>

      <style jsx>{`
        .store-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(250, 204, 21, 0.12), transparent 24%),
            radial-gradient(circle at bottom right, rgba(17, 24, 39, 0.08), transparent 24%),
            #fffdf7;
          color: #111827;
        }

        .container {
          width: min(1180px, calc(100% - 24px));
          margin: 0 auto;
        }

        .hero {
          position: relative;
          min-height: 72vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #111827 0%, #1f2937 60%, #2c2c2c 100%);
          overflow: hidden;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(250, 204, 21, 0.15), transparent 28%),
            radial-gradient(circle at bottom left, rgba(250, 204, 21, 0.08), transparent 22%);
        }

        .hero__content {
          position: relative;
          z-index: 1;
          color: white;
          padding: 56px 0;
          max-width: 720px;
        }

        .badge,
        .eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #facc15;
        }

        .hero h1 {
          margin: 14px 0 12px;
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 1.08;
        }

        .hero p {
          margin: 0;
          font-size: 1.05rem;
          color: #e5e7eb;
          max-width: 620px;
        }

        .hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .section {
          padding: 56px 0;
        }

        .section--alt {
          background: rgba(255, 255, 255, 0.7);
        }

        .section-head {
          margin-bottom: 22px;
        }

        .section-head h2 {
          margin: 8px 0 6px;
          font-size: 2rem;
        }

        .section-head p {
          margin: 0;
          color: #6b7280;
        }

        .search-card {
          display: grid;
          gap: 12px;
          background: white;
          border: 1px solid rgba(250, 204, 21, 0.28);
          border-top: 4px solid #111827;
          border-radius: 22px;
          padding: 20px;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06);
        }

        .search-card h2 {
          margin: 8px 0 0;
        }

        .search-card input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 14px;
          padding: 14px 16px;
          font: inherit;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          border: 1px solid rgba(250, 204, 21, 0.22);
          border-top: 4px solid #111827;
          padding: 20px;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
        }

        .service-card h3 {
          margin: 0;
          font-size: 1rem;
        }

        .catalog-layout {
          display: grid;
          grid-template-columns: 1.6fr 0.9fr;
          gap: 18px;
          align-items: start;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(250, 204, 21, 0.22);
          border-top: 4px solid #111827;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }

        .product-card__image {
          height: 180px;
          background-size: cover;
          background-position: center;
        }

        .product-card__body {
          padding: 16px;
          display: grid;
          gap: 8px;
        }

        .product-card h3 {
          margin: 0;
        }

        .muted,
        .stock {
          margin: 0;
          color: #6b7280;
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

        .cart-panel {
          position: sticky;
          top: 16px;
          background: linear-gradient(180deg, #111827 0%, #1f2937 100%);
          color: white;
          border-radius: 22px;
          padding: 18px;
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.18);
        }

        .cart-panel__head h2 {
          margin: 8px 0 0;
        }

        .empty-cart {
          padding: 18px 0;
          color: #d1d5db;
        }

        .cart-items {
          display: grid;
          gap: 10px;
          margin-top: 16px;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          padding: 12px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.06);
        }

        .cart-item h3,
        .summary-row {
          margin: 0;
        }

        .cart-item p {
          margin: 4px 0 0;
          color: #d1d5db;
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
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .checkout-actions {
          margin-top: 16px;
          display: grid;
          gap: 10px;
        }

        .btn {
          border: none;
          border-radius: 14px;
          padding: 12px 14px;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn--primary {
          background: linear-gradient(180deg, #fde047 0%, #facc15 100%);
          color: #111827;
        }

        .btn--ghost {
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        @media (max-width: 980px) {
          .catalog-layout,
          .service-grid,
          .product-grid {
            grid-template-columns: 1fr 1fr;
          }

          .catalog-layout {
            grid-template-columns: 1fr;
          }

          .cart-panel {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .hero {
            min-height: auto;
          }

          .section {
            padding: 42px 0;
          }

          .service-grid,
          .product-grid {
            grid-template-columns: 1fr;
          }

          .hero__actions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
