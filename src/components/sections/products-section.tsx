import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { MediaImage } from "@/components/shared/media-image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProductsSection() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="produits" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Produits"
          title="Une sélection premium pour votre quotidien"
          description="Découvrez nos produits phares, soigneusement choisis pour leur qualité, leur efficacité et leur rapport qualité-prix."
        />

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
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
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-primary">{product.price}</span>
                    <Button asChild variant="ghost" size="sm" className="group/btn">
                      <Link href={`/produits/${product.slug}`}>
                        Voir plus
                        <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/produits">
              Voir tous les produits
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
