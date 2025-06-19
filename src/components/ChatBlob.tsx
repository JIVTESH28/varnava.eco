import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface ChatBlobProps {
  onClick: () => void;
}

const ChatBlob: React.FC<ChatBlobProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 p-4 rounded-full shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #7FB069 0%, #4A7C59 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 12px 40px rgba(127, 176, 105, 0.4)',
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 16px 50px rgba(127, 176, 105, 0.6)',
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <MessageCircle className="text-white" size={24} />
      
      {/* Pulse Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#7FB069]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

export default ChatBlob;