const unsplash = (id: string, width = 800) =>
  `https://images.unsplash.com/${id}?w=${width}&q=80&auto=format&fit=crop`;

export const siteImages = {
  fallback: unsplash("photo-1576091160399-112ba8d25d1d", 800),

  hero: unsplash("photo-1576091160399-112ba8d25d1d", 1200),

  products: {
    complements: unsplash("photo-1559757148-5c350d0d3c56"),
    yoga: unsplash("photo-1601925260368-ae2f83cf8b7f"),
    purificateur: unsplash("photo-1584622650111-993a426fbf0a"),
    bandes: unsplash("photo-1598289431512-b97b0917affc"),
    huiles: unsplash("photo-1608571423902-eed4a5ad8108"),
    balance: unsplash("photo-1517433456452-f9633a875f6f"),
  },

  blog: {
    bienEtre: unsplash("photo-1544367567-0f2fcb009e0b", 1200),
    complements: unsplash("photo-1505751172876-fa1923c5c528", 1200),
    fitness: unsplash("photo-1571019614242-c5c5dee9f50b", 1200),
  },

  about: unsplash("photo-1515377905703-c4788e51af15", 1200),
  services: unsplash("photo-1534438327276-14e5300c3a48", 1200),
} as const;
