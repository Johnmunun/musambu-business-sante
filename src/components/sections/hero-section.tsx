"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Star, Truck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MediaImage } from "@/components/shared/media-image";
import { AnimatedCTAButton } from "@/components/shared/animated-cta-button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl" />

      <div className="container-custom relative flex min-h-[calc(100vh-5rem)] flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Badge variant="accent" className="mb-6 border-brand-blue/20 bg-brand-blue/10 text-brand-blue">
            {siteConfig.slogan}
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Votre partenaire{" "}
            <span className="gradient-text">santé & bien-être</span>{" "}
            de confiance
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0 mx-auto">
            Musambu Business Santé — vente et distribution de produits de santé,
            accessoires fitness et équipements maison. Qualité premium,
            accompagnement personnalisé et livraison fiable en RDC.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <AnimatedCTAButton href="/produits">
              Découvrir la boutique
            </AnimatedCTAButton>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Demander un conseil</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            {[
              { icon: Shield, label: "Produits certifiés" },
              { icon: Truck, label: "Livraison sécurisée" },
              { icon: Star, label: "5 000+ clients satisfaits" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1 w-full max-w-lg lg:max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <MediaImage
            src={siteImages.hero}
            alt="Professionnel de santé consultant un client sur des produits wellness"
            aspectClassName="aspect-[4/5]"
            rounded="3xl"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            containerClassName="shadow-soft-lg"
          />

          <motion.div
            className="absolute -bottom-6 -left-6 rounded-2xl border bg-card/95 p-4 shadow-soft-lg backdrop-blur-sm sm:-left-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                <Shield className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Qualité garantie</p>
                <p className="text-xs text-muted-foreground">Produits sélectionnés</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 top-8 rounded-2xl border bg-card/95 p-4 shadow-soft-lg backdrop-blur-sm sm:-right-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Livraison rapide</p>
                <p className="text-xs text-muted-foreground">Partout en RDC</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
