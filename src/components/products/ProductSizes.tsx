import { useEffect, useState } from "react";

interface ProductSizesProps {
  sizes?: string[];
  onSizeChange?: (size: string) => void;
}

export default function ProductSizes({
  sizes = [],
  onSizeChange,
}: ProductSizesProps) {
  const [selectedSize, setSelectedSize] = useState(
    sizes[0] ?? ""
  );

  useEffect(() => {
    if (sizes.length > 0) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes]);

  function handleSelect(size: string) {
    setSelectedSize(size);
    onSizeChange?.(size);
  }

  if (sizes.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <h3 className="text-base font-semibold text-slate-900">
          Select Size
        </h3>

        <button
          type="button"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Size Guide
        </button>

      </div>

      <div className="flex flex-wrap gap-2">

        {sizes.map((size) => {
          const selected = selectedSize === size;

          return (
            <button
              key={size}
              type="button"
              onClick={() => handleSelect(size)}
              className={`
                h-10
                w-10
                rounded-lg
                border
                text-sm
                font-semibold
                transition-all
                duration-200

                ${
                  selected
                    ? "border-blue-600 bg-blue-600 text-white shadow-md"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                }
              `}
            >
              {size}
            </button>
          );
        })}

      </div>

    </div>
  );
}