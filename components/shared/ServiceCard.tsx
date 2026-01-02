"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  index
}: ServiceCardProps) {
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
      <div className="absolute inset-0 bg-gradient-to-br from-accent-400/0 to-accent-500/0 group-hover:from-accent-400/5 group-hover:to-accent-500/10 rounded-2xl transition-all duration-500 pointer-events-none" />
      
      <motion.div 
        className="mb-4 p-3 bg-gradient-to-br from-accent-400/10 to-accent-500/10 rounded-lg w-fit group-hover:from-accent-400/20 group-hover:to-accent-500/30 transition-all duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        {/* Glow effect on icon container */}
        <div className="absolute inset-0 bg-accent-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon className="h-8 w-8 text-accent-500 relative z-10 group-hover:text-accent-400 transition-colors duration-300" />
      </motion.div>
      
      <h3 className="text-xl font-semibold mb-3 text-primary-900 group-hover:text-gradient transition-all duration-300">{title}</h3>
      <p className="text-primary-600 mb-4 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-accent-500 font-semibold hover:text-accent-600 transition-all duration-300 group/link"
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
