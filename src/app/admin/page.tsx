import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, FileText, MessageSquare, Users } from "lucide-react";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

const stats = [
  {
    title: "Produits",
    value: products.length,
    icon: Package,
    description: "Produits au catalogue",
  },
  {
    title: "Articles",
    value: blogPosts.length,
    icon: FileText,
    description: "Articles publiés",
  },
  {
    title: "Messages",
    value: 0,
    icon: MessageSquare,
    description: "Messages en attente",
  },
  {
    title: "Abonnés",
    value: 0,
    icon: Users,
    description: "Newsletter",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tableau de bord</h1>
      <p className="mt-1 text-muted-foreground">
        Architecture admin prête — connectez une base de données et une
        authentification pour activer la gestion complète.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Prochaines étapes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Connecter une base de données (Neon, Supabase, etc.)</li>
            <li>• Ajouter l&apos;authentification admin (NextAuth, Clerk, etc.)</li>
            <li>• Brancher un service e-mail pour les formulaires</li>
            <li>• Intégrer un CMS headless pour le blog et les produits</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
