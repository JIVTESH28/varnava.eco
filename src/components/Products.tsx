import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, PenTool, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      icon: BookOpen,
      title: 'Recycled Notebooks',
      description: 'Premium notebooks crafted from 100% recycled materials',
      image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Acid-free paper', 'Durable binding', 'Multiple sizes']
    },
    {
      icon: Users,
      title: 'Eco Display Mannequins',
      description: 'Biodegradable mannequins for sustainable retail displays',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Biodegradable materials', 'Professional finish', 'Custom sizing']
    },
    {
      icon: PenTool,
      title: 'Conscious Writing Essentials',
      description: 'Sustainable pens and writing tools for everyday use',
      image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Refillable design', 'Ergonomic grip', 'Eco-friendly ink']
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F1EA] to-white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(46, 79, 62, 0.1) 0%, rgba(201, 164, 108, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <BookOpen className="text-[#2E4F3E]" size={16} />
            <span className="text-[#2E4F3E] font-medium text-sm">Our Products</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#2E4F3E] mb-6">
            Sustainable{' '}
            <span className="bg-gradient-to-r from-[#2E4F3E] to-[#C9A46C] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of eco-conscious products, 
            each designed to elevate your professional life while protecting our planet.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(244, 241, 234, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 p-3 rounded-full bg-white/20 backdrop-blur-sm">
                  <product.icon className="text-white" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2E4F3E] mb-3">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#C9A46C] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className="group/btn flex items-center space-x-2 text-[#2E4F3E] font-medium hover:text-[#C9A46C] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>View Details</span>
                  <ArrowRight 
                    className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                    size={16} 
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 rounded-full text-white font-semibold text-lg"
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
            View Full Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;