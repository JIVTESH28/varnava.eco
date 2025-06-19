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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Adjusted section padding, removed pt-32 as global pt-24 exists */}
      <section className="relative overflow-hidden py-24 md:py-32">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3F0]/90 to-[#E8F5E8]/90 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6"> {/* Standardized max-width */}
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
                  background: 'linear-gradient(135deg, rgba(127, 176, 105, 0.2) 0%, rgba(255, 255, 255, 0.3) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                }}
              >
                <Leaf className="text-[#4A7C59]" size={16} />
                <span className="text-[#4A7C59] font-medium text-sm">About Varnava</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#4A7C59] mb-6 leading-snug"> {/* Adjusted leading */}
                Nature-Inspired.{' '}
                <span className="bg-gradient-to-r from-[#4A7C59] to-[#7FB069] bg-clip-text text-transparent">
                  Future-Focused.
                </span>
              </h2>

              <p className="text-md text-[#6B8E6B] mb-6 leading-relaxed"> {/* Adjusted text size and margin */}
                At Varnava, sustainability meets sophistication. We curate premium, 
                eco-conscious products with purpose and pride, creating tools that 
                inspire conscious living while maintaining the highest standards of 
                professional excellence.
              </p>

              <p className="text-md text-[#6B8E6B] mb-10 leading-relaxed"> {/* Adjusted text size and margin */}
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
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(127, 176, 105, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(127, 176, 105, 0.2)',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 12px 40px rgba(127, 176, 105, 0.3)',
                    }}
                  >
                    <feature.icon className="text-[#4A7C59] mb-4" size={32} />
                    <h3 className="text-lg font-semibold text-[#4A7C59] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B8E6B] text-sm leading-relaxed">
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
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 60px rgba(127, 176, 105, 0.2)',
                }}
              >
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                  alt="Sustainable workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A7C59]/20 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-8 -left-8 p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 243, 240, 0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 12px 40px rgba(127, 176, 105, 0.3)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-[#4A7C59] mb-1">10K+</div>
                <div className="text-sm text-[#6B8E6B]">Happy Customers</div>
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 243, 240, 0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 12px 40px rgba(127, 176, 105, 0.3)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-[#7FB069] mb-1">100%</div>
                <div className="text-sm text-[#6B8E6B]">Eco-Friendly</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;