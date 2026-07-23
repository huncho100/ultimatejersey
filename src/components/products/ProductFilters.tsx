import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  RotateCcw,
} from "lucide-react";

interface ProductFiltersProps {
  open: boolean;

  // Category
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;

  // League
  selectedLeagues: string[];
  onLeagueChange: (league: string) => void;

  // Brand
  selectedBrands: string[];
  onBrandChange: (brand: string) => void;

  // Price
  maxPrice: number;
  onPriceChange: (price: number) => void;

  // Reset
  onReset: () => void;
}

export default function ProductFilters({
  open,
  selectedCategories,
  onCategoryChange,
  selectedLeagues,
  onLeagueChange,
  selectedBrands,
  onBrandChange,
  maxPrice,
  onPriceChange,
  onReset,
}: ProductFiltersProps) {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [leagueOpen, setLeagueOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const categories = [
    "Home",
    "Away",
    "Third Kit",
    "Player Edition",
  ];

  const leagues = [
    "Premier League",
    "La Liga",
    "NBA",
  ];

  const brands = [
    "Nike",
    "Adidas",
    "Puma",
  ];

  return (
    <aside
      className={`
        overflow-hidden
        transition-all
        duration-300
        ${open ? "w-72 opacity-100" : "w-0 opacity-0"}
      `}
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Filters
          </h2>

          <button
            onClick={onReset}
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <RotateCcw size={16} />
            Reset
          </button>

        </div>

        {/* CATEGORY */}

        <section className="border-b py-4">

          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="flex w-full items-center justify-between font-semibold"
          >
            Category

            {categoryOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}

          </button>

          {categoryOpen && (

            <div className="mt-4 space-y-3">

              {categories.map((item) => (

                <label
                  key={item}
                  className="flex items-center gap-3 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(item)}
                    onChange={() => onCategoryChange(item)}
                    className="h-4 w-4 rounded accent-blue-600"
                  />

                  {item}

                </label>

              ))}

            </div>

          )}

        </section>

        {/* LEAGUE */}

        <section className="border-b py-4">

          <button
            onClick={() => setLeagueOpen(!leagueOpen)}
            className="flex w-full items-center justify-between font-semibold"
          >
            League

            {leagueOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}

          </button>

          {leagueOpen && (

            <div className="mt-4 space-y-3">

              {leagues.map((league) => (

                <label
                  key={league}
                  className="flex items-center gap-3 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedLeagues.includes(league)}
                    onChange={() => onLeagueChange(league)}
                    className="h-4 w-4 rounded accent-blue-600"
                  />

                  {league}

                </label>

              ))}

            </div>

          )}

        </section>

        {/* BRAND */}

        <section className="border-b py-4">

          <button
            onClick={() => setBrandOpen(!brandOpen)}
            className="flex w-full items-center justify-between font-semibold"
          >
            Brand

            {brandOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}

          </button>

          {brandOpen && (

            <div className="mt-4 space-y-3">

              {brands.map((brand) => (

                <label
                  key={brand}
                  className="flex items-center gap-3 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => onBrandChange(brand)}
                    className="h-4 w-4 rounded accent-blue-600"
                  />

                  {brand}

                </label>

              ))}

            </div>

          )}

        </section>

        {/* PRICE */}

        <section className="pt-4">

          <button
            onClick={() => setPriceOpen(!priceOpen)}
            className="mb-4 flex w-full items-center justify-between font-semibold"
          >
            Price

            {priceOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}

          </button>

          {priceOpen && (

            <>
              <input
                type="range"
                min={50}
                max={250}
                step={10}
                value={maxPrice}
                onChange={(e) =>
                  onPriceChange(Number(e.target.value))
                }
                className="w-full accent-blue-600"
              />

              <div className="mt-3 flex justify-between text-sm text-slate-500">
                <span>$50</span>
                <span>${maxPrice}</span>
              </div>
            </>

          )}

        </section>

      </div>
    </aside>
  );
}