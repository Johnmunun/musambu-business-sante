import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  FileText,
  MessageSquare,
  Mail,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

const adminNav = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/admin/produits", label: "Produits", icon: Package },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare },
  { href: "/admin/newsletter", label: "Newsletter", icon: Mail },
  { href: "/admin/parametres", label: "Paramètres", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen pt-16">
      <aside className="hidden w-64 border-r bg-muted/30 p-6 lg:block">
        <div className="mb-8">
          <h2 className="text-lg font-bold">Administration</h2>
          <p className="text-xs text-muted-foreground">Musambu Business Santé</p>
        </div>
        <nav className="space-y-1">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 lg:p-8">{children}</main>
    </div>
  );
}
