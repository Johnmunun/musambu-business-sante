"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartButton } from "@/components/marketplace/cart-drawer";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full shadow-[0_4px_20px_-4px_rgba(29,78,216,0.15)] transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/90 shadow-[0_8px_30px_-6px_rgba(29,78,216,0.22)] backdrop-blur-xl"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container-custom flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-20">
        <BrandLogo variant="header" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                "highlight" in link && link.highlight
                  ? "bg-primary/10 font-semibold text-primary hover:bg-primary/15"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartButton />
          <ThemeToggle />
          <Button asChild size="sm" className="hidden gap-2 sm:inline-flex">
            <Link href="/produits">
              <ShoppingBag className="h-4 w-4" />
              Boutique
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
            <Link href="/contact">
              <Phone className="h-4 w-4" />
              Contact
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-custom flex flex-col gap-1 px-4 py-4" aria-label="Navigation mobile">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  "highlight" in link && link.highlight
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 gap-2">
              <Link href="/produits" onClick={() => setIsOpen(false)}>
                <ShoppingBag className="h-4 w-4" />
                Accéder à la boutique
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
