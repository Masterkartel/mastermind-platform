"use client";

const stats = [
  { label: "Today's Sales", value: "KES 48,700" },
  { label: "Open Orders", value: "12" },
  { label: "Low Stock", value: "7" },
  { label: "Active Clerks", value: "3" }
];

const recentProducts = [
  {
    name: "Extension Cable",
    category: "Electrical Supplies",
    stock: "18 units",
    price: "KES 850"
  },
  {
    name: "LED Flood Light",
    category: "Lighting",
    stock: "9 units",
    price: "KES 2,500"
  },
  {
    name: "Phone Charger",
    category: "Chargers",
    stock: "22 units",
    price: "KES 1,200"
  }
];

const quickAreas = [
  "Products",
  "Inventory",
  "Orders",
  "Users",
  "Reports",
  "Settings"
];

export default function AdminPage() {
  return (
    <main className="admin-page">
      <aside className="sidebar">
        <div className="brand-box">
          <span className="badge">MASTERMIND</span>
          <h1>Admin</h1>
          <p>Professional control center for Mastermind Electricals &amp; Electronics.</p>
        </div>

        <nav className="nav">
          {quickAreas.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <span className="eyebrow">Mastermind Admin</span>
            <h2>Dashboard Overview</h2>
            <p>Manage products, inventory, clerks, orders and business performance.</p>
          </div>

          <div className="topbar-actions">
            <button className="btn btn--primary">Add Product</button>
            <button className="btn btn--ghost">Add Clerk</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>Quick management areas</h3>
            <p>Fast access to the parts that matter daily.</p>
          </div>

          <div className="quick-grid">
            {quickAreas.map((item) => (
              <article key={item} className="quick-card">
                <h4>{item}</h4>
                <p>Open the {item.toLowerCase()} workflow.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-grid">
          <article className="panel">
            <div className="panel-head">
              <h3>Recent products</h3>
              <p>Latest active catalog items.</p>
            </div>

            <div className="list">
              {recentProducts.map((item) => (
                <div key={item.name} className="list-item">
                  <div>
                    <strong>{item.name}</strong>
                    <p>
                      {item.category} • {item.stock}
                    </p>
                  </div>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-head">
              <h3>System notes</h3>
              <p>Important operational priorities.</p>
            </div>

            <ul className="notes">
              <li>Products should sync across storefront, admin and POS.</li>
              <li>Inventory should reduce automatically after completed POS sales.</li>
              <li>Admin can create or remove clerks.</li>
              <li>Reports should surface top-selling and low-stock items.</li>
            </ul>
          </article>
        </section>
      </section>

      <style jsx>{`
        .admin-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 280px 1fr;
          background:
            radial-gradient(circle at top left, rgba(250, 204, 21, 0.12), transparent 24%),
            #fffdf7;
          color: #111827;
        }

        .sidebar {
          background: linear-gradient(180deg, #111827 0%, #1f2937 100%);
          color: white;
          padding: 24px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .brand-box h1 {
          margin: 10px 0 8px;
          color: #facc15;
        }

        .brand-box p {
          margin: 0;
          color: #d1d5db;
        }

        .badge,
        .eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #facc15;
        }

        .nav {
          margin-top: 28px;
          display: grid;
          gap: 10px;
        }

        .nav a {
          color: #f9fafb;
          text-decoration: none;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
        }

        .content {
          padding: 24px;
          display: grid;
          gap: 18px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .topbar h2 {
          margin: 8px 0 6px;
          font-size: 2rem;
        }

        .topbar p {
          margin: 0;
          color: #6b7280;
        }

        .topbar-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .stat-card,
        .panel,
        .quick-card {
          background: white;
          border-radius: 22px;
          border: 1px solid rgba(250, 204, 21, 0.22);
          border-top: 4px solid #111827;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }

        .stat-card {
          padding: 18px;
          display: grid;
          gap: 10px;
        }

        .stat-card span {
          color: #6b7280;
        }

        .stat-card strong {
          font-size: 1.5rem;
        }

        .panel {
          padding: 20px;
        }

        .panel-head {
          margin-bottom: 16px;
        }

        .panel-head h3 {
          margin: 0 0 6px;
        }

        .panel-head p {
          margin: 0;
          color: #6b7280;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .quick-card {
          padding: 18px;
        }

        .quick-card h4 {
          margin: 0 0 8px;
        }

        .quick-card p {
          margin: 0;
          color: #6b7280;
        }

        .split-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 18px;
        }

        .list {
          display: grid;
          gap: 12px;
        }

        .list-item {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          padding: 14px;
          border-radius: 16px;
          background: #fffef8;
          border: 1px solid rgba(250, 204, 21, 0.14);
        }

        .list-item p,
        .notes {
          margin: 0;
          color: #6b7280;
        }

        .notes {
          padding-left: 18px;
          display: grid;
          gap: 10px;
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
          .admin-page {
            grid-template-columns: 1fr;
          }

          .stats-grid,
          .quick-grid,
          .split-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .content,
          .sidebar {
            padding: 16px;
          }

          .stats-grid,
          .quick-grid,
          .split-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
