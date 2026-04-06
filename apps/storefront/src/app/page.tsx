import { brand } from "@mastermind/theme";

const featuredProducts = [
  {
    id: "1",
    name: "Extension Cable",
    code: "MM-001",
    price: 850,
    category: "Electrical Supplies"
  },
  {
    id: "2",
    name: "LED Flood Light",
    code: "MM-002",
    price: 2500,
    category: "Lighting"
  },
  {
    id: "3",
    name: "Wall Socket",
    code: "MM-003",
    price: 350,
    category: "Electrical Supplies"
  },
  {
    id: "4",
    name: "Circuit Breaker",
    code: "MM-004",
    price: 1100,
    category: "Protection"
  }
];

const services = [
  {
    title: "Electrical Supplies",
    text: "Cables, sockets, switches, breakers, conduits, fittings and installation essentials."
  },
  {
    title: "Electronics",
    text: "Quality electronics and accessories selected for home, office and project use."
  },
  {
    title: "Lighting Solutions",
    text: "Reliable indoor and outdoor lighting products for everyday and professional needs."
  }
];

const strengths = [
  {
    title: "Trusted Quality",
    text: "Products selected for practical reliability and daily use."
  },
  {
    title: "Dependable Service",
    text: "Fast support, smooth ordering and a customer-first approach."
  },
  {
    title: "Growing Platform",
    text: "Storefront, admin and POS designed to work together as one system."
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container hero__content">
          <span className="badge">{brand.name}</span>
          <h1>{brand.tagline}</h1>
          <p>
            We supply quality electrical materials, electronics, accessories,
            lighting solutions and dependable service for homes, businesses and
            projects.
          </p>

          <div className="hero__actions">
            <a href="/shop" className="btn btn--primary">
              Shop Now
            </a>
            <a href="/contact" className="btn btn--ghost">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Featured</span>
            <h2>Top products</h2>
            <p>Clean, simple and ready for your real catalog later.</p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article key={product.id} className="card product-card">
                <span className="code">{product.code}</span>
                <h3>{product.name}</h3>
                <p className="muted">{product.category}</p>
                <strong>KES {product.price}</strong>
                <button className="btn btn--primary" type="button">
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we offer</span>
            <h2>Built for real shop needs</h2>
          </div>

          <div className="grid-three">
            {services.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Mastermind</span>
            <h2>Professional, practical and trusted</h2>
          </div>

          <div className="grid-three">
            {strengths.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
