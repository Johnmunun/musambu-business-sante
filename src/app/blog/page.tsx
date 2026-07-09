import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { MediaImage } from "@/components/shared/media-image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils santé, bien-être et fitness par l'équipe Musambu Business Santé. Articles experts pour améliorer votre quotidien.",
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Blog
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Conseils & actualités bien-être
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Des articles experts pour vous accompagner dans votre parcours santé
              et wellness.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Card className="group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg">
                  <MediaImage
                    src={post.image}
                    alt={post.title}
                    embedded
                    rounded="none"
                    aspectClassName="aspect-[16/10]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Badge variant="accent">{post.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold leading-snug">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Lire l&apos;article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
