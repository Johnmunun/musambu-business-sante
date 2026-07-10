import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "header" | "footer" | "hero";
  showText?: boolean;
  className?: string;
}

const sizes = {
  header: {
    width: 180,
    height: 56,
    img: "h-12 w-auto sm:h-14",
    rounded: "rounded-2xl",
  },
  footer: {
    width: 200,
    height: 64,
    img: "h-14 w-auto",
    rounded: "rounded-2xl",
  },
  hero: {
    width: 320,
    height: 100,
    img: "h-20 w-auto sm:h-24",
    rounded: "rounded-3xl",
  },
};

export function BrandLogo({
  variant = "header",
  showText = false,
  className,
}: BrandLogoProps) {
  const size = sizes[variant];

  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <div
        className={cn(
          "overflow-hidden shadow-soft ring-1 ring-border/40 transition-all duration-300 group-hover:shadow-soft-lg group-hover:ring-brand-blue/30",
          size.rounded
        )}
      >
        <Image
          src={siteConfig.logo}
          alt={`${siteConfig.name} — ${siteConfig.slogan}`}
          width={size.width}
          height={size.height}
          className={cn(
            "object-contain bg-white transition-transform duration-300 group-hover:scale-[1.02] dark:bg-card",
            size.img
          )}
          priority={variant === "header"}
        />
      </div>
      {showText && (
        <div className="hidden lg:block">
          <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {siteConfig.slogan}
          </span>
        </div>
      )}
    </Link>
  );
}
