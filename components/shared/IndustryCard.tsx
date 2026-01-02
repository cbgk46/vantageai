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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card group perspective-1000"
      whileHover={{ 
        rotateY: 2,
        rotateX: -2,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-teal-500/0 group-hover:from-teal-400/5 group-hover:to-teal-500/10 rounded-2xl transition-all duration-500 pointer-events-none" />
      
      <motion.div 
        className="mb-4 p-3 bg-gradient-to-br from-teal-400/10 to-teal-500/10 rounded-lg w-fit group-hover:from-teal-400/20 group-hover:to-teal-500/30 transition-all duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        {/* Glow effect on icon container */}
        <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon className="h-8 w-8 text-teal-500 relative z-10 group-hover:text-teal-400 transition-colors duration-300" />
      </motion.div>
      
      <h3 className="text-xl font-semibold mb-3 text-primary-900 group-hover:text-teal-600 transition-all duration-300">{title}</h3>
      <p className="text-primary-600 mb-4 leading-relaxed">{preview}</p>
      <Link
        href={href}
        className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-all duration-300 group/link"
      >
        <span className="group-hover/link:translate-x-1 transition-transform duration-300">Learn More</span>
        <motion.svg
          className="ml-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </Link>
    </motion.div>
  );
}
