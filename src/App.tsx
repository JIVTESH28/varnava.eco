import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ChatBlob from './components/ChatBlob';
import ChatPanel from './components/ChatPanel';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Impact from './pages/Impact';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#F5F3F0] to-[#E8F5E8]">
        <Navbar onLoginClick={() => setIsLoginOpen(true)} />
        
        <div className="pt-24">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        </div>

        {/* Floating Chat Blob */}
        <ChatBlob onClick={() => setIsChatOpen(true)} />

        {/* Chat Panel */}
        <ChatPanel 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
        />

        {/* Login Modal */}
        <LoginModal 
          isOpen={isLoginOpen} 
          onClose={() => setIsLoginOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;