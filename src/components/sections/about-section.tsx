import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/images";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { MediaImage } from "@/components/shared/media-image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="a-propos" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="À propos"
          title="Une mission au service de votre bien-être"
          description="Musambu Business Santé s'engage chaque jour pour améliorer la qualité de vie de nos clients à travers des produits d'excellence."
        />

        <FadeIn className="mb-8">
          <MediaImage
            src={siteImages.about}
            alt="Espace bien-être et relaxation — ambiance saine et apaisante"
            aspectClassName="aspect-[21/9]"
            rounded="3xl"
            sizes="100vw"
            containerClassName="shadow-soft-lg"
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <Card className="h-full border-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Notre mission</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {siteConfig.mission}
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Nos valeurs</h3>
                <ul className="mt-4 space-y-4">
                  {siteConfig.values.map((value) => (
                    <li key={value.title} className="flex gap-3">
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium">{value.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
