import {
  Heart,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

import Button from "../ui/Button";

interface ProductActionsProps {
  disabled?: boolean;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  onWishlist?: () => void;
}

export default function ProductActions({
  disabled = false,
  onAddToCart,
  onBuyNow,
  onWishlist,
}: ProductActionsProps) {
  return (
    <div className="space-y-3">

      {/* Add to Cart */}

      <Button
        size="sm"
        className="
          flex
          w-half
          md:w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          py-2
          text-base
        "
        disabled={disabled}
        onClick={onAddToCart}
      >
        <ShoppingCart size={18} />
        Add to Cart
      </Button>

      {/* Buy Now */}

      <Button
        variant="outline"
        size="sm"
        className="
          flex
          w-half
          md:w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          py-2
          text-base
        "
        disabled={disabled}
        onClick={onBuyNow}
      >
        <CreditCard size={18} />
        Buy Now
      </Button>

      {/* Wishlist */}

      <button
        type="button"
        onClick={onWishlist}
        className="
          flex
          w-half
          md:w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-slate-300
          bg-white
          py-2
          text-base
          font-medium
          text-slate-700
          transition-colors
          hover:border-red-500
          hover:text-red-500
        "
      >
        <Heart size={18} />
        Add to Wishlist
      </button>

    </div>
  );
}