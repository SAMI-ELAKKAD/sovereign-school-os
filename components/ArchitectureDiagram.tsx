
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, UserGroupIcon, ChartBarIcon, CpuChipIcon, SparklesIcon, ShieldCheckIcon, CodeBracketIcon } from './IconComponents';

const DiagramBox: React.FC<{ children: React.ReactNode; className?: string; }> = ({ children, className = '' }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        const rotateX = (y - height / 2) / 25;
        const rotateY = -(x - width / 2) / 25;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };
    
    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
            className={`glass-card interactive-card p-4 rounded-lg shadow-sm text-center ${className}`}
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
        </div>
    );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 tracking-wide uppercase">{children}</h3>
);

const Feature: React.FC<{ icon: React.ReactNode; title: string; subtitle: string; }> = ({ icon, title, subtitle }) => (
    <div className="flex items-start text-left p-3 bg-gray-50 dark:bg-gray-800/50 rounded-md border border-gray-200 dark:border-gray-700">
        <div className="flex-shrink-0 text-cyan-500">{icon}</div>
        <div className="ml-3">
            <p className="font-bold text-gray-800 dark:text-gray-100 text-base">{title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
    </div>
);

const Arrow: React.FC<{ label?: string }> = ({ label }) => (
    <div className="my-4 flex items-center justify-center text-center">
        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
        {label && <span className="flex-shrink-0 mx-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">{label}</span>}
        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
    </div>
);

const ArchitectureDiagram: React.FC = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 w-full">
            <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 items-start">
                {/* Column 1: Client-Side */}
                <div className="space-y-4">
                    <SectionTitle>Client-Side Portals</SectionTitle>
                    <DiagramBox>
                        <Feature 
                            icon={<UserIcon className="w-8 h-8"/>} 
                            title="Student Portal" 
                            subtitle="The Hero's Journey"
                        />
                    </DiagramBox>
                    <DiagramBox>
                        <Feature 
                            icon={<UserGroupIcon className="w-8 h-8"/>} 
                            title="Teacher Portal" 
                            subtitle="Mission Control"
                        />
                    </DiagramBox>
                    <DiagramBox>
                        <Feature 
                            icon={<ChartBarIcon className="w-8 h-8"/>} 
                            title="Admin Portal" 
                            subtitle="The Holodeck"
                        />
                    </DiagramBox>
                </div>

                {/* Column 2: Core Logic & Features */}
                 <div className="space-y-4">
                    <SectionTitle>Gemini API Engine</SectionTitle>
                     <DiagramBox>
                        <Feature icon={<CpuChipIcon className="w-8 h-8"/>} title="AI Models" subtitle="The brains of the operation"/>
                        <Arrow label="API Calls" />
                        <div className="space-y-3 p-2">
                           <p className="text-sm px-2 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 rounded-full font-mono">gemini-2.5-flash</p>
                           <p className="text-sm px-2 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 rounded-full font-mono">imagen-4.0-generate-001</p>
                           <p className="text-sm px-2 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 rounded-full font-mono">gemini-2.5-flash-native-audio-preview-09-2025</p>
                        </div>
                    </DiagramBox>
                </div>

                {/* Column 3: Key Innovations */}
                 <div className="space-y-4">
                    <SectionTitle>Key Innovations</SectionTitle>
                    <DiagramBox>
                         <Feature icon={<SparklesIcon className="w-8 h-8"/>} title="Structured Output" subtitle="Uses `responseSchema` to get reliable JSON for lesson plans, quizzes, and slide decks."/>
                    </DiagramBox>
                     <DiagramBox>
                         <Feature icon={<CodeBracketIcon className="w-8 h-8"/>} title="Dynamic UI Parser" subtitle="Custom markup like [QUIZ:...] is rendered as interactive React components."/>
                    </DiagramBox>
                     <DiagramBox>
                         <Feature icon={<ShieldCheckIcon className="w-8 h-8"/>} title="Privacy-First Audio" subtitle="Client-side analysis of audio streams ensures no voice data is ever transmitted."/>
                    </DiagramBox>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureDiagram;
