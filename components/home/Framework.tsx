"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Framework() {
  const phases = [
    {
      number: "1",
      title: "AUDIT",
      duration: "Week 1",
      subtitle: "DISCOVERY",
      items: [
        "Map workflows",
        "Identify opportunities",
        "Prioritize by ROI",
      ],
      deliverable: "AI Opportunity Scorecard",
    },
    {
      number: "2",
      title: "PILOT",
      duration: "Weeks 2-4",
      subtitle: "PROOF",
      items: [
        "Build 1-2 systems",
        "Train team",
        "Measure savings",
      ],
      deliverable: "Working AI System",
    },
    {
      number: "3",
      title: "SCALE",
      duration: "Ongoing",
      subtitle: "GROWTH",
      items: [
        "Deploy more workflows",
        "Optimize performance",
        "Strategic advisory",
      ],
      deliverable: "Continuous improvement",
    },
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
          <h2 className="mb-4">The 3-Phase Implementation System</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-400 to-teal-400 z-0"></div>
              )}

              <div className="card relative z-10 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {phase.number}
                  </div>
                  <span className="text-sm text-primary-500 font-medium">
                    {phase.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-primary-900">
                  PHASE {phase.number}: {phase.title}
                </h3>
                <p className="text-sm text-accent-500 font-semibold mb-4">
                  {phase.subtitle}
                </p>

                <ul className="space-y-2 mb-6">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-primary-200">
                  <p className="text-sm text-primary-500 mb-1">Deliverable:</p>
                  <p className="font-semibold text-primary-900">
                    {phase.deliverable}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-500 font-semibold transition-colors"
          >
            <span>See Real Implementation Examples</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

