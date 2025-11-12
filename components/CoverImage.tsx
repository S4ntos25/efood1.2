"use client";
import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  fallbackSrc?: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export default function CoverImage({ src, fallbackSrc, alt, sizes = "100vw", priority = false, className }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      className={className ?? "object-cover"}
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}