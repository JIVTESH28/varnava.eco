import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, ShoppingBag, Menu } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'impact', label: 'Impact', path: '/impact' },
    { id: 'testimonials', label: 'Testimonials', path: '/testimonials' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const currentPath = location.pathname;
  const activeItem = navItems.find(item => item.path === currentPath)?.id || 'home';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/20 border-b border-[#7FB069]/20 shadow-lg' 
          : 'backdrop-blur-sm bg-white/10'
      }`}
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/imG1.jpeg" 
                alt="Varnava Logo" 
                className="h-12 w-auto rounded-lg shadow-sm"
              />
              <span className="text-2xl font-bold text-[#4A7C59] font-serif">
                VARNAVA
              </span>
            </motion.div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex relative items-center space-x-2 px-4 py-2 rounded-full"
               style={{
                 background: 'linear-gradient(135deg, rgba(127, 176, 105, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
                 backdropFilter: 'blur(10px)',
                 WebkitBackdropFilter: 'blur(10px)',
                 border: '1px solid rgba(255, 255, 255, 0.3)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
               }}>
            
            {/* Liquid Blob Background */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(127, 176, 105, 0.3) 0%, rgba(74, 124, 89, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 4px 20px rgba(127, 176, 105, 0.3)',
              }}
              animate={{
                x: hoveredItem 
                  ? navItems.findIndex(item => item.id === hoveredItem) * 110 + 8
                  : navItems.findIndex(item => item.id === activeItem) * 110 + 8,
                width: hoveredItem || activeItem ? 94 : 0,
                height: hoveredItem || activeItem ? 36 : 0,
                opacity: hoveredItem || activeItem ? 1 : 0,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                duration: 0.3 
              }}
            />

            {navItems.map((item, index) => (
              <Link key={item.id} to={item.path}>
                <motion.div
                  className={`relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeItem === item.id || hoveredItem === item.id
                      ? 'text-[#4A7C59]'
                      : 'text-[#6B8E6B] hover:text-[#4A7C59]'
                  }`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right Side Actions - Hidden on mobile, hamburger shown instead */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Login Button */}
            <motion.button
              onClick={onLoginClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-[#4A7C59] font-medium"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(127, 176, 105, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(127, 176, 105, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={18} />
              <span className="text-sm">Login</span>
            </motion.button>

            {/* Shop Button */}
            <motion.button
              className="flex items-center space-x-2 px-6 py-3 rounded-full text-white font-medium overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #7FB069 0%, #4A7C59 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(127, 176, 105, 0.4)',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 12px 40px rgba(127, 176, 105, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ShoppingBag size={18} />
              <span className="text-sm">Shop Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#A8D5A8] to-[#7FB069]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Hamburger Menu Button - visible only on mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#4A7C59] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#7FB069]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <Menu size={28} /> {/* Slightly larger icon for mobile */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl z-40 border-t border-[#7FB069]/20"
          // Calculate actual navbar height: py-4 (1rem top, 1rem bottom) + logo h-12 (3rem) = 5rem.
          // So, top-full should correctly position it if <nav> is the relative parent.
          // Since <nav> is fixed, top-full might not work as expected if not direct child for positioning.
          // Let's ensure the nav itself is a positioning context or use fixed positioning for the mobile menu too.
          // The <motion.nav> is fixed. `absolute top-full` should work if this mobile menu div is a direct child of motion.nav
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="block px-3 py-3 rounded-md text-base font-medium text-[#4A7C59] hover:bg-[#E8F5E8] transition-colors duration-150"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </Link>
            ))}
            {/* Optional: Add mobile-specific Login/Shop buttons here */}
            {/* Example:
            <div className="pt-4 pb-2 border-t border-gray-200">
              <motion.button
                onClick={() => { setIsMobileMenuOpen(false); onLoginClick(); }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-[#4A7C59] font-medium hover:bg-[#E8F5E8] transition-colors duration-150"
              >
                <User size={20} />
                <span className="text-base">Login</span>
              </motion.button>
              <motion.button
                // onClick={() => { setIsMobileMenuOpen(false); / navigate to shop / }}
                className="mt-2 w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-white font-medium bg-gradient-to-r from-[#7FB069] to-[#4A7C59] hover:opacity-90 transition-opacity duration-150"
              >
                <ShoppingBag size={20} />
                <span className="text-base">Shop Now</span>
              </motion.button>
            </div>
            */}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;