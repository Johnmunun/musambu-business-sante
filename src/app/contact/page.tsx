import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Musambu Business Santé pour vos commandes, conseils personnalisés et informations sur nos produits de santé et bien-être.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone & WhatsApp",
    items: siteConfig.contacts.phones,
    href: (item: string) => `tel:${item.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "E-mail",
    items: [siteConfig.contacts.email],
    href: () => `mailto:${siteConfig.contacts.email}`,
  },
  {
    icon: MapPin,
    title: "Adresse",
    items: [siteConfig.contacts.address],
  },
  {
    icon: Clock,
    title: "Horaires",
    items: ["Lun - Sam : 8h00 - 18h00", "Dimanche : Sur rendez-vous"],
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Contact
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Parlons de votre bien-être
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
              et vous accompagner dans vos choix.
            </p>
          </FadeIn>

          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              {contactInfo.map((info) => (
                <FadeIn key={info.title}>
                  <Card>
                    <CardContent className="flex gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        {info.items.map((item) => (
                          <p key={item} className="mt-1 text-sm text-muted-foreground">
                            {info.href ? (
                              <a
                                href={info.href(item)}
                                className="transition-colors hover:text-primary"
                              >
                                {item}
                              </a>
                            ) : (
                              item
                            )}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.1} className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <h2 className="mb-6 text-xl font-semibold">
                    Envoyez-nous un message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
