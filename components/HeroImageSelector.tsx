import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { HeroImage } from '../types';
import { XMarkIcon } from './IconComponents';

interface HeroImageSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  images: HeroImage[];
  onSelect: (url: string) => void;
}

const categories: HeroImage['category'][] = ['Countries', 'Fantasy', 'Sci-Fi', 'History', 'Nature'];

const HeroImageSelector: React.FC<HeroImageSelectorProps> = ({ isOpen, onClose, images, onSelect }) => {
  const [activeCategory, setActiveCategory] = useState<HeroImage['category']>('Countries');

  const filteredImages = images.filter(img => img.category === activeCategory);

  const handleSelect = (url: string) => {
    onSelect(url);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/90 rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] border border-gray-700 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
              <h2 className="text-xl font-bold text-white">Select a Hero Background</h2>
              <button onClick={onClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-700">
                <XMarkIcon className="w-6 h-6" />
              </button>
            </header>
            
            <nav className="flex-shrink-0 p-4 border-b border-gray-700">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                      activeCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </nav>

            <main className="flex-grow overflow-y-auto p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredImages.map(image => (
                  <motion.div
                    key={image.id}
                    className="aspect-video rounded-lg overflow-hidden cursor-pointer group relative"
                    onClick={() => handleSelect(image.url)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors flex items-end p-2">
                      <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">{image.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </main>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroImageSelector;
