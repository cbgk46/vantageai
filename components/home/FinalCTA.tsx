"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-white">Ready to Turn AI Into Business Results?</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss where AI can create the most value for your organization — and how to get there with clarity and confidence.
            </p>
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary-900 hover:bg-primary-50 inline-flex items-center"
            >
              Schedule a Conversation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

