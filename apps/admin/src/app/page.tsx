const stats = [
  { label: "Today's Sales", value: "KES 0" },
  { label: "Open Orders", value: "0" },
  { label: "Low Stock Items", value: "0" },
  { label: "Active Clerks", value: "0" }
];

const quickLinks = [
  {
    title: "Products",
    text: "Add, edit and organize products, categories, pricing and images."
  },
  {
    title: "Inventory",
    text: "Track stock levels, adjustments, low-stock alerts and movements."
  },
  {
    title: "Orders",
    text: "Review online and POS orders, payment status and fulfillment."
  },
  {
    title: "Users",
    text: "Create admins and clerks, manage permissions and activity."
  },
  {
    title: "Reports",
    text: "Monitor sales performance, top items and profit trends."
  },
  {
    title: "Settings",
    text: "Control branding, shop details, payment setup and preferences."
  }
];

export default function AdminHomePage() {
  return (
    <main className="admin-page">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand__badge">Mastermind</span>
          <h1>Admin</h1>
          <p>Control center for products, stock, sales and staff.</p>
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
          </div>
          <div className="topbar__actions">
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
            <article className="stat-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section className="panel">
          <div className="panel__head">
            <h3>Quick Management Areas</h3>
            <p>Everything important in one place.</p>
          </div>

          <div className="quick-grid">
            {quickLinks.map((item) => (
              <article className="quick-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-grid">
          <article className="panel">
            <div className="panel__head">
              <h3>Recent Activity</h3>
              <p>Latest changes will appear here later.</p>
            </div>
            <div className="empty-state">
              No activity yet. Once products, orders and sales are live, this
              panel will update automatically.
            </div>
          </article>

          <article className="panel">
            <div className="panel__head">
              <h3>System Notes</h3>
              <p>Important reminders for the shop.</p>
            </div>
            <ul className="notes">
              <li>Products will sync across customer, admin and POS.</li>
              <li>Stock changes will reflect automatically after each sale.</li>
              <li>Role-based access will control admin and clerk actions.</li>
              <li>Reports will summarize daily, weekly and monthly performance.</li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}
