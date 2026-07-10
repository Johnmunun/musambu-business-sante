import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, Truck, Shield, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { MarketplaceCatalog } from "@/components/marketplace/marketplace-catalog";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Boutique — Catalogue produits",
  description:
    "Boutique Musambu Business Santé : produits santé, bien-être, fitness et équipements maison. Commandez en ligne via WhatsApp. Livraison en RDC.",
};

const highlights = [
  { icon: ShoppingBag, label: `${products.length} produits disponibles` },
  { icon: Truck, label: "Livraison partout en RDC" },
  { icon: Shield, label: "Produits de qualité certifiés" },
  { icon: MessageCircle, label: "Commande rapide via WhatsApp" },
];

export default function ProductsPage() {
  return (
    <div className="pt-24">
      {/* Hero boutique */}
      <section className="border-b bg-gradient-to-br from-brand-blue/10 via-background to-brand-red/10">
        <div className="container-custom section-padding !pb-12 !pt-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <ShoppingBag className="h-4 w-4" />
              Boutique en ligne
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Notre catalogue{" "}
              <span className="gradient-text">santé & bien-être</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Parcourez tous nos produits, ajoutez au panier et passez commande
              en toute simplicité. Livraison fiable à Kolwezi, Lubumbashi et
              partout en RDC.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-soft"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue complet */}
      <section className="section-padding">
        <div className="container-custom">
          <MarketplaceCatalog mode="full" />
        </div>
      </section>

      {/* Bandeau aide */}
      <section className="border-t bg-muted/30 py-12">
        <div className="container-custom text-center">
          <p className="text-lg font-medium">Besoin d&apos;un conseil personnalisé ?</p>
          <p className="mt-2 text-muted-foreground">
            Notre équipe vous aide à choisir les produits adaptés à vos besoins.
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/contact">Demander un conseil gratuit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
