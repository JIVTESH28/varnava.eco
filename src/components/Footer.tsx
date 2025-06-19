import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const footerLinks = {
    'Products': ['Notebooks', 'Mannequins', 'Writing Tools', 'Custom Orders'],
    'Company': ['About Us', 'Our Story', 'Careers', 'Press'],
    'Support': ['Contact', 'FAQ', 'Shipping', 'Returns'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Sustainability Report']
  };

  return (
    <footer className="relative bg-[#2E4F3E] overflow-hidden">
      {/* Subtle bamboo pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="bamboo" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0 L10 20 M5 5 L15 5 M5 15 L15 15" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bamboo)" className="text-white"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/imG1.jpeg" 
                alt="Varnava Logo" 
                className="h-12 w-auto"
              />
              <span className="text-3xl font-bold text-white font-serif">
                VARNAVA
              </span>
            </motion.div>
            
            <motion.p
              className="text-white/70 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Crafting sustainable excellence for conscious professionals. 
              Every product tells a story of environmental stewardship and timeless design.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 text-white/70">
                <Mail size={16} />
                <span>hello@varnava.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 3) }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-lg">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-white/70 hover:text-[#C9A46C] transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full text-white/70 hover:text-white transition-colors duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(201, 164, 108, 0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'rgba(201, 164, 108, 0.2)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-white/50 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              © 2024 Varnava. All rights reserved. Made with 🌱 for a sustainable future.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;