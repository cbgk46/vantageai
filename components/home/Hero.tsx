"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Animated Gradient Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-70 animate-gradient-shift bg-[length:200%_200%]" />

      {/* Subtle noise texture overlay for depth (Apple-style) */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")" }}
      />

      {/* Floating blur layers for depth */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent-400/12 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/12 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/8 rounded-full blur-3xl animate-breath" />

      <motion.div 
        style={{ y, opacity }}
        className="container-custom relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Headline */}
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Practical AI That Drives{" "}
              <motion.span 
                className="text-gradient"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Meaningful Business Outcomes
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-xl md:text-2xl text-primary-600 mb-8 max-w-4xl mx-auto font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              We partner with leadership teams to apply AI in ways that directly support their business goals — whether that's improving margins, enhancing customer experience, increasing operational confidence, or enabling smarter growth.
            </motion.p>

            <motion.p 
              className="text-lg font-medium text-primary-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              You don't need more ideas about AI. You need clarity, direction, and results.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Start a Conversation
              </Link>
              <Link
                href="#services"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - fades out on scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ opacity: scrollIndicatorOpacity }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-primary-400"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
              <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className="opacity-60">
                <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="2"/>
                <motion.circle
                  cx="10"
                  cy="10"
                  r="3"
                  fill="currentColor"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

