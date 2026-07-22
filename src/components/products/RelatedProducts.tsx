import { Link } from "react-router-dom";

import type { Product } from "../../types/product";

import ProductCard from "../products/ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({
  products,
}: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            You May Also Like
          </h2>

          <p className="mt-2 text-slate-600">
            Discover more official jerseys.
          </p>
        </div>

        <Link
          to="/products"
          className="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View All →
        </Link>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}