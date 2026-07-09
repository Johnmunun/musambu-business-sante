import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function LocationsSection() {
  return (
    <section id="zones" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          badge="Couverture"
          title="Nous sommes présents partout en RDC"
          description="Notre réseau de livraison couvre les principales villes du sud de la République Démocratique du Congo."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {siteConfig.serviceAreas.map((area) => (
              <StaggerItem key={area}>
                <Card className="transition-all hover:-translate-y-0.5 hover:shadow-soft">
                  <CardContent className="flex items-center gap-3 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{area}</span>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <Card className="overflow-hidden">
              <div className="relative aspect-video w-full">
                <iframe
                  title="Carte Google Maps - Kolwezi, RDC"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127500!2d25.4667!3d-10.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7f8c8c8c8c8c9%3A0x0!2sKolwezi%2C%20RDC!5e0!3m2!1sfr!2scd!4v1"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
