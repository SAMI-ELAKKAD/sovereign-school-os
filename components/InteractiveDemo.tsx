import React, { useState, useEffect } from 'react';

// Custom hook for typing effect
const useTypingEffect = (text: string, speed = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (!text) {
            setDisplayText('');
            return;
        };

        setDisplayText('');
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayText;
};

const PortalDemoSection: React.FC<{
    title: string;
    placeholder: string;
    generateResult: () => string;
}> = ({ title, placeholder, generateResult }) => {
    const [inputValue, setInputValue] = useState('');
    const [rawOutput, setRawOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const typedOutput = useTypingEffect(rawOutput, 20);

    const handleGenerate = () => {
        if (!inputValue.trim()) return;
        setLoading(true);
        setRawOutput('');
        setTimeout(() => {
            const result = generateResult();
            setRawOutput(result);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="p-4 bg-gray-100 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-lg mb-2 text-cyan-400">{title}</h4>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
                className="w-full p-2 h-20 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-cyan-500 focus:border-cyan-500"
            />
            <button onClick={handleGenerate} disabled={loading || !inputValue.trim()} className="w-full mt-2 bg-cyan-500 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-600 disabled:bg-gray-400 transition-colors">
                {loading ? 'Generating...' : 'Generate Response'}
            </button>
            {loading && (
                <div className="mt-4 p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 min-h-[10rem]">
                    <div className="animate-pulse space-y-3">
                        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                    </div>
                </div>
            )}
            {typedOutput && !loading && (
                <div className="mt-4 p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 min-h-[10rem]">
                    <div className="text-gray-700 dark:text-gray-200 space-y-2 whitespace-pre-wrap">
                         {typedOutput.split('\n').map((line, i) => <p key={i}>{line.replace(/\*\*/g, '')}</p>)}
                    </div>
                </div>
            )}
        </div>
    );
}

const SSODemo: React.FC = () => {
    return (
        <div className="space-y-6 text-sm">
             <p className="text-gray-600 dark:text-gray-300">Enter a prompt in each portal to simulate an AI interaction.</p>
            <PortalDemoSection 
                title="🧑‍🚀 Student Portal"
                placeholder="e.g., Explain photosynthesis like I'm 12"
                generateResult={() => `**Professor Astra:** Of course! 🌿 Imagine a plant is like a tiny chef. It takes sunlight (energy), water (from its roots), and carbon dioxide (from the air) to cook up its own food, which is a type of sugar. The best part? As a bonus, it releases oxygen for us to breathe!`}
            />
            <PortalDemoSection 
                title="🧑‍🏫 Teacher Portal"
                placeholder="e.g., 5-slide presentation on Ancient Egypt for 10-year-olds"
                generateResult={() => `**Generated Presentation Outline:**

**Title:** The Pharaoh's Quest: Uncovering Ancient Egypt

**Slide 1: Title**
- Title: The Pharaoh's Quest
- Subtitle: An Adventure into Ancient Egypt
- Image Prompt: "A cartoon adventure poster with pyramids, a sphinx, and a treasure map."

**Slide 2: The Mighty Nile**
- Content: The Nile river was the lifeblood of Egypt.
- Activity: "Drag and drop the crops that grew on the Nile's banks."
- Speaker Notes: Explain how flooding made the soil fertile.

**Slide 3: Gods and Myths**
- Content: Meet Ra, Anubis, and Isis.
- Quiz: "[QUIZ: Match the god to their description.]"
- Image Prompt: "Friendly cartoon versions of Egyptian gods Ra and Anubis."`}
            />
            <PortalDemoSection 
                title="📊 Admin Portal"
                placeholder="e.g., Summarize incident reports for last month"
                generateResult={() => `**AI Copilot Report:**\n\n*   **Total Incidents:** 12\n*   **Primary Location:** Playground (6 instances)\n*   **Key Finding:** A recurring pattern of conflict during afternoon recess has been identified.\n*   **Recommendation:** Suggest increasing staff supervision in the playground area between 1 PM and 2 PM.`}
            />
        </div>
    );
};

const MiscellaneousTutorDemo: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<{ user: string; ai: string; isHtml?: boolean }[]>([]);
    const [loading, setLoading] = useState(false);
    const endOfMessagesRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const newUserMessage = { user: inputValue, ai: '', isHtml: false };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setLoading(true);

        setTimeout(() => {
            let aiResponse = '';
            let isHtmlResponse = false;
            const lowerInput = inputValue.toLowerCase();

            if (lowerInput.includes('photosynthesis')) {
                aiResponse = `
                    <style>
                        body { font-family: sans-serif; background-color: #f0f9ff; color: #075985; padding: 20px; text-align: center; }
                        h2 { color: #0369a1; }
                        .diagram { background: #e0f2fe; border: 2px solid #7dd3fc; border-radius: 10px; padding: 15px; margin-top: 15px; }
                        .item { display: inline-block; margin: 10px; }
                    </style>
                    <h2>The Photosynthesis Process 🌿</h2>
                    <div class="diagram">
                        <div class="item">☀️<br>Sunlight</div>
                        <div class="item">+</div>
                        <div class="item">💧<br>Water</div>
                        <div class="item">+</div>
                        <div class="item">💨<br>CO2</div>
                        <div class="item">➡️</div>
                        <div class="item">🍃<br>Sugar (Food)</div>
                        <div class="item">+</div>
                        <div class="item">😮<br>Oxygen</div>
                    </div>
                `;
                isHtmlResponse = true;
            } else if (lowerInput.includes('quiz')) {
                aiResponse = "Of course! Here's a quick quiz: What is the powerhouse of the cell? A) Nucleus, B) Ribosome, C) Mitochondria.";
            } else {
                aiResponse = "That's a great question! Let me generate some learning materials for you on that topic. Try asking me to 'teach me about photosynthesis' for an interactive example!";
            }
            
            setMessages(prev => {
                const lastMessage = prev[prev.length - 1];
                lastMessage.ai = aiResponse;
                lastMessage.isHtml = isHtmlResponse;
                return [...prev];
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-[400px] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <div className="flex justify-end">
                            <p className="bg-cyan-500 text-white p-2 rounded-lg max-w-[80%]">{msg.user}</p>
                        </div>
                        {msg.ai && (
                             <div className="flex justify-start mt-2">
                                {msg.isHtml ? (
                                    <div className="w-full h-48 bg-white rounded-lg shadow-md">
                                        <iframe srcDoc={msg.ai} className="w-full h-full border-0 rounded-lg" title="AI Generated Content"/>
                                    </div>
                                ) : (
                                    <p className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-lg max-w-[80%]">{msg.ai}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start mt-2">
                        <p className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-lg">
                            <span className="animate-pulse">...</span>
                        </p>
                    </div>
                )}
                <div ref={endOfMessagesRef} />
            </div>
            <div className="flex p-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me to teach you something..."
                    className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:ring-cyan-500 focus:border-cyan-500"
                />
                <button onClick={handleSend} className="ml-2 bg-cyan-500 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-600 disabled:bg-gray-400">
                    Send
                </button>
            </div>
        </div>
    );
};

const AskSmartDemo: React.FC = () => {
    const [inputValue, setInputValue] = useState("I don't think you're listening to me, this is the third time I've had to repeat the project requirements!");
    const [analysis, setAnalysis] = useState<{ tone: string; pace: string; guidance: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = () => {
        if (!inputValue.trim()) return;
        setLoading(true);
        setAnalysis(null);
        setTimeout(() => {
            setAnalysis({
                tone: "Tense (8/10)",
                pace: "Rapid",
                guidance: "Suggestion: A moment of silence can be powerful."
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="space-y-4 text-sm">
            <p className="text-gray-600 dark:text-gray-300">Enter a snippet of a high-pressure conversation to receive AI-powered guidance.</p>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter conversation text here..."
                className="w-full p-2 h-24 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-cyan-500 focus:border-cyan-500"
            />
            <button onClick={handleAnalyze} disabled={loading || !inputValue.trim()} className="w-full bg-cyan-500 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-600 disabled:bg-gray-400 transition-colors">
                {loading ? 'Analyzing...' : 'Analyze Communication'}
            </button>
            
            {(loading || analysis) && (
                <div className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                    {loading ? (
                        <div className="animate-pulse space-y-3">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                            <div className="h-5 bg-cyan-200 dark:bg-cyan-800/50 rounded w-3/4 mt-2"></div>
                        </div>
                    ) : (
                        analysis && (
                            <div className="space-y-2">
                                <div className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                                    <p><span className="font-semibold text-gray-800 dark:text-white">Tone:</span> {analysis.tone}</p>
                                    <p><span className="font-semibold text-gray-800 dark:text-white">Pacing:</span> {analysis.pace}</p>
                                </div>
                                <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                                    <p className="font-bold text-cyan-600 dark:text-cyan-400">{analysis.guidance}</p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};


interface InteractiveDemoProps {
    projectId: string;
}

const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ projectId }) => {
    switch (projectId) {
        case 'sso':
            return <SSODemo />;
        case 'miscellaneous-tutor':
            return <MiscellaneousTutorDemo />;
        case 'ask-smart':
            return <AskSmartDemo />;
        default:
            return <p>No interactive demo available for this project.</p>;
    }
};

export default InteractiveDemo;