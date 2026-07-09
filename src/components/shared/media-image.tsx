"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteImages } from "@/lib/images";

interface MediaImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  aspectClassName?: string;
  hoverEffect?: boolean;
  overlay?: boolean;
  rounded?: "none" | "xl" | "2xl" | "3xl";
  embedded?: boolean;
}

export function MediaImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  containerClassName,
  aspectClassName = "aspect-[4/3]",
  hoverEffect = true,
  overlay = true,
  rounded = "2xl",
  embedded = false,
}: MediaImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const roundedClass = {
    none: "rounded-none",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  }[rounded];

  const groupClass = embedded ? "" : "group";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        groupClass,
        aspectClassName,
        roundedClass,
        !embedded &&
          hoverEffect &&
          "shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-xl",
        embedded && "h-full w-full",
        containerClassName
      )}
    >
      <Image
        src={hasError ? siteImages.fallback : imgSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover transition-transform duration-700 ease-out",
          hoverEffect && "group-hover:scale-110",
          className
        )}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setImgSrc(siteImages.fallback);
          }
        }}
      />

      {overlay && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-500",
            hoverEffect && "group-hover:opacity-100"
          )}
          aria-hidden="true"
        />
      )}

      {hoverEffect && !embedded && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/20"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
