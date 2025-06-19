import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      company: 'Design Studio Pro',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      quote: 'Varnava\'s notebooks have transformed our creative process. The quality is exceptional, and knowing they\'re eco-friendly makes every sketch feel meaningful.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Retail Manager',
      company: 'EcoFashion Boutique',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      quote: 'The biodegradable mannequins are a game-changer for our sustainable fashion displays. Professional quality with zero environmental guilt.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Environmental Scientist',
      company: 'Green Research Institute',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      quote: 'As someone who studies environmental impact daily, I appreciate Varnava\'s genuine commitment to sustainability without compromising on quality.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F1EA] via-white to-[#F4F1EA]" />
      
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
            <Quote className="text-[#2E4F3E]" size={16} />
            <span className="text-[#2E4F3E] font-medium text-sm">Testimonials</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#2E4F3E] mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#2E4F3E] to-[#C9A46C] bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have made the switch to sustainable excellence.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="p-12 rounded-3xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(244, 241, 234, 0.4) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(46, 79, 62, 0.1) 0%, rgba(201, 164, 108, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Quote className="text-[#2E4F3E]" size={32} />
              </motion.div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star className="text-[#C9A46C] fill-current" size={24} />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-serif text-[#2E4F3E] mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/50"
                />
                <div className="text-left">
                  <div className="font-semibold text-[#2E4F3E] text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-[#C9A46C] text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(244, 241, 234, 0.2) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="text-[#2E4F3E]" size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#2E4F3E] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(244, 241, 234, 0.2) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-[#2E4F3E]" size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;