"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, FileText, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">See What's Possible for Your Business</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* High-Intent Path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="h-8 w-8 text-teal-400" />
              <h3 className="text-2xl font-bold">BOOK STRATEGY CALL</h3>
            </div>
            <ul className="space-y-3 mb-6 text-primary-100">
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 mt-1">•</span>
                <span>30-minute conversation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 mt-1">•</span>
                <span>Discuss your challenges</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 mt-1">•</span>
                <span>See if we're a fit</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 mt-1">•</span>
                <span>No obligation</span>
              </li>
            </ul>
            <a
              href="https://calendly.com/krishnaa-gokul/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-primary-900 hover:bg-primary-50 w-full flex items-center justify-center space-x-2"
            >
              <span>Schedule Call</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Low-Risk Path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-8 w-8 text-accent-400" />
              <h3 className="text-2xl font-bold">AI READINESS ASSESSMENT</h3>
            </div>
            <ul className="space-y-3 mb-6 text-primary-100">
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 mt-1">•</span>
                <span>Free 10-minute quiz</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 mt-1">•</span>
                <span>Instant report</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 mt-1">•</span>
                <span>Zero commitment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 mt-1">•</span>
                <span>Personalized roadmap</span>
              </li>
            </ul>
            <Link
              href="/assessment"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900 w-full flex items-center justify-center space-x-2"
            >
              <span>Start Assessment</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

