import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User } from 'lucide-react';

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Varnava. How can I help you with our eco-friendly products today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our sustainable product collection.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-20 right-8 z-50 w-96 h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 243, 240, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#7FB069]/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7FB069] to-[#4A7C59] flex items-center justify-center">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[#4A7C59]">Varnava Support</h3>
                <p className="text-xs text-[#6B8E6B]">Online now</p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#7FB069]/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="text-[#6B8E6B]" size={20} />
            </motion.button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto h-80">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${msg.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.isBot 
                      ? 'bg-gradient-to-r from-[#7FB069] to-[#4A7C59]' 
                      : 'bg-gradient-to-r from-[#A8D5A8] to-[#7FB069]'
                  }`}>
                    {msg.isBot ? <Bot size={16} className="text-white" /> : <User size={16} className="text-white" />}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    msg.isBot 
                      ? 'bg-white/50 text-[#4A7C59]' 
                      : 'bg-gradient-to-r from-[#7FB069] to-[#4A7C59] text-white'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#7FB069]/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full bg-white/50 border border-[#7FB069]/20 focus:outline-none focus:border-[#7FB069]/40 text-[#4A7C59] placeholder-[#6B8E6B]"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              />
              <motion.button
                onClick={sendMessage}
                className="p-2 rounded-full bg-gradient-to-r from-[#7FB069] to-[#4A7C59] text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatPanel;