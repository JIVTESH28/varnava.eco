import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Leaf } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative py-32 overflow-hidden pt-32">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A7C59]/90 to-[#4A7C59]/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(127, 176, 105, 0.2) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Leaf className="text-[#A8D5A8]" size={16} />
              <span className="text-white font-medium text-sm">Join the Movement</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Ready to Make a{' '}
              <span className="bg-gradient-to-r from-white to-[#A8D5A8] bg-clip-text text-transparent">
                Difference?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of conscious professionals who choose sustainability 
              without compromising on quality. Your journey to eco-excellence starts here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <motion.button
                className="group relative px-8 py-4 rounded-full text-[#4A7C59] font-semibold text-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 243, 240, 0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 16px 50px rgba(0, 0, 0, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Browse Collection</span>
                  <ArrowRight 
                    className="group-hover:translate-x-1 transition-transform duration-300" 
                    size={20} 
                  />
                </span>
              </motion.button>

              <motion.button
                className="px-8 py-4 rounded-full font-semibold text-lg text-white border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Partner
              </motion.button>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(127, 176, 105, 0.2) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Mail className="text-[#A8D5A8]" size={20} />
                  <span className="text-white font-medium">Stay Updated</span>
                </div>
                
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 backdrop-blur-sm"
                  />
                  <motion.button
                    className="px-6 py-3 rounded-full bg-[#7FB069] text-white font-medium hover:bg-[#7FB069]/90 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;