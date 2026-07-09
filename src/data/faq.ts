export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Quels types de produits proposez-vous ?",
    answer:
      "Nous proposons une large gamme de produits de santé et bien-être, d'accessoires fitness et d'équipements pour la maison. Chaque produit est soigneusement sélectionné pour sa qualité et son efficacité.",
  },
  {
    id: "2",
    question: "Dans quelles villes livrez-vous ?",
    answer:
      "Nous livrons principalement à Kolwezi, Lubumbashi, Likasi et Fungurume. Nous couvrons également d'autres villes en République Démocratique du Congo. Contactez-nous pour vérifier la disponibilité dans votre zone.",
  },
  {
    id: "3",
    question: "Comment passer une commande ?",
    answer:
      "Vous pouvez nous contacter par téléphone, WhatsApp ou via notre formulaire de contact. Notre équipe vous accompagnera dans le choix de vos produits et organisera la livraison.",
  },
  {
    id: "4",
    question: "Proposez-vous des conseils personnalisés ?",
    answer:
      "Oui, l'accompagnement personnalisé est au cœur de notre mission. Nos conseillers vous guident dans le choix et l'utilisation optimale de vos produits selon vos besoins spécifiques.",
  },
  {
    id: "5",
    question: "Les paiements sont-ils sécurisés ?",
    answer:
      "Nous proposons plusieurs modes de paiement sécurisés. Toutes les transactions sont traitées avec la plus grande confidentialité et intégrité.",
  },
  {
    id: "6",
    question: "Puis-je retourner un produit ?",
    answer:
      "Si un produit ne correspond pas à vos attentes, contactez-nous dans les 7 jours suivant la réception. Nous étudierons votre demande selon nos conditions de retour.",
  },
];
