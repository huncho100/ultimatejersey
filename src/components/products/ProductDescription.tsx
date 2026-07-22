import {
  CheckCircle2,
  RefreshCcw,
  Truck,
} from "lucide-react";

export default function ProductDescription({
  description,
}: {
  description?: string;
}) {
  return (
    <section className="mt-20">

      {/* Tabs */}

      <div className="border-b border-slate-200">

        <div className="flex gap-10">

          <button className="border-b-2 border-blue-600 pb-4 font-semibold text-blue-600">
            Description
          </button>

          <button className="pb-4 text-slate-500 transition hover:text-slate-900">
            Reviews
          </button>

          <button className="pb-4 text-slate-500 transition hover:text-slate-900">
            Shipping & Returns
          </button>

        </div>

      </div>

      {/* Content */}

      <div className="rounded-b-3xl border border-t-0 border-slate-200 bg-white p-10 shadow-sm">

        <p className="text-lg leading-8 text-slate-600">
          {description ??
            "Official licensed jersey made with premium breathable performance fabric for maximum comfort on and off the pitch."}
        </p>

        {/* Features */}

        <div className="mt-10">

          <h3 className="text-2xl font-bold text-slate-900">
            Features
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {[
              "Official licensed merchandise",
              "Lightweight breathable fabric",
              "Moisture-wicking technology",
              "Official club and sponsor details",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-green-600"
                />

                <span>{feature}</span>
              </div>
            ))}

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl bg-slate-50 p-7">

            <div className="flex items-center gap-3">

              <Truck
                size={22}
                className="text-blue-600"
              />

              <h4 className="text-lg font-semibold">
                Shipping
              </h4>

            </div>

            <p className="mt-4 leading-7 text-slate-600">
              Orders are processed within 24 hours and
              delivered worldwide.
            </p>

          </div>

          <div className="rounded-2xl bg-slate-50 p-7">

            <div className="flex items-center gap-3">

              <RefreshCcw
                size={22}
                className="text-blue-600"
              />

              <h4 className="text-lg font-semibold">
                Returns
              </h4>

            </div>

            <p className="mt-4 leading-7 text-slate-600">
              Easy 30-day returns on unused items in
              their original packaging.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}