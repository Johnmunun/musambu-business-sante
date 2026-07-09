"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Minus, Plus, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MarketplaceProductCardProps {
  product: Product;
  index: number;
}

export function MarketplaceProductCard({
  product,
  index,
}: MarketplaceProductCardProps) {
  const { addItem, updateQuantity, removeItem, items } = useCart();
  const inCart = items.find((i) => i.product.slug === product.slug);
  const qty = inCart?.quantity ?? 0;

  function decreaseQty() {
    if (qty <= 1) removeItem(product.slug);
    else updateQuantity(product.slug, qty - 1);
  }

  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Bonjour, je souhaite commander : ${product.name} (${product.price})`
  )}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {product.featured && (
          <Badge className="absolute left-3 top-3 shadow-soft">Populaire</Badge>
        )}
        {!product.inStock && (
          <Badge
            variant="outline"
            className="absolute right-3 top-3 border-destructive/50 bg-background/90 text-destructive"
          >
            Rupture
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <Badge variant="accent">{product.category}</Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{product.rating}</span>
            <span>({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="font-semibold leading-snug">
          <Link
            href={`/produits/${product.slug}`}
            className="transition-colors hover:text-primary"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xl font-bold text-primary">{product.price}</p>
            <p className="text-xs text-muted-foreground">Livraison incluse</p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          {qty > 0 ? (
            <div className="flex flex-1 items-center justify-between rounded-xl border bg-muted/50 px-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={decreaseQty}
                aria-label="Diminuer la quantité"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-sm font-semibold">{qty}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => addItem(product, 1)}
                disabled={!product.inStock}
                aria-label="Augmenter la quantité"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              className="flex-1 gap-2"
              disabled={!product.inStock}
              onClick={() => addItem(product)}
            >
              <ShoppingCart className="h-4 w-4" />
              Ajouter
            </Button>
          )}
          <Button variant="outline" size="icon" asChild className="shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Commander ${product.name} via WhatsApp`}
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
