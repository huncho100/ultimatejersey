import { useParams, Navigate } from "react-router-dom";

import Container from "../components/ui/Container";

import { footballProducts } from "../data/football";

import ProductGallery from "../components/products/ProductGallery";
import ProductInfo from "../components/products/ProductInfo";
import ProductDescription from "../components/products/ProductDescription";
import RelatedProducts from "../components/products/RelatedProducts";

export default function ProductDetails() {
  const { id } = useParams();

  const product = footballProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = footballProducts
    .filter(
      (item) =>
        item.id !== product.id &&
        item.team !== product.team
    )
    .slice(0, 4);

  return (
    <section className="bg-slate-50 py-8">
      <Container>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left Column */}

          <div>
            <ProductGallery
              image={product.image}
              gallery={product.gallery}
              name={product.team}
            />
          </div>

          {/* Sticky Right Column */}

          <div className="self-start lg:sticky lg:top-24">

            <ProductInfo
              product={product}
            />

          </div>

        </div>

        <ProductDescription
          description={product.description}
        />

        <RelatedProducts
          products={relatedProducts}
        />

      </Container>
    </section>
  );
}