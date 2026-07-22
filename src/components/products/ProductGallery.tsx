import { useEffect, useState } from "react";

interface ProductGalleryProps {
  image: string;
  gallery?: string[];
  name: string;
}

export default function ProductGallery({
  image,
  gallery = [],
  name,
}: ProductGalleryProps) {
  const images = gallery.length > 0 ? gallery : [image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [image, gallery]);

  return (
    <div className="space-y-4">

      {/* Main Image */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        <img
          src={selectedImage}
          alt={name}
          className="
            mx-auto
            h-[300px]
            w-full
            object-contain
            transition-transform
            duration-300
            hover:scale-105
          "
        />

      </div>

      {/* Thumbnails */}

      {images.length > 1 && (
        <div className="flex flex-wrap justify-center gap-3">

          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`
                overflow-hidden
                rounded-xl
                border-2
                bg-white
                p-1
                transition-all
                duration-300

                ${
                  selectedImage === img
                    ? "border-blue-600 shadow-md"
                    : "border-slate-200 hover:border-blue-400"
                }
              `}
            >
              <img
                src={img}
                alt={`${name} ${index + 1}`}
                className="h-14 w-14 object-contain"
              />
            </button>
          ))}

        </div>
      )}

    </div>
  );
}