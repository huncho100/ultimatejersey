import type { Product } from "../../types/product";
import ProductCard from "../products/ProductCard";

interface ClubGridProps {
  products: Product[];
}

export default function ClubGrid({
  products,
}: ClubGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
        <h3 className="text-2xl font-bold text-slate-700">
          No jerseys found
        </h3>

        <p className="mt-3 text-slate-500">
          Try searching for another club or player.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}