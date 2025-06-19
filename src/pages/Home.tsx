import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3F0]/80 via-[#E8F5E8]/70 to-[#D4E6D4]/80 backdrop-blur-sm" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-10 text-[#7FB069]/30"
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
          className="absolute bottom-32 right-10 text-[#A8D5A8]/40"
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
                background: 'linear-gradient(135deg, rgba(127, 176, 105, 0.2) 0%, rgba(255, 255, 255, 0.3) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 32px rgba(127, 176, 105, 0.2)',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Leaf className="text-[#4A7C59]" size={20} />
              <span className="text-[#4A7C59] font-medium">Sustainably Crafted</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-6xl font-serif font-bold text-[#4A7C59] mb-6 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Eco-Essentials for a{' '}
              <span className="bg-gradient-to-r from-[#4A7C59] to-[#7FB069] bg-clip-text text-transparent">
                Greener Future
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-[#6B8E6B] mb-12 max-w-4xl mx-auto leading-relaxed"
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
                  background: 'linear-gradient(135deg, #7FB069 0%, #4A7C59 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 12px 40px rgba(127, 176, 105, 0.4)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 16px 50px rgba(127, 176, 105, 0.5)',
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
                  className="absolute inset-0 bg-gradient-to-r from-[#A8D5A8] to-[#7FB069]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                className="px-8 py-4 rounded-full font-semibold text-lg text-[#4A7C59] border-2 border-[#7FB069]/30 hover:border-[#7FB069]/50 transition-all duration-300"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(127, 176, 105, 0.1)',
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
            <div className="w-6 h-10 border-2 border-[#7FB069]/40 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-[#7FB069] rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Key Offerings Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-center text-[#4A7C59] mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Key Offerings
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Offering 1 */}
            <motion.div
              className="p-8 bg-[#F5F3F0] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Leaf size={40} className="mx-auto mb-6 text-[#7FB069]" />
              <h3 className="text-xl font-semibold text-[#4A7C59] mb-4 text-center">Sustainable Notebooks</h3>
              <p className="text-[#6B8E6B] text-sm leading-relaxed text-center">
                Beautifully crafted notebooks from recycled and sustainable materials, perfect for the eco-conscious professional.
              </p>
            </motion.div>
            {/* Offering 2 */}
            <motion.div
              className="p-8 bg-[#F5F3F0] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Sparkles size={40} className="mx-auto mb-6 text-[#7FB069]" /> {/* Using Sparkles as another example icon */}
              <h3 className="text-xl font-semibold text-[#4A7C59] mb-4 text-center">Eco-Friendly Stationery</h3>
              <p className="text-[#6B8E6B] text-sm leading-relaxed text-center">
                A range of stationery that combines design, functionality, and commitment to the environment.
              </p>
            </motion.div>
            {/* Offering 3 */}
            <motion.div
              className="p-8 bg-[#F5F3F0] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Placeholder for a different icon - could use another from Lucide or custom */}
              <div className="w-10 h-10 mx-auto mb-6 text-[#7FB069] flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4A7C59] mb-4 text-center">Custom Display Products</h3>
              <p className="text-[#6B8E6B] text-sm leading-relaxed text-center">
                Bespoke display solutions designed with sustainability and your brand's uniqueness in mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? Section */}
      <section className="py-16 md:py-24 bg-[#E8F5E8]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-center text-[#4A7C59] mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Varnava?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Benefit 1 */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#4A7C59] mb-4 text-center">Commitment to Sustainability</h3>
              <p className="text-[#6B8E6B] text-md leading-relaxed text-center">
                We are dedicated to providing high-quality products that are kind to the planet, helping your business meet its green objectives.
              </p>
            </motion.div>
            {/* Benefit 2 */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#4A7C59] mb-4 text-center">Elegant & Professional Design</h3>
              <p className="text-[#6B8E6B] text-md leading-relaxed text-center">
                Our products are designed to impress, adding a touch of sophistication to your brand's image and workspace.
              </p>
            </motion.div>
            {/* Benefit 3 */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#4A7C59] mb-4 text-center">Bespoke B2B Solutions</h3>
              <p className="text-[#6B8E6B] text-md leading-relaxed text-center">
                We partner with businesses to provide tailored solutions that align with your brand values and operational needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;