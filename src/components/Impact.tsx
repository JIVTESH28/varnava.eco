import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Droplets, Recycle, Globe } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    {
      icon: TreePine,
      number: '50K+',
      label: 'Trees Saved',
      description: 'Through our recycled paper initiatives'
    },
    {
      icon: Droplets,
      number: '2M+',
      label: 'Liters Water Conserved',
      description: 'By using sustainable production methods'
    },
    {
      icon: Recycle,
      number: '100K+',
      label: 'Items Recycled',
      description: 'Diverted from landfills annually'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Reached',
      description: 'Spreading sustainability worldwide'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
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
        <div className="absolute inset-0 bg-[#2E4F3E]/80 backdrop-blur-sm" />
      </div>

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
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(201, 164, 108, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Globe className="text-white" size={16} />
            <span className="text-white font-medium text-sm">Our Impact</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Making a{' '}
            <span className="bg-gradient-to-r from-white to-[#C9A46C] bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every product you choose creates a ripple effect of positive change. 
            Here's how we're transforming the world together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(201, 164, 108, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(201, 164, 108, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="text-[#C9A46C]" size={32} />
              </motion.div>

              {/* Number */}
              <motion.div
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-[#C9A46C] mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div 
            className="inline-block p-8 rounded-3xl max-w-4xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(201, 164, 108, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <h3 className="text-2xl font-serif font-semibold text-white mb-4">
              "Sustainability is not just a choice, it's our responsibility to future generations."
            </h3>
            <p className="text-white/80">
              — Varnava Sustainability Team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;