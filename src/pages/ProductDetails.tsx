import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">

        <h1 className="text-4xl font-bold">
          Product #{id}
        </h1>

        <p className="mt-4 text-slate-600">
          Product Details Page (Coming Next)
        </p>

      </div>
    </section>
  );
}