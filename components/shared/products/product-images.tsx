"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setActiveImage(image);
  };

  return (
    <div className="flex flex-col gap-4">
      <Image
        key={activeImage}
        src={activeImage}
        alt={activeImage}
        width={500}
        height={500}
        className="object-cover"
      />
      <div className="flex flex-wrap gap-2">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt={image}
            width={100}
            height={100}
            className={`object-cover ${
              activeImage === image ? "border-2 border-primary" : ""
            }`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}
