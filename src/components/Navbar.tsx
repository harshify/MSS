import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">MSS</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname === '/' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname.includes('/products') ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname === '/contact' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - with transition */}
      <div 
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      <div 
        className={`md:hidden fixed top-16 right-0 bottom-0 w-full max-w-xs bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 pt-6 pb-8 h-full overflow-y-auto">
          <div className="space-y-6">
            <Link
              to="/"
              className={`block py-3 px-4 text-lg font-medium rounded-md ${
                location.pathname === '/' 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block py-3 px-4 text-lg font-medium rounded-md ${
                location.pathname.includes('/products') 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`block py-3 px-4 text-lg font-medium rounded-md ${
                location.pathname === '/about' 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block py-3 px-4 text-lg font-medium rounded-md ${
                location.pathname === '/contact' 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="px-4 text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Mishra Sales & Services
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}