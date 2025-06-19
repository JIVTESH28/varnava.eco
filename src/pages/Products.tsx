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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Adjusted section padding */}
      <section className="relative overflow-hidden py-24 md:pb-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3F0] to-[#E8F5E8]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6"> {/* Standardized max-width */}
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
                background: 'linear-gradient(135deg, rgba(127, 176, 105, 0.2) 0%, rgba(255, 255, 255, 0.3) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              <BookOpen className="text-[#4A7C59]" size={16} />
              <span className="text-[#4A7C59] font-medium text-sm">Our Products</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#4A7C59] mb-6 leading-snug"> {/* Added leading-snug */}
              Sustainable{' '}
              <span className="bg-gradient-to-r from-[#4A7C59] to-[#7FB069] bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            
            <p className="text-md text-[#6B8E6B] max-w-3xl mx-auto leading-relaxed"> {/* Adjusted text size */}
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
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(127, 176, 105, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 12px 40px rgba(127, 176, 105, 0.2)',
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 60px rgba(127, 176, 105, 0.3)',
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
                  <h3 className="text-2xl font-semibold text-[#4A7C59] mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-md text-[#6B8E6B] mb-6 leading-relaxed"> {/* Adjusted text size */}
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[#6B8E6B]">
                        <div className="w-1.5 h-1.5 bg-[#7FB069] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    className="group/btn flex items-center space-x-2 text-[#4A7C59] font-medium hover:text-[#7FB069] transition-colors duration-300"
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
              View Full Collection
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;