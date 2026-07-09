import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-24">
      <div className="container-custom section-padding">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Collecte des données
              </h2>
              <p className="mt-2">
                Nous collectons uniquement les données que vous nous fournissez
                volontairement via nos formulaires de contact et d&apos;inscription
                à la newsletter (nom, e-mail, téléphone, message).
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Utilisation des données
              </h2>
              <p className="mt-2">
                Vos données sont utilisées exclusivement pour répondre à vos
                demandes, vous envoyer nos communications (avec votre
                consentement) et améliorer nos services.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Confidentialité
              </h2>
              <p className="mt-2">
                La confidentialité est l&apos;une de nos valeurs fondamentales.
                Nous ne vendons ni ne partageons vos données personnelles avec des
                tiers sans votre consentement explicite.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Vos droits
              </h2>
              <p className="mt-2">
                Vous pouvez à tout moment demander l&apos;accès, la modification ou
                la suppression de vos données en nous contactant via le
                formulaire de contact ou par e-mail.
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
