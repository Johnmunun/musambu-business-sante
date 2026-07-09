export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "sante-bien-etre",
    title: "Produits santé & bien-être",
    description:
      "Une gamme complète de compléments, soins et produits naturels pour soutenir votre santé au quotidien.",
    icon: "HeartPulse",
  },
  {
    id: "fitness",
    title: "Accessoires fitness",
    description:
      "Équipements et accessoires de qualité pour vos séances d'entraînement à domicile ou en salle.",
    icon: "Dumbbell",
  },
  {
    id: "maison",
    title: "Équipements maison",
    description:
      "Appareils et équipements pour un environnement domestique sain, confortable et fonctionnel.",
    icon: "Home",
  },
  {
    id: "conseil",
    title: "Conseils d'utilisation",
    description:
      "Accompagnement personnalisé pour vous guider dans le choix et l'utilisation optimale de vos produits.",
    icon: "MessageCircle",
  },
  {
    id: "livraison",
    title: "Livraison sécurisée",
    description:
      "Service de livraison fiable et sécurisé dans toutes nos zones de couverture en RDC.",
    icon: "Truck",
  },
];
