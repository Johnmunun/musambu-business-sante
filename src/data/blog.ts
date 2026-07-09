import { siteImages } from "@/lib/images";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bien-etre-quotidien",
    title: "5 habitudes de bien-être pour un quotidien plus sain",
    excerpt:
      "Découvrez des gestes simples et efficaces pour améliorer votre santé et votre énergie au quotidien.",
    content: `Le bien-être ne se résume pas à des produits — c'est un mode de vie. Voici cinq habitudes que nous recommandons à nos clients pour cultiver une santé durable.

**1. Hydratation consciente**
Boire suffisamment d'eau est fondamental. Visez au moins 2 litres par jour, en adaptant selon votre activité physique et le climat tropical de la RDC.

**2. Mouvement quotidien**
30 minutes d'activité physique modérée suffisent à améliorer votre humeur, votre sommeil et votre santé cardiovasculaire.

**3. Sommeil réparateur**
7 à 8 heures de sommeil de qualité sont essentielles. Créez un rituel du soir et limitez les écrans avant le coucher.

**4. Alimentation équilibrée**
Privilégiez les aliments frais, locaux et peu transformés. Complétez si nécessaire avec des vitamines de qualité.

**5. Gestion du stress**
Méditation, respiration profonde ou yoga — trouvez ce qui vous apaise et pratiquez régulièrement.

Chez Musambu Business Santé, nous sommes là pour vous accompagner dans cette démarche avec des produits adaptés à chaque étape de votre parcours wellness.`,
    image: siteImages.blog.bienEtre,
    category: "Bien-être",
    author: "Équipe Musambu",
    publishedAt: "2026-03-15",
    readTime: "5 min",
  },
  {
    slug: "choisir-complements",
    title: "Comment choisir ses compléments alimentaires ?",
    excerpt:
      "Guide pratique pour sélectionner les compléments adaptés à vos besoins nutritionnels.",
    content: `Face à la multitude de compléments disponibles sur le marché, faire le bon choix peut sembler complexe. Voici notre guide expert.

**Identifiez vos besoins**
Avant tout achat, évaluez vos lacunes nutritionnelles. Un professionnel de santé peut vous aider à identifier les carences potentielles.

**Vérifiez la qualité**
Optez pour des marques reconnues, avec des certifications et une traçabilité claire des ingrédients.

**Dosage et forme**
Les gélules, poudres ou liquides ont chacun leurs avantages. Choisissez la forme la plus adaptée à votre mode de vie.

**Accompagnement personnalisé**
Notre équipe est disponible pour vous conseiller gratuitement. Contactez-nous via WhatsApp pour une recommandation sur mesure.`,
    image: siteImages.blog.complements,
    category: "Santé",
    author: "Équipe Musambu",
    publishedAt: "2026-03-01",
    readTime: "7 min",
  },
  {
    slug: "fitness-maison",
    title: "Créer son espace fitness à la maison",
    excerpt:
      "Conseils pour aménager un coin entraînement efficace sans investissement excessif.",
    content: `Pas besoin d'une salle de sport complète pour rester en forme. Avec quelques équipements bien choisis, transformez un coin de votre maison en espace fitness performant.

**L'essentiel**
Un tapis de qualité, des bandes de résistance et des haltères légers suffisent pour débuter un programme complet.

**L'espace**
2 m² suffisent pour la plupart des exercices. Choisissez un endroit bien ventilé et dégagé.

**La motivation**
Fixez des objectifs réalistes et créez une routine. La régularité prime sur l'intensité.

Découvrez notre sélection d'accessoires fitness sur notre catalogue ou contactez-nous pour un conseil personnalisé.`,
    image: siteImages.blog.fitness,
    category: "Fitness",
    author: "Équipe Musambu",
    publishedAt: "2026-02-20",
    readTime: "6 min",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
