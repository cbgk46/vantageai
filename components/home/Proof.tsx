"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingDown, Clock, Users, Calendar } from "lucide-react";

export default function Proof() {
  const caseStudies = [
    {
      industry: "Medical",
      icon: "🏥",
      title: "Multi-Location Dermatology Practice",
      quote: "Reduced Patient Wait Time from 75min to 23min",
      challenge: "3 locations, manual scheduling, constant no-shows",
      solution: "Automated appointment system + AI-powered reminder sequences",
      results: [
        { icon: TrendingDown, label: "68% reduction in wait times", value: "68%" },
        { icon: Users, label: "40% decrease in no-shows", value: "40%" },
        { icon: Clock, label: "15 hours/week staff time saved", value: "15h" },
        { icon: Calendar, label: "Implemented in 6 weeks", value: "6w" },
      ],
      link: "/case-studies/medical-dermatology",
    },
  ];

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">What Gets Built: Real Systems, Real Results</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card col-span-1 lg:col-span-3"
            >
              <div className="flex items-start space-x-4 mb-4">
                <span className="text-4xl">{study.icon}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-accent-400/10 text-accent-600 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">
                    {study.title}
                  </h3>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <p className="text-lg font-semibold text-primary-900 italic">
                  "{study.quote}"
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-primary-500 mb-1">Challenge:</p>
                <p className="text-primary-700 mb-4">{study.challenge}</p>
                <p className="text-sm text-primary-500 mb-1">Solution:</p>
                <p className="text-primary-700">{study.solution}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {study.results.map((result, i) => (
                  <div
                    key={i}
                    className="bg-white border border-primary-200 rounded-lg p-4 text-center"
                  >
                    <result.icon className="h-6 w-6 text-teal-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-primary-900 mb-1">
                      {result.value}
                    </p>
                    <p className="text-xs text-primary-600">{result.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href={study.link}
                className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-500 font-semibold transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

