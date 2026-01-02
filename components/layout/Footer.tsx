"use client";

import Link from "next/link";
import { Linkedin, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden border-t border-primary-800">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-900 to-primary-950" />

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-4 text-white">Gokul Krishnaa</h3>
            <p className="text-primary-400 mb-6 max-w-md leading-relaxed">
              Practical AI that drives meaningful business outcomes for real estate, healthcare, and professional services firms.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/gokulkrishnaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-accent-400 transition-all duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-primary-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-primary-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-primary-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/gokulkrishnaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-400 hover:text-white transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </motion.a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 text-primary-400 hover:text-white transition-all duration-300 group"
                >
                  <Mail className="h-4 w-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} Gokul Krishnaa. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

