import { SectionHeading } from "@/components/shared/section-heading";
import { MarketplaceCatalog } from "@/components/marketplace/marketplace-catalog";

export function MarketplaceSection() {
  return (
    <section id="boutique" className="section-padding bg-muted/20">
      <div className="container-custom">
        <SectionHeading
          badge="Boutique"
          title="Nos produits phares"
          description="Un aperçu de notre sélection premium. Parcourez le catalogue complet, ajoutez au panier et commandez facilement via WhatsApp."
        />
        <MarketplaceCatalog mode="preview" showFilters={false} />
      </div>
    </section>
  );
}
