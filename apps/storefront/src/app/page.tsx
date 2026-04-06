import { getProducts } from "@/lib/products";

export default async function HomePage() {
  const data = await getProducts();

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
        </div>
      </section>

      <section className="section">
        <h2>Live Products</h2>
        <div className="grid">
          {data.products.map((product) => (
            <article className="card" key={product.id || product.code}>
              <h3>{product.name || product.title}</h3>
              <p>Code: {product.code || "-"}</p>
              <p>Price: KES {product.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
