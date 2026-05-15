import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from './IconComponents';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const getYouTubeEmbedUrl = (url: string): string => {
    if (!url) return '';
    
    // Google Drive
    if (url.includes('drive.google.com')) {
        const match = url.match(/file\/d\/([^/]+)/);
        if (match && match[1]) {
            const fileId = match[1];
            return `https://drive.google.com/file/d/${fileId}/preview`;
        }
    }
    
    // YouTube
    if (url.includes('/embed/')) return url;
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
        const urlParts = url.split('v=');
        if (urlParts.length > 1) {
            videoId = urlParts[1].split('&')[0];
        }
    } else if (url.includes('youtu.be/')) {
        const urlParts = url.split('youtu.be/');
        if (urlParts.length > 1) {
            videoId = urlParts[1].split('?')[0];
        }
    }
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }

    return url; // fallback
};

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  let finalUrl = embedUrl;
  // Only add autoplay for YouTube URLs
  if (finalUrl.includes('youtube.com/embed')) {
    finalUrl = finalUrl.includes('?') ? `${finalUrl}&autoplay=1` : `${finalUrl}?autoplay=1`;
  }


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black rounded-xl shadow-2xl w-full max-w-4xl border border-gray-700 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={finalUrl}
                title="Project Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-2 rounded-full text-white bg-black/50 hover:bg-black/80 transition-colors"
              aria-label="Close video"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;