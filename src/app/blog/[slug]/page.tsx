import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { FadeIn } from "@/components/motion/fade-in";
import { MediaImage } from "@/components/shared/media-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="pt-24">
      <div className="container-custom section-padding">
        <FadeIn>
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </Button>

          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge variant="accent">{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="text-sm text-muted-foreground">
                {formattedDate}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              {post.author}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <MediaImage
              src={post.image}
              alt={post.title}
              aspectClassName="aspect-[21/9]"
              rounded="3xl"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              containerClassName="shadow-soft-lg"
            />
          </div>

          <div className="prose prose-lg mx-auto mt-12 max-w-3xl dark:prose-invert">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.includes("**")) {
                const title = paragraph.replace(/\*\*/g, "");
                return (
                  <h2 key={i} className="mt-8 text-xl font-semibold">
                    {title}
                  </h2>
                );
              }
              return (
                <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
