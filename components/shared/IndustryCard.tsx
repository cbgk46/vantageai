"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  preview: string;
  href: string;
  index: number;
}

export default function IndustryCard({
  icon: Icon,
  title,
  preview,
  href,
  index
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="mb-4 p-3 bg-gradient-to-br from-teal-400/10 to-teal-500/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-200">
        <Icon className="h-8 w-8 text-teal-500" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary-900">{title}</h3>
      <p className="text-primary-600 mb-4 leading-relaxed">{preview}</p>
      <Link
        href={href}
        className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
      >
        Learn More
        <svg
          className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}
