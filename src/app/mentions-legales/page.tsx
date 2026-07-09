import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24">
      <div className="container-custom section-padding">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold">Mentions légales</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Éditeur du site
              </h2>
              <p className="mt-2">
                MUSAMBU BUSINESS SANTÉ — Kolwezi, République Démocratique du
                Congo.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Hébergement
              </h2>
              <p className="mt-2">
                Ce site est hébergé par un prestataire cloud. Les informations
                d&apos;hébergement seront complétées lors du déploiement en
                production.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Propriété intellectuelle
              </h2>
              <p className="mt-2">
                L&apos;ensemble du contenu de ce site (textes, images, logos) est
                protégé par le droit d&apos;auteur. Toute reproduction est
                interdite sans autorisation préalable.
              </p>
            </section>
          </div>
          <Button asChild variant="outline" className="mt-10">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
