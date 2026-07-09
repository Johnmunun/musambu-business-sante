"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-red p-8 text-white shadow-soft-lg sm:p-12 lg:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Prêt à améliorer votre bien-être ?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Contactez notre équipe dès aujourd&apos;hui pour un accompagnement
              personnalisé et découvrez nos produits premium.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90"
              >
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <a href={`tel:${siteConfig.contacts.phones[0].replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4" />
                  {siteConfig.contacts.phones[0]}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
