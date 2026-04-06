export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__content">
          <span className="badge">Mastermind Electricals & Electronics</span>
          <h1>Your trusted plug for electricals and electronics.</h1>
          <p>
            We supply quality electrical materials, electronics, accessories,
            lighting solutions and dependable customer service for homes,
            businesses and projects.
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
        <h2>What we offer</h2>
        <div className="grid">
          <article className="card">
            <h3>Electrical Supplies</h3>
            <p>
              Cables, sockets, switches, breakers, fittings, conduits and more.
            </p>
          </article>

          <article className="card">
            <h3>Electronics</h3>
            <p>
              Selected electronics and accessories for home and business use.
            </p>
          </article>

          <article className="card">
            <h3>Reliable Service</h3>
            <p>
              Fast response, smooth ordering and support you can count on.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Why Mastermind</h2>
        <div className="grid">
          <article className="card">
            <h3>Trusted Quality</h3>
            <p>
              Products chosen to serve both everyday buyers and serious project
              needs.
            </p>
          </article>

          <article className="card">
            <h3>Fair Pricing</h3>
            <p>
              Competitive pricing with room for future online and in-store
              offers.
            </p>
          </article>

          <article className="card">
            <h3>Growing Platform</h3>
            <p>
              Customer storefront, admin control and POS all working together.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
