import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description: 'Crafted from recycled and eco-friendly materials'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Uncompromising excellence in every product'
    },
    {
      icon: Heart,
      title: 'Conscious Design',
      description: 'Thoughtfully designed for modern professionals'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Contributing to a more sustainable world'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-[#F4F1EA]/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <Leaf className="text-[#2E4F3E]" size={16} />
              <span className="text-[#2E4F3E] font-medium text-sm">About Varnava</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#2E4F3E] mb-6 leading-tight">
              Nature-Inspired.{' '}
              <span className="bg-gradient-to-r from-[#2E4F3E] to-[#C9A46C] bg-clip-text text-transparent">
                Future-Focused.
              </span>
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              At Varnava, sustainability meets sophistication. We curate premium, 
              eco-conscious products with purpose and pride, creating tools that 
              inspire conscious living while maintaining the highest standards of 
              professional excellence.
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our commitment extends beyond products to encompass a philosophy of 
              responsible innovation, where every item tells a story of environmental 
              stewardship and timeless design.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(244, 241, 234, 0.1) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <feature.icon className="text-[#2E4F3E] mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-[#2E4F3E] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div 
              className="relative h-[600px] rounded-3xl overflow-hidden"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                alt="Sustainable workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E4F3E]/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-8 -left-8 p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(244, 241, 234, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-[#2E4F3E] mb-1">10K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </motion.div>

            <motion.div
              className="absolute -top-8 -right-8 p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(244, 241, 234, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-[#C9A46C] mb-1">100%</div>
              <div className="text-sm text-gray-600">Eco-Friendly</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;