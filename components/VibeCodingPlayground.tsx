import React, { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed = 20) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!text) return;
    setDisplayText('');
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayText;
};

const getCodeForVibe = (vibe: string): string => {
    const lowerVibe = vibe.toLowerCase();
    if (lowerVibe.includes('button')) {
        return `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`;
    }
    if (lowerVibe.includes('card')) {
        return `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet...
    </p>
  </div>
</div>`;
    }
    if (lowerVibe.includes('login') || lowerVibe.includes('form')) {
        return `<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="username" type="text">
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" id="password" type="password">
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
      Sign In
    </button>
  </div>
</form>`;
    }
    return `// I'm not sure how to generate that yet. 
// Try asking for 'a button', 'a card', or 'a login form'.`;
};

const VibeCodingPlayground: React.FC = () => {
    const [vibe, setVibe] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const displayText = useTypingEffect(generatedCode);

    const handleGenerate = () => {
        if (!vibe) return;
        setIsLoading(true);
        setGeneratedCode('');
        setTimeout(() => {
            setGeneratedCode(getCodeForVibe(vibe));
            setIsLoading(false);
        }, 800);
    };

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mt-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800">
                <label htmlFor="vibe-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Enter your UI "vibe":
                </label>
                <textarea
                    id="vibe-input"
                    value={vibe}
                    onChange={(e) => setVibe(e.target.value)}
                    placeholder="e.g., a login form with a bright blue button"
                    className="w-full p-2 h-24 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading || !vibe}
                    className="w-full mt-3 bg-cyan-500 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-600 disabled:bg-gray-400 transition-colors"
                >
                    {isLoading ? 'Generating...' : 'Generate Code'}
                </button>
            </div>
            <div className="bg-gray-900 p-4 min-h-[200px]">
                <pre className="text-sm text-cyan-300 whitespace-pre-wrap font-mono">
                    <code>{displayText}</code>
                    {isLoading && <span className="animate-pulse">_</span>}
                </pre>
            </div>
        </div>
    );
};

export default VibeCodingPlayground;