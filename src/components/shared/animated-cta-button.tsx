"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedCTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCTAButton({
  href,
  children,
  className,
}: AnimatedCTAButtonProps) {
  return (
    <motion.div
      className={cn("relative inline-flex", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      {/* Glow pulsant */}
      <motion.span
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary opacity-60 blur-md"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <Link href={href} className="group relative block">
        <motion.span
          className="relative flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary px-8 py-3.5 text-base font-semibold text-white shadow-soft-lg"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          animate={{ y: [0, -3, 0] }}
          transition={{
            y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 400, damping: 17 },
          }}
        >
          {/* Shimmer */}
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent"
            aria-hidden="true"
          />

          <Sparkles className="h-4 w-4 animate-pulse" />
          {children}
          <motion.span
            className="inline-flex"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.span>
        </motion.span>
      </Link>
    </motion.div>
  );
}
