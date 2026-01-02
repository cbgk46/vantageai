"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CredibilityStatement() {
  const credentials = [
    {
      title: "Enterprise AI Background",
      items: [
        "DataStax (LangFlow)",
        "Pre-Sales/Consult",
        "APAC deployment",
      ],
    },
    {
      title: "Production Systems Deployed",
      items: [
        "15+ AI workflows",
        "live in production",
        "across 3 industries",
      ],
    },
    {
      title: "Business Outcomes Delivered",
      items: [
        "200+ hours/month",
        "saved for clients",
        "Average 6-week ROI",
      ],
    },
  ];

  const techStack = [
    "LangFlow",
    "LangChain",
    "OpenAI",
    "Claude",
    "Make.com",
    "Python",
    "RAG Systems",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Built on Real Enterprise Experience</h2>
        </motion.div>

        {/* Three-Column Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary-900">
                {cred.title}
              </h3>
              <ul className="space-y-2 text-primary-600">
                {cred.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-primary-900">
            Technical Foundation
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-primary-50 border border-primary-200 rounded-lg text-primary-700 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-500 font-semibold transition-colors"
          >
            <span>See Technical Background</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

