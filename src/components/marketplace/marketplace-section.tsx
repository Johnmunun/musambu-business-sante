"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  products,
  productCategories,
  type ProductCategory,
} from "@/data/products";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { MarketplaceProductCard } from "@/components/marketplace/marketplace-product-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketplaceSection() {
  const [category, setCategory] = useState<ProductCategory>("Tous");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        category === "Tous" || p.category === category;
      const matchSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [category, search]);

  return (
    <section id="marketplace" className="section-padding bg-muted/20">
      <div className="container-custom" id="produits">
        <SectionHeading
          badge="Boutique en ligne"
          title="Notre marketplace santé & bien-être"
          description="Parcourez notre sélection, ajoutez au panier et commandez en toute simplicité via WhatsApp. Livraison rapide partout en RDC."
        />

        {/* Barre de recherche & filtres */}
        <FadeIn className="mb-10">
          <div className="flex flex-col gap-4 rounded-2xl border bg-card p-4 shadow-soft sm:flex-row sm:items-center sm:p-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                aria-label="Rechercher un produit"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Catégories :</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {productCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "rounded-full transition-all",
                    category === cat && "shadow-soft"
                  )}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Grille produits */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <MarketplaceProductCard
                key={product.slug}
                product={product}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg font-medium">Aucun produit trouvé</p>
            <p className="mt-2 text-muted-foreground">
              Essayez une autre recherche ou catégorie.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearch("");
                setCategory("Tous");
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        <FadeIn className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/produits">Voir le catalogue complet</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
