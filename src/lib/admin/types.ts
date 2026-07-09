export interface AdminUser {
  id: string;
  email: string;
  role: "admin" | "editor";
}

export interface AdminProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AdminBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  published: boolean;
}

export interface AdminContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface AdminNewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  active: boolean;
}
