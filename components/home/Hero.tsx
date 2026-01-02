"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-primary-500">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-teal-500" />
                <span>DataStax (LangFlow Team)</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>Singapore-based</span>
              <span className="hidden sm:inline">•</span>
              <span>Serving APAC/Global</span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 leading-tight">
              Production-Ready AI Systems for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                Industry Leaders
              </span>
              <br />
              Who Want Results in Weeks, Not Months
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-primary-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              I help specialty medical practices, accounting firms, and real estate
              brokerages implement AI workflows that save{" "}
              <span className="font-semibold text-primary-900">10-20 hours per week</span>—
              leveraging my experience at DataStax (the team behind LangFlow).
            </p>

            {/* Trust Badge */}
            <div className="mb-10">
              <p className="text-primary-500 text-sm mb-2">Trusted by</p>
              <p className="text-lg font-semibold text-primary-900">
                15+ businesses across 3 continents
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/assessment" className="btn-primary w-full sm:w-auto">
                Take Free AI Readiness Assessment
              </Link>
              <Link
                href="/industries"
                className="btn-secondary w-full sm:w-auto flex items-center space-x-2"
              >
                <span>View Industry-Specific Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Visual Element - Abstract workflow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16"
            >
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="h-20 bg-white rounded-lg shadow-md flex items-center justify-center"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-lg"></div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

