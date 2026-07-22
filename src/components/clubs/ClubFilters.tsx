import type { Product } from "../../types/product";
import type { ClubFiltersState } from "../../types/filter";

interface ClubFiltersProps {
  products: Product[];
  filters: ClubFiltersState;
  onChange: (filters: ClubFiltersState) => void;
}

export default function ClubFilters({
  products,
  filters,
  onChange,
}: ClubFiltersProps) {
  const leagues = [...new Set(products.map((p) => p.league).filter(Boolean))] as string[];

  const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))] as string[];

  const categories = [...new Set(products.map((p) => p.category))];

  function toggleFilter(
    section: keyof ClubFiltersState,
    value: string
  ) {
    const exists = filters[section].includes(value);

    onChange({
      ...filters,
      [section]: exists
        ? filters[section].filter((item) => item !== value)
        : [...filters[section], value],
    });
  }

  function clearFilters() {
    onChange({
      leagues: [],
      brands: [],
      categories: [],
    });
  }

  const activeFilters =
    filters.leagues.length +
    filters.brands.length +
    filters.categories.length;

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold">
          Filters
        </h3>

        {activeFilters > 0 && (
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {activeFilters}
          </span>
        )}

      </div>

      {/* League */}

      <section className="mt-8">

        <h4 className="mb-4 font-semibold text-slate-900">
          League
        </h4>

        <div className="flex flex-wrap gap-3">

          {leagues.map((league) => {
            const active = filters.leagues.includes(league);

            return (
              <button
                key={league}
                onClick={() => toggleFilter("leagues", league)}
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "border-blue-600 bg-blue-600 text-white shadow-md"
                      : "border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }
                `}
              >
                {league}
              </button>
            );
          })}

        </div>

      </section>

      {/* Brand */}

      <section className="mt-8">

        <h4 className="mb-4 font-semibold text-slate-900">
          Brand
        </h4>

        <div className="flex flex-wrap gap-3">

          {brands.map((brand) => {
            const active = filters.brands.includes(brand);

            return (
              <button
                key={brand}
                onClick={() => toggleFilter("brands", brand)}
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "border-blue-600 bg-blue-600 text-white shadow-md"
                      : "border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }
                `}
              >
                {brand}
              </button>
            );
          })}

        </div>

      </section>

      {/* Category */}

      <section className="mt-8">

        <h4 className="mb-4 font-semibold text-slate-900">
          Category
        </h4>

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => {
            const active = filters.categories.includes(category);

            return (
              <button
                key={category}
                onClick={() => toggleFilter("categories", category)}
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "border-blue-600 bg-blue-600 text-white shadow-md"
                      : "border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }
                `}
              >
                {category}
              </button>
            );
          })}

        </div>

      </section>

      {/* Footer */}

      {activeFilters > 0 && (

        <button
          onClick={clearFilters}
          className="
            mt-10
            w-full
            rounded-xl
            border
            border-slate-300
            py-3
            font-medium
            transition
            hover:border-red-500
            hover:bg-red-50
            hover:text-red-600
          "
        >
          Clear Filters
        </button>

      )}

    </aside>
  );
}