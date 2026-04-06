export default function HomePage() {

  const products = [
    {
      id: "1",
      name: "Extension Cable",
      code: "MM-001",
      price: 850
    },
    {
      id: "2",
      name: "LED Flood Light",
      code: "MM-002",
      price: 2500
    },
    {
      id: "3",
      name: "Wall Socket",
      code: "MM-003",
      price: 350
    },
    {
      id: "4",
      name: "Circuit Breaker",
      code: "MM-004",
      price: 1100
    }
  ];

  return (
    <main className="page">

      <section className="hero">
        <div className="hero__content">

          <span className="badge">
            Mastermind Electricals & Electronics
          </span>

          <h1>
            Your trusted plug for electricals and electronics.
          </h1>

          <p>
            We supply quality electrical materials, electronics,
            accessories, lighting solutions and dependable service
            for homes, businesses and projects.
          </p>

        </div>
      </section>

      <section className="section">

        <h2>Featured Products</h2>

        <div className="grid">

          {products.map((product) => (

            <article
              key={product.id}
              className="card"
            >

              <h3>{product.name}</h3>

              <p>Code: {product.code}</p>

              <p>KES {product.price}</p>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}
