"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const insights = [
  {
    title: "How to Evaluate AI ROI in Your Business",
    excerpt: "A practical framework for measuring the real impact of AI implementations beyond the hype.",
    date: "Dec 15, 2025",
    href: "/insights/evaluating-ai-roi"
  },
  {
    title: "Why Most AI Projects Fail (And How to Avoid It)",
    excerpt: "Learn from common pitfalls in AI adoption and discover proven strategies for successful implementation.",
    date: "Dec 8, 2025",
    href: "/insights/why-ai-projects-fail"
  },
  {
    title: "AI Strategy for Growing Professional Services Firms",
    excerpt: "Specific tactics for accounting firms, medical practices, and real estate agencies to leverage AI effectively.",
    date: "Dec 1, 2025",
    href: "/insights/ai-strategy-professional-services"
  }
];

export default function InsightsPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">Insights & Resources</h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Practical guidance on AI strategy, implementation, and industry trends.
          </p>
        </div>

        {/* Insights Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              {/* Placeholder Image */}
              <div className="mb-4 h-48 bg-gradient-to-br from-accent-400/20 to-accent-500/20 rounded-lg flex items-center justify-center">
                <div className="text-primary-400 text-sm font-semibold">Article Image</div>
              </div>

              {/* Date */}
              <div className="flex items-center text-sm text-primary-500 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{insight.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-primary-900 group-hover:text-accent-500 transition-colors">
                {insight.title}
              </h3>

              {/* Excerpt */}
              <p className="text-primary-600 mb-4 leading-relaxed">
                {insight.excerpt}
              </p>

              {/* Read More Link */}
              <Link
                href={insight.href}
                className="inline-flex items-center text-accent-500 font-semibold hover:text-accent-600 transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/insights" className="btn-secondary inline-flex items-center">
            <span>View All Insights</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
