"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const principles = [
  "Business outcomes before technical complexity",
  "ROI-focused implementations, not experiments",
  "Industry-specific solutions, not generic templates",
  "Long-term partnership, not one-off projects"
];

export default function Approach() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4">Strategic Partnership, Not Just Implementation</h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-primary-600 leading-relaxed mb-6">
                We work closely with founders and executives as a long-term AI partner — helping them navigate what to adopt, what to ignore, and how to turn AI into a sustained business advantage over time.
              </p>
              <p className="text-lg font-semibold text-primary-900">
                This isn't about chasing every new AI feature. It's about disciplined focus on what moves your specific business forward.
              </p>
            </motion.div>

            {/* Right Column - Key Principles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Our Principles</h3>
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.li
                    key={principle}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-primary-700">{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
