# MUSAMBU BUSINESS SANTÉ

Site web corporate premium pour Musambu Business Santé — vente et distribution de produits de santé, bien-être, fitness et équipements maison en RDC.

## Technologies

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/UI**
- **Framer Motion**
- **next-themes** (mode sombre)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure

```
src/
├── app/                  # Pages et routes API
│   ├── admin/            # Architecture admin (prête à connecter)
│   ├── api/              # Contact & newsletter
│   ├── blog/             # Blog dynamique
│   └── produits/         # Catalogue produits
├── components/
│   ├── forms/            # Formulaires contact & newsletter
│   ├── layout/           # Header, Footer, WhatsApp
│   ├── motion/           # Animations Framer Motion
│   ├── sections/         # Sections page d'accueil
│   └── ui/               # Composants Shadcn/UI
├── data/                 # Données statiques (prêt pour CMS/DB)
└── lib/                  # Config, utils, types admin
```

## Fonctionnalités

- Design premium HealthTech responsive
- SEO optimisé (metadata, sitemap, robots)
- Mode sombre
- Bouton WhatsApp flottant
- Formulaire de contact & newsletter
- Sections : Hero, À propos, Services, Produits, Témoignages, FAQ, Zones, CTA
- Intégration Google Maps
- Routes dynamiques blog & produits
- Architecture admin prête

## Déploiement

Compatible Vercel, Netlify ou tout hébergeur Node.js :

```bash
npm run build
npm start
```

## Licence

Propriétaire — MUSAMBU BUSINESS SANTÉ
