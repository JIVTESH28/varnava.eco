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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative py-32 overflow-hidden pt-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3F0] via-[#E8F5E8] to-[#F5F3F0]" />
        
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
                background: 'linear-gradient(135deg, rgba(127, 176, 105, 0.2) 0%, rgba(255, 255, 255, 0.3) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              <Quote className="text-[#4A7C59]" size={16} />
              <span className="text-[#4A7C59] font-medium text-sm">Testimonials</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#4A7C59] mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#4A7C59] to-[#7FB069] bg-clip-text text-transparent">
                Community Says
              </span>
            </h2>
            
            <p className="text-xl text-[#6B8E6B] max-w-3xl mx-auto leading-relaxed">
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
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(127, 176, 105, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 20px 60px rgba(127, 176, 105, 0.2)',
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
                    background: 'linear-gradient(135deg, rgba(127, 176, 105, 0.2) 0%, rgba(255, 255, 255, 0.3) 100%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="text-[#4A7C59]" size={32} />
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
                      <Star className="text-[#7FB069] fill-current" size={24} />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-serif text-[#4A7C59] mb-8 leading-relaxed">
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
                    <div className="font-semibold text-[#4A7C59] text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-[#6B8E6B]">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-[#7FB069] text-sm">
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
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(127, 176, 105, 0.2) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="text-[#4A7C59]" size={24} />
              </motion.button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#4A7C59] scale-125' 
                        : 'bg-[#A8D5A8] hover:bg-[#7FB069]'
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
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(127, 176, 105, 0.2) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="text-[#4A7C59]" size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;