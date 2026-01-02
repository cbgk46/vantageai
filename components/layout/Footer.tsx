import Link from "next/link";
import { Linkedin, Mail, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">Gokul Krishnaa</h3>
            <p className="text-primary-300 mb-4 max-w-md">
              Practical AI that drives meaningful business outcomes for real estate, healthcare, and professional services firms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/gokulkrishnaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-primary-300 hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-primary-300 hover:text-teal-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-primary-300 hover:text-teal-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-300 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/gokulkrishnaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-300 hover:text-teal-400 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 text-primary-300 hover:text-teal-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Gokul Krishnaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

