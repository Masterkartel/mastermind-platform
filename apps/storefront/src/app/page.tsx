import { getProducts } from "../lib/api";

export default async function HomePage() {
  let data: any = null;
  let error = "";

  try {
    data = await getProducts();
  } catch (e: any) {
    error = e?.message || "Failed to load products";
  }

  const products = Array.isArray(data)
    ? data
    : data?.data || data?.products || [];

  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Mastermind Electricals & Electronics</h1>
      <p>Modern storefront connected to Bagisto</p>

      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : null}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {products.length > 0 ? (
          products.map((product: any) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <h3>{product.name || product.title || "Unnamed Product"}</h3>
              <p>SKU: {product.sku || "-"}</p>
              <p>Price: {product.price || product.formatted_price || "-"}</p>
            </div>
          ))
        ) : (
          <p>No products yet.</p>
        )}
      </div>
    </main>
  );
}
