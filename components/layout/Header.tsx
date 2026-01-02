"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-primary-200 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl font-heading font-bold text-primary-900">
            VantageAI
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary-600 hover:text-accent-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-primary-600 hover:text-accent-400 transition-colors">
              Services
            </Link>
            <Link href="/industries" className="text-primary-600 hover:text-accent-400 transition-colors">
              Industries
            </Link>
            <Link href="/insights" className="text-primary-600 hover:text-accent-400 transition-colors">
              Insights
            </Link>
            <Link href="/contact" className="btn-primary text-sm px-6 py-2.5">
              Start a Conversation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary-900" />
            ) : (
              <Menu className="h-6 w-6 text-primary-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-primary-600 hover:text-accent-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-primary-600 hover:text-accent-400 transition-colors">
                Services
              </Link>
              <Link href="/industries" className="text-primary-600 hover:text-accent-400 transition-colors">
                Industries
              </Link>
              <Link href="/insights" className="text-primary-600 hover:text-accent-400 transition-colors">
                Insights
              </Link>
              <Link href="/contact" className="btn-primary text-sm px-6 py-2.5 w-fit">
                Start a Conversation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

