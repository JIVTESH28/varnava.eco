import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#F4F1EA] via-white to-[#F4F1EA]"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-[#2E4F3E]/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Leaf size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-[#C9A46C]/30"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      >
        <Sparkles size={40} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(46, 79, 62, 0.1) 0%, rgba(201, 164, 108, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Leaf className="text-[#2E4F3E]" size={20} />
            <span className="text-[#2E4F3E] font-medium">Sustainably Crafted</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-8xl font-serif font-bold text-[#2E4F3E] mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Eco-Essentials for a{' '}
            <span className="bg-gradient-to-r from-[#2E4F3E] to-[#C9A46C] bg-clip-text text-transparent">
              Greener Future
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Discover sustainable notebooks, stationery, and display products — 
            elegantly crafted for conscious living and professional excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              className="group relative px-8 py-4 rounded-full text-white font-semibold text-lg overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #2E4F3E 0%, #4CAF50 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 12px 40px rgba(46, 79, 62, 0.3)',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 16px 50px rgba(46, 79, 62, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Collection</span>
                <ArrowRight 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                  size={20} 
                />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C9A46C] to-[#2E4F3E]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>

            <motion.button
              className="px-8 py-4 rounded-full font-semibold text-lg text-[#2E4F3E] border-2 border-[#2E4F3E]/20 hover:border-[#2E4F3E]/40 transition-all duration-300"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(46, 79, 62, 0.05)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn Our Story
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#2E4F3E]/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-[#2E4F3E] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;