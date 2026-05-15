
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon } from './IconComponents';

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/team', label: 'Team' },
  { path: '/about-hackathon', label: 'About Hackathon' },
  { path: '/project1', label: 'Project: S.S.O.' },
  { path: '/project2', label: 'Project: Miscellaneous Tutor' },
  { path: '/project3', label: 'Project: Ask Smart' },
  { path: '/communication', label: 'Communication' },
  { path: '/journal', label: 'Journal' },
  { path: '/glossary', label: 'Glossary' },
  { path: '/tutorial', label: 'Tutorial' },
];

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, setIsOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filteredLinks = navLinks.filter(link =>
    link.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % filteredLinks.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + filteredLinks.length) % filteredLinks.length);
    } else if (e.key === 'Enter') {
      if(filteredLinks[activeIndex]) {
        navigate(filteredLinks[activeIndex].path);
        setIsOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  
  const handleClose = () => {
      setIsOpen(false);
      setSearchTerm('');
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-20"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for a page..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
              />
            </div>
            <div className="p-2 max-h-80 overflow-y-auto">
              {filteredLinks.length > 0 ? (
                <ul>
                  {filteredLinks.map((link, index) => (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        onClick={handleClose}
                        className={`block w-full text-left px-4 py-2 rounded-md text-gray-600 dark:text-gray-300 transition-colors ${
                          index === activeIndex ? 'bg-cyan-100 dark:bg-cyan-900/50' : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-4 text-center text-gray-500">No results found.</p>
              )}
            </div>
             <div className="bg-gray-50 dark:bg-gray-900/50 px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                <span>Navigate with ↑↓, select with ↵</span>
                <span>Close with ESC</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
