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
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

import type { CartItem } from "@/context/cart-context";

function buildWhatsAppOrderMessage(items: CartItem[], totalFormatted: string) {
  const lines = items.map(
    (i) =>
      `• ${i.product.name} x${i.quantity} — ${i.product.price}`
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
            className="fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-md flex-col border-l bg-background shadow-soft-2xl sm:bottom-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            role="dialog"
            aria-label="Panier d'achat"
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Mon panier</h2>
                {itemCount > 0 && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </div>
              <Button variant="ghost" size="icon" onClick={closeCart} aria-label="Fermer le panier">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
                  <p className="font-medium">Votre panier est vide</p>
                  <p className="text-sm text-muted-foreground">
                    Parcourez notre boutique et ajoutez vos produits favoris.
                  </p>
                  <Button variant="outline" onClick={closeCart}>
                    Continuer mes achats
                  </Button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.product.slug}
                      className="flex gap-4 rounded-xl border p-3 shadow-soft"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-sm font-medium leading-snug">
                          {item.product.name}
                        </p>
                        <p className="text-sm font-semibold text-primary">
                          {item.product.price}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-lg border">
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
                            <span className="w-6 text-center text-sm font-medium">
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
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-destructive"
                            onClick={() => removeItem(item.product.slug)}
                            aria-label="Supprimer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="text-xl font-bold text-primary">
                    {totalFormatted}
                  </span>
                </div>
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
