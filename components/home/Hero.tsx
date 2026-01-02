"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h1 className="mb-6 leading-tight">
              Practical AI That Drives{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                Meaningful Business Outcomes
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-primary-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We partner with leadership teams to apply AI in ways that directly support their business goals — whether that's improving margins, enhancing customer experience, increasing operational confidence, or enabling smarter growth.
            </p>

            <p className="text-lg font-semibold text-primary-900 mb-12">
              You don't need more ideas about AI. You need clarity, direction, and results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Start a Conversation
              </Link>
              <Link
                href="#services"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

