import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Mishra Sales & Services
            </h3>
            <div className="space-y-3">
              <p className="flex items-start text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>New B-769, Old-B-220, Third Floor, New Ashok Nagar, Delhi-110096</span>
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  <Link className="hover:text-blue-600 dark:hover:text-blue-400" to="tel:+919990126163">9990126163</Link> | 
                  <Link className="hover:text-blue-600 dark:hover:text-blue-400 ml-2" to="tel:+918178424320">8178424320</Link>
                </span>
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <Link className="hover:text-blue-600 dark:hover:text-blue-400" to="mailto:contact@mss.com">contact@mss.com</Link>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Products
              </Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Mishra Sales & Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
