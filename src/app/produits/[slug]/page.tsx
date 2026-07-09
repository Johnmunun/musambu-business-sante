import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/motion/fade-in";
import { MediaImage } from "@/components/shared/media-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produit introuvable" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Bonjour, je souhaite des informations sur : ${product.name}`)}`;

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn>
            <Button asChild variant="ghost" size="sm" className="mb-8">
              <Link href="/produits">
                <ArrowLeft className="h-4 w-4" />
                Retour au catalogue
              </Link>
            </Button>

            <div className="grid gap-12 lg:grid-cols-2">
              <MediaImage
                src={product.image}
                alt={product.name}
                aspectClassName="aspect-square"
                rounded="3xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                containerClassName="shadow-soft-lg"
              />

              <div>
                <Badge variant="accent" className="mb-4">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-2xl font-semibold text-primary">
                  {product.price}
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="flex-1">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Commander via WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <Link href="/contact">Demander un conseil</Link>
                  </Button>
                </div>

                <Card className="mt-8">
                  <CardContent className="p-6">
                    <h2 className="font-semibold">Pourquoi choisir ce produit ?</h2>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li>✓ Produit sélectionné pour sa qualité premium</li>
                      <li>✓ Conseils d&apos;utilisation personnalisés inclus</li>
                      <li>✓ Livraison sécurisée dans toute la RDC</li>
                      <li>✓ Support client disponible 7j/7</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
