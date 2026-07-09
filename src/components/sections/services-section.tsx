import {
  HeartPulse,
  Dumbbell,
  Home,
  MessageCircle,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { siteImages } from "@/lib/images";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { MediaImage } from "@/components/shared/media-image";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  HeartPulse,
  Dumbbell,
  Home,
  MessageCircle,
  Truck,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          badge="Services"
          title="Des solutions complètes pour votre santé"
          description="De la vente de produits premium à l'accompagnement personnalisé, nous couvrons tous vos besoins en santé et bien-être."
        />

        <FadeIn className="mb-10">
          <MediaImage
            src={siteImages.services}
            alt="Salle de fitness moderne — équipements sportifs et bien-être"
            aspectClassName="aspect-[21/9]"
            rounded="3xl"
            sizes="100vw"
            containerClassName="shadow-soft-lg"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || HeartPulse;
            return (
              <StaggerItem key={service.id}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <CardContent className="p-8">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
