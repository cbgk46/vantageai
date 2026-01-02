"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export default function IndustryProblems() {
  const industries = [
    {
      name: "Medical Practices",
      problems: [
        "75-minute patient wait times",
        "No-shows costing ₹2-5L/month",
        "Manual scheduling chaos",
        "Multi-location coordination nightmare",
      ],
      link: "/industries/medical",
      bgColor: "bg-primary-900",
    },
    {
      name: "Accounting Firms",
      problems: [
        "69% cite staffing as #1 challenge",
        "60+ hour weeks during tax season",
        "Xero/MYOB/QuickBooks don't talk",
        "Manual data entry killing margins",
      ],
      link: "/industries/accounting",
      bgColor: "bg-primary-800",
    },
    {
      name: "Real Estate Brokerages",
      problems: [
        "15,000+ brokers, same materials",
        "AED 60-120 per lead (80% junk)",
        "Drowning in manual follow-ups",
        "Can't differentiate from competition",
      ],
      link: "/industries/realestate",
      bgColor: "bg-primary-900",
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
          <h2 className="mb-4">If This Sounds Familiar, You're in the Right Place</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${industry.bgColor} text-white rounded-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-6">{industry.name}</h3>
              <ul className="space-y-3 mb-8">
                {industry.problems.map((problem, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <X className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-100">{problem}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={industry.link}
                className="inline-flex items-center space-x-2 text-white hover:text-teal-400 font-semibold transition-colors group"
              >
                <span>See {industry.name} Solutions</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

