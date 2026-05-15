import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { XMarkIcon, ClipboardIcon, CheckIcon, TwitterIcon, LinkedInIcon, EnvelopeIcon } from './IconComponents';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, project }) => {
  const [copied, setCopied] = useState(false);
  const projectUrl = project.liveDemoUrl || window.location.href;
  const shareText = `Check out this cool hackathon project: ${project.name}! ${project.tagline}`;

  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
    }
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(projectUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Share Project</h2>
          <button onClick={onClose} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">Share a link to "{project.name}" via your favorite platform.</p>

        <div className="flex items-center space-x-2 mb-6">
          <input
            type="text"
            readOnly
            value={projectUrl}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm"
          />
          <button
            onClick={handleCopy}
            className="flex-shrink-0 bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors flex items-center space-x-2"
          >
            {copied ? <CheckIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(projectUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <TwitterIcon className="w-8 h-8 mx-auto text-gray-800 dark:text-white" />
            </a>
             <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(projectUrl)}`} target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <LinkedInIcon className="w-8 h-8 mx-auto text-gray-800 dark:text-white" />
            </a>
             <a href={`mailto:?subject=${encodeURIComponent(project.name)}&body=${encodeURIComponent(shareText + '\n\n' + projectUrl)}`} className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <EnvelopeIcon className="w-8 h-8 mx-auto text-gray-800 dark:text-white" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;