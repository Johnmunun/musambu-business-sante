import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { MediaImage } from "@/components/shared/media-image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Découvrez notre catalogue de produits santé, bien-être, fitness et équipements maison. Qualité premium en RDC.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Catalogue
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Nos produits
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Une sélection rigoureuse de produits pour votre santé, votre forme
              et votre confort à domicile.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <Card className="group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
                  <div className="relative">
                    <MediaImage
                      src={product.image}
                      alt={product.name}
                      embedded
                      rounded="none"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <Badge className="absolute left-4 top-4 z-10 shadow-soft" variant="secondary">
                      {product.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-semibold text-primary">
                        {product.price}
                      </span>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/produits/${product.slug}`}>
                          Détails
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
