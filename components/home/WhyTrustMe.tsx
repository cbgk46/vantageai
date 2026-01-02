"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export default function WhyTrustMe() {
  // Placeholder for headshot - will be replaced when provided
  // To add headshot: Place image at /public/headshot.jpg and set hasHeadshot to true
  const hasHeadshot = false;

  const technicalStack = [
    "LangFlow / LangChain (workflow orchestration)",
    "OpenAI / Anthropic Claude / Google Gemini",
    "Vector databases (RAG systems)",
    "Make.com / Zapier (automation platforms)",
    "Python (custom development)",
    "API integrations (CRM, communication tools)",
  ];

  const industryFocus = [
    "Healthcare practice management",
    "Accounting firm operations",
    "Real estate lead generation",
  ];

  const deploymentExperience = [
    "Multi-location coordination",
    "Cross-platform integration",
    "Compliance-aware implementations",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {hasHeadshot ? (
              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/headshot.jpg"
                  alt="Gokul Krishnaa"
                  className="w-48 h-48 object-cover rounded-xl"
                />
              </div>
            ) : (
              <div className="mb-6 w-48 h-48 bg-gradient-to-br from-accent-400 to-teal-400 rounded-xl flex items-center justify-center">
                <span className="text-6xl text-white font-bold">GK</span>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-4 text-primary-900">
              ABOUT GOKUL
            </h3>

            <div className="space-y-4 text-primary-600 mb-6">
              <p>
                I'm an AI consultant with deep technical experience at DataStax—
                the team behind LangFlow—working with enterprise clients across APAC.
              </p>
              <p>
                For the past 6 months, I've been implementing production AI systems
                for businesses in healthcare, professional services, and real estate.
              </p>
              <p>
                Here's what I've learned: Success isn't about using the fanciest AI
                models. It's about solving the right problems with proven tools,
                starting small, and scaling what works.
              </p>
              <p>
                My background in pre-sales engineering means I understand both the
                technical implementation AND the business case. I won't recommend
                AI where it doesn't make sense.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="btn-ghost inline-flex items-center space-x-2"
              >
                <span>Read Full Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.linkedin.com/in/gokulkrishnaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Connect on LinkedIn</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Technical Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-900">
              TECHNICAL EXPERTISE
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary-900 mb-3">
                  Primary Stack:
                </h4>
                <ul className="space-y-2">
                  {technicalStack.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary-900 mb-3">
                  Industry Focus:
                </h4>
                <ul className="space-y-2">
                  {industryFocus.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary-900 mb-3">
                  Deployment Experience:
                </h4>
                <ul className="space-y-2">
                  {deploymentExperience.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

