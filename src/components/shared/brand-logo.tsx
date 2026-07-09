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
  header: { width: 180, height: 56, img: "h-12 w-auto sm:h-14" },
  footer: { width: 200, height: 64, img: "h-14 w-auto" },
  hero: { width: 320, height: 100, img: "h-20 w-auto sm:h-24" },
};

export function BrandLogo({
  variant = "header",
  showText = false,
  className,
}: BrandLogoProps) {
  const size = sizes[variant];

  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.name} — ${siteConfig.slogan}`}
        width={size.width}
        height={size.height}
        className={cn(
          "object-contain transition-transform duration-300 group-hover:scale-[1.02]",
          size.img
        )}
        priority={variant === "header"}
      />
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
