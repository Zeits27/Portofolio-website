import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skill' },
    { name: 'Projects', id: 'project' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="w-full px-8 py-6" style={{ backgroundColor: '#B2D9DB' }}>
      <div className="flex items-center justify-center md:justify-center max-w-7xl mx-auto w-full relative">
        {/* Burger button only on mobile, absolutely positioned to the left */}
        <motion.button 
          onClick={toggleMenu} 
          className="md:hidden absolute left-0 p-2"
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
            />
          </svg>
        </motion.button>

        {/* Centered nav links (desktop only) */}
        <div className="hidden md:flex gap-6 font-medium">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#D4494C] hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ 
              duration: 0.4, 
              ease: 'easeInOut',
              height: { duration: 0.3 }
            }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col gap-4 mt-4 font-medium px-4 py-4"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    delay: index * 0.1 + 0.2, 
                    duration: 0.3,
                    ease: 'easeOut'
                  }}
                  className="py-2 px-4 rounded-md hover:bg-white/30 hover:text-[#D4494C] transition-all duration-200 transform hover:scale-105 bg-transparent border-none cursor-pointer text-left"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

     

    </nav>
  );
}