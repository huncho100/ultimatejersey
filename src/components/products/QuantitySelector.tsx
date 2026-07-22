import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity?: number;
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({
  initialQuantity = 1,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function increase() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange?.(newQuantity);
  }

  function decrease() {
    if (quantity === 1) return;

    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    onChange?.(newQuantity);
  }

  return (
    <div className="space-y-2">

      <h3 className="text-base font-semibold text-slate-900">
        Quantity
      </h3>

      <div
        className="
          flex
          w-fit
          items-center
          overflow-hidden
          rounded-xl
          border
          border-slate-300
          bg-white
          shadow-sm
        "
      >

        <button
          type="button"
          onClick={decrease}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            transition
            hover:bg-slate-100
          "
        >
          <Minus size={18} />
        </button>

        <div
          className="
            flex
            h-11
            w-14
            items-center
            justify-center
            border-x
            border-slate-300
            text-base
            font-bold
          "
        >
          {quantity}
        </div>

        <button
          type="button"
          onClick={increase}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            transition
            hover:bg-slate-100
          "
        >
          <Plus size={18} />
        </button>

      </div>

    </div>
  );
}