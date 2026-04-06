const stats = [
  { label: "Today's Sales", value: "KES 0" },
  { label: "Open Orders", value: "0" },
  { label: "Low Stock", value: "0" },
  { label: "Active Clerks", value: "0" }
];

const areas = [
  {
    title: "Products",
    text: "Manage products, pricing, categories and images."
  },
  {
    title: "Inventory",
    text: "Track stock levels, adjustments and low-stock items."
  },
  {
    title: "Orders",
    text: "Review online and in-store orders in one place."
  },
  {
    title: "Users",
    text: "Create admins and clerks with proper access control."
  },
  {
    title: "Reports",
    text: "Monitor daily sales, top products and future profit trends."
  },
  {
    title: "Settings",
    text: "Keep shop details, payments and system preferences organized."
  }
];

export default function AdminPage() {
  return (
    <main className="admin-page">
      <aside className="sidebar">
        <div className="brand-box">
          <span className="badge">Mastermind</span>
          <h1>Admin</h1>
          <p>Professional control center for the whole business.</p>
        </div>

        <nav className="nav">
          <a href="/">Dashboard</a>
          <a href="/products">Products</a>
          <a href="/inventory">Inventory</a>
          <a href="/orders">Orders</a>
          <a href="/customers">Customers</a>
          <a href="/users">Users</a>
          <a href="/reports">Reports</a>
          <a href="/settings">Settings</a>
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <span className="eyebrow">Mastermind Admin</span>
            <h2>Dashboard Overview</h2>
            <p>Built for real shop control, stock flow and growth.</p>
          </div>

          <div className="topbar-actions">
            <a href="/products/new" className="btn btn--primary">
              Add Product
            </a>
            <a href="/users/new" className="btn btn--ghost">
              Add Clerk
            </a>
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
            <p>Everything essential for operations and oversight.</p>
          </div>

          <div className="quick-grid">
            {areas.map((item) => (
              <article key={item.title} className="quick-card">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-grid">
          <article className="panel">
            <div className="panel-head">
              <h3>Recent activity</h3>
              <p>Live updates will appear here after backend connection.</p>
            </div>

            <div className="empty-state">
              No activity yet. Product changes, stock movements and orders will
              show here once the backend is connected.
            </div>
          </article>

          <article className="panel">
            <div className="panel-head">
              <h3>System notes</h3>
              <p>Foundation rules for the platform.</p>
            </div>

            <ul className="notes">
              <li>Products should sync across storefront, admin and POS.</li>
              <li>Inventory should update after every completed sale.</li>
              <li>Roles should separate admin and clerk permissions.</li>
              <li>Reports should support daily, weekly and monthly views.</li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}
