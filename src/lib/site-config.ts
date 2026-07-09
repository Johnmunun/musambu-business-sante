export const siteConfig = {
  name: "MUSAMBU BUSINESS SANTÉ",
  shortName: "Musambu Santé",
  description:
    "Vente et distribution de produits de santé, bien-être, accessoires fitness et équipements pour la maison. Qualité, accompagnement personnalisé et livraison fiable en RDC.",
  url: "https://musambu-business-sante.com",
  ogImage: "/og-image.jpg",
  locale: "fr_FR",
  contacts: {
    phones: ["+243 81 675 2636", "+243 97 342 4261"],
    whatsapp: "+243816752636",
    email: "contact@musambu-sante.com",
    address: "Kolwezi, République Démocratique du Congo",
  },
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  mission:
    "Contribuer au bien-être de la population en fournissant des produits de qualité, un accompagnement personnalisé et un service professionnel digne de confiance.",
  values: [
    {
      title: "Professionnalisme",
      description:
        "Une approche rigoureuse et experte à chaque interaction avec nos clients.",
    },
    {
      title: "Qualité",
      description:
        "Des produits soigneusement sélectionnés pour répondre aux plus hauts standards.",
    },
    {
      title: "Intégrité",
      description:
        "Transparence et honnêteté au cœur de toutes nos relations commerciales.",
    },
    {
      title: "Satisfaction client",
      description:
        "Votre bien-être est notre priorité absolue, avant, pendant et après l'achat.",
    },
    {
      title: "Confidentialité",
      description:
        "Protection totale de vos données personnelles et de vos informations de santé.",
    },
  ],
  serviceAreas: [
    "Kolwezi",
    "Lubumbashi",
    "Likasi",
    "Fungurume",
    "Autres villes en RDC",
  ],
  navLinks: [
    { href: "/", label: "Accueil" },
    { href: "/#services", label: "Services" },
    { href: "/#marketplace", label: "Boutique" },
    { href: "/#temoignages", label: "Témoignages" },
    { href: "/#faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
