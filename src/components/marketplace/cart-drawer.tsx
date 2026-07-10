"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Trash2,
  MessageCircle,
  Minus,
  Plus,
} from "lucide-react";
import { useCart } from "@/context/cart-context";
import type { CartItem } from "@/context/cart-context";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function buildWhatsAppOrderMessage(items: CartItem[], totalFormatted: string) {
  const lines = items.map(
    (i) => `• ${i.product.name} x${i.quantity} — ${i.product.price}`
  );
  return `Bonjour Musambu Business Santé,\n\nJe souhaite passer commande :\n\n${lines.join("\n")}\n\n*Total : ${totalFormatted}*\n\nMerci !`;
}

export function CartDrawer() {
  const {
    items,
    itemCount,
    totalFormatted,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const whatsappCheckout = `https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    buildWhatsAppOrderMessage(items, totalFormatted)
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            aria-hidden="true"
          />

          <motion.aside
            className="fixed inset-y-0 right-0 z-[70] flex h-dvh w-full max-w-md flex-col border-l bg-background shadow-soft-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            role="dialog"
            aria-label="Panier d'achat"
            aria-modal="true"
          >
            {/* En-tête fixe */}
            <div className="flex shrink-0 items-center justify-between border-b px-5 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Mon panier</h2>
                {itemCount > 0 && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeCart}
                aria-label="Fermer le panier"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Liste scrollable — hauteur fixe */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4">
              {items.length === 0 ? (
                <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <ShoppingBag className="h-8 w-8 text-muted-foreground/50" />
                  </div>
                  <p className="font-medium">Votre panier est vide</p>
                  <p className="max-w-xs text-sm text-muted-foreground">
                    Parcourez notre boutique et ajoutez vos produits favoris.
                  </p>
                  <Button variant="outline" onClick={closeCart} className="mt-2">
                    Continuer mes achats
                  </Button>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.product.slug}
                      className="flex gap-3 rounded-xl border bg-card p-3 shadow-soft"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">
                              {item.product.name}
                            </p>
                            <p className="text-sm font-semibold text-primary">
                              {item.product.price}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.product.slug)}
                            aria-label="Supprimer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        <div className="mt-2 flex w-fit items-center rounded-lg border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() =>
                              item.quantity <= 1
                                ? removeItem(item.product.slug)
                                : updateQuantity(
                                    item.product.slug,
                                    item.quantity - 1
                                  )
                            }
                            aria-label="Diminuer"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() =>
                              updateQuantity(
                                item.product.slug,
                                item.quantity + 1
                              )
                            }
                            aria-label="Augmenter"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Pied de page fixe */}
            {items.length > 0 && (
              <div className="shrink-0 border-t bg-background px-5 py-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {itemCount} article{itemCount > 1 ? "s" : ""}
                  </span>
                  <span className="text-muted-foreground">Sous-total</span>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-bold text-primary">
                    {totalFormatted}
                  </span>
                </div>
                <Separator className="mb-4" />
                <Button asChild size="lg" className="w-full gap-2">
                  <a
                    href={whatsappCheckout}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Commander via WhatsApp
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 w-full text-muted-foreground"
                  onClick={clearCart}
                >
                  Vider le panier
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function CartButton() {
  const { itemCount, toggleCart } = useCart();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      onClick={toggleCart}
      aria-label={`Ouvrir le panier${itemCount > 0 ? `, ${itemCount} article(s)` : ""}`}
    >
      <ShoppingBag className="h-5 w-5" />
      {itemCount > 0 && (
        <motion.span
          key={itemCount}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
        >
          {itemCount > 9 ? "9+" : itemCount}
        </motion.span>
      )}
    </Button>
  );
}
