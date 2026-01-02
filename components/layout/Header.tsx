"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full glass-strong border-b z-50 transition-all duration-500 ease-apple ${
        scrolled ? 'border-primary-200/60 shadow-soft' : 'border-primary-200/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-500 ease-apple ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          <Link 
            href="/" 
            className="text-xl font-heading font-semibold text-primary-900 tracking-tight transition-transform duration-300 hover:scale-105"
          >
            VantageAI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-sm text-primary-600 hover:text-primary-900 transition-all duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/services" 
              className="text-sm text-primary-600 hover:text-primary-900 transition-all duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/industries" 
              className="text-sm text-primary-600 hover:text-primary-900 transition-all duration-300 relative group"
            >
              Industries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/insights" 
              className="text-sm text-primary-600 hover:text-primary-900 transition-all duration-300 relative group"
            >
              Insights
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2">
              Start a Conversation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-primary-900" />
            ) : (
              <Menu className="h-5 w-5 text-primary-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-6 border-t border-primary-200/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col space-y-5">
                <Link 
                  href="/" 
                  className="text-base text-primary-600 hover:text-primary-900 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className="text-base text-primary-600 hover:text-primary-900 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/industries" 
                  className="text-base text-primary-600 hover:text-primary-900 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industries
                </Link>
                <Link 
                  href="/insights" 
                  className="text-base text-primary-600 hover:text-primary-900 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insights
                </Link>
                <Link 
                  href="/contact" 
                  className="btn-primary text-sm px-5 py-2 w-fit"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a Conversation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

