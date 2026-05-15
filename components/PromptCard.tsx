import React, { useState } from 'react';
import type { Prompt } from '../types';
import { ClipboardDocumentIcon, CheckIcon } from './IconComponents';

interface PromptCardProps {
  promptData: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ promptData }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptData.prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-sm overflow-hidden">
      <div className="p-6">
        <p className="text-base text-gray-600 dark:text-gray-300">
          <span className="font-bold text-gray-800 dark:text-gray-100">Context: </span>
          {promptData.context}
        </p>
      </div>
      <div className="relative bg-gray-50 dark:bg-gray-900/70 p-6 border-t border-gray-200 dark:border-gray-700/50">
        <pre className="text-cyan-800 dark:text-cyan-300 text-base whitespace-pre-wrap font-mono">
          <code>{promptData.prompt}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copy prompt"
        >
          {copied ? <CheckIcon className="w-5 h-5 text-green-500" /> : <ClipboardDocumentIcon className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;