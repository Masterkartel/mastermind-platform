import { getProducts } from "@/src/lib/api";

export default async function HomePage() {
  let items: any[] = [];

  try {
    const result = await getProducts({ page: 1, limit: 12 });
    items = result.data || result.products || [];
  } catch (error) {
    console.error("Failed to load products:", error);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mastermind Storefront</h1>

      {items.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((product) => (
            <div key={product.id} className="border rounded-xl p-4">
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm opacity-70">{product.sku}</p>
              <p className="mt-2 font-bold">
                {product.special_price || product.price || "Price unavailable"}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
