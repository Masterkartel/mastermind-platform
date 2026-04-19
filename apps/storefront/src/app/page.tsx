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
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-zinc-900 to-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-400">
            Trusted in Sotik
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Mastermind Electricals & Electronics
          </h1>

          <p className="mt-5 max-w-2xl text-base text-zinc-300 md:text-lg">
            Quality electronics, lighting and accessories for home and business.
            Shop trusted products with a modern storefront connected to your
            commerce backend.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-xl bg-amber-400 px-5 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Shop Products
            </a>

            <a
              href="http://127.0.0.1:8000/admin"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Open Admin
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-zinc-400">Category</p>
              <h3 className="mt-2 text-lg font-semibold">Lighting</h3>
              <p className="mt-2 text-sm text-zinc-300">
                LED bulbs, flood lights, security lighting and fittings.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-zinc-400">Category</p>
              <h3 className="mt-2 text-lg font-semibold">Electronics</h3>
              <p className="mt-2 text-sm text-zinc-300">
                TVs, accessories, power solutions and home electronics.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-zinc-400">Category</p>
              <h3 className="mt-2 text-lg font-semibold">Accessories</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Cables, sockets, extensions, chargers and everyday essentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Featured Products
            </p>
            <h2 className="mt-2 text-3xl font-bold">Shop Inventory</h2>
          </div>

          <p className="text-sm text-zinc-400">
            {products.length} product{products.length === 1 ? "" : "s"} loaded
          </p>
        </div>

        {products.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-8 text-zinc-300">
            No products yet. Add products in Bagisto admin and they will appear
            here.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const price =
                product.formatted_special_price ||
                product.formatted_price ||
                product?.price_range?.minimum_price?.final_price
                  ?.formatted_price ||
                product?.price_range?.minimum_price?.regular_price
                  ?.formatted_price ||
                product.price ||
                "-";

              const oldPrice =
                product?.price_range?.minimum_price?.regular_price
                  ?.formatted_price || null;

              const image =
                product?.images?.[0]?.medium_image_url ||
                product?.images?.[0]?.large_image_url ||
                product?.images?.[0]?.small_image_url ||
                product?.images?.[0]?.url ||
                null;

              const sku = product.sku || "-";

              return (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/10"
                >
                  <div className="flex aspect-square items-center justify-center bg-white">
                    {image ? (
                      <img
                        src={image}
                        alt={product.name}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div className="text-sm text-zinc-500">No image</div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="line-clamp-2 text-lg font-semibold">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">SKU: {sku}</p>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-lg font-bold text-amber-400">
                        {price}
                      </span>

                      {oldPrice && oldPrice !== price ? (
                        <span className="text-sm text-zinc-500 line-through">
                          {oldPrice}
                        </span>
                      ) : null}
                    </div>

                    <button className="mt-5 w-full rounded-xl bg-amber-400 px-4 py-3 font-semibold text-black transition hover:bg-amber-300">
                      View Product
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
