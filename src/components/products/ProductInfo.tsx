import { Star, Trophy, Shirt, Tag } from "lucide-react";

import ProductPrice from "./ProductPrice";
import ProductSizes from "./ProductSizes";
import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";

import type { Product } from "../../types/product";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div className="space-y-4">

      {/* Product Header */}

      <div>

        <h1 className="text-3xl font-extrabold leading-tight text-slate-900">
          {product.team}{" "}
          <span className="font-semibold text-slate-600">
            {product.name}
          </span>
        </h1>

        <div className="mt-2 flex items-center gap-2">

          <Star
            size={16}
            fill="currentColor"
            className="text-amber-500"
          />

          <span className="text-sm font-semibold text-slate-700">
            {product.rating}
          </span>

        </div>

      </div>

      {/* Product Badges */}

      <div className="flex flex-wrap gap-2">

        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
          ⚽ {product.sport}
        </span>

        {product.league && (
          <span className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <Trophy size={14} />
            {product.league}
          </span>
        )}

        {product.brand && (
          <span className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
            <Shirt size={14} />
            {product.brand}
          </span>
        )}

        <span className="flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
          <Tag size={14} />
          {product.category}
        </span>

      </div>

      <ProductPrice
        price={product.price}
        oldPrice={product.oldPrice}
      />

      <ProductSizes
        sizes={product.sizes}
      />

      <QuantitySelector />

      <ProductActions />

    </div>
  );
}