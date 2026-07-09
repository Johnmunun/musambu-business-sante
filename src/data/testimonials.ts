export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Kabongo",
    role: "Cliente fidèle",
    city: "Kolwezi",
    content:
      "Un service exceptionnel ! Les produits sont de grande qualité et l'équipe m'a guidée pour choisir les compléments adaptés à mes besoins. Livraison rapide et soignée.",
    rating: 5,
  },
  {
    id: "2",
    name: "Jean-Pierre Mwamba",
    role: "Sportif amateur",
    city: "Lubumbashi",
    content:
      "J'ai commandé un kit fitness complet. Les accessoires sont robustes et le conseil personnalisé m'a permis de monter un programme d'entraînement efficace à domicile.",
    rating: 5,
  },
  {
    id: "3",
    name: "Grace Tshimanga",
    role: "Maman de famille",
    city: "Likasi",
    content:
      "Le purificateur d'air a transformé notre maison. L'équipe Musambu est professionnelle, à l'écoute et toujours disponible sur WhatsApp pour répondre à nos questions.",
    rating: 5,
  },
  {
    id: "4",
    name: "Dr. Patrick Ilunga",
    role: "Professionnel de santé",
    city: "Fungurume",
    content:
      "Je recommande Musambu Business Santé à mes patients. Leur sélection de produits wellness est rigoureuse et leur approche client est digne d'une entreprise internationale.",
    rating: 5,
  },
];
