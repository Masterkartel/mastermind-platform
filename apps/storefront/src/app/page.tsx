import { getProducts } from "@/src/lib/api";

export default async function HomePage() {
  let products: any[] = [];

  try {
    const response = await getProducts({ page: 1, limit: 12 });
    products = response.data || [];
  } catch (error) {
    console.error("Failed to load products:", error);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mastermind Storefront</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-xl p-4">
              <h2 className="font-semibold">{product.name}</h2>

              <p className="text-sm opacity-70">{product.sku || "No SKU"}</p>

              <p className="mt-2 font-bold">
                {product.formatted_special_price ||
                  product.formatted_price ||
                  product.special_price ||
                  product.price ||
                  "No price"}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
