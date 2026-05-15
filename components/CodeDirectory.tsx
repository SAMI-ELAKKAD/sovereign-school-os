
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FolderIcon, DocumentTextIcon } from './IconComponents';

interface DirectoryItem {
    name: string;
    type: 'folder' | 'file';
    description: string;
    children?: DirectoryItem[];
    level?: number;
    count?: number;
}

const directoryStructure: DirectoryItem[] = [
    {
        name: 'sso [npm-pkg]',
        type: 'folder',
        description: 'The root of our published Sovereign School OS package.',
        count: 12,
        children: [
            {
                name: 'components/',
                type: 'folder',
                description: 'Reusable React components, organized by domain.',
                count: 14,
                children: [
                    { name: 'administration/', type: 'folder', description: 'Components for the Admin Portal.', count: 13 },
                    { name: 'common/', type: 'folder', description: 'Shared components like Buttons, Modals.', count: 6 },
                    { name: 'icons/', type: 'folder', description: 'SVG icon components.', count: 2 },
                    {
                        name: 'student/',
                        type: 'folder',
                        description: 'Components for the Student Portal.',
                        count: 31,
                        children: [
                            { name: 'interactive/', type: 'folder', description: 'Interactive learning widgets.', count: 1 }
                        ]
                    },
                    { name: 'teacher/', type: 'folder', description: 'Components for the Teacher Portal.', count: 23 },
                ]
            },
            { name: 'hooks/', type: 'folder', description: 'Custom React hooks for shared logic.', count: 2 },
            { name: 'services/', type: 'folder', description: 'API calls and external service integrations.', count: 15 },
            { name: 'utils/', type: 'folder', description: 'Helper functions and utilities.', count: 4 },
        ]
    }
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.07 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

const DirectoryTree: React.FC<{ items: DirectoryItem[], level: number }> = ({ items, level }) => {
    return (
        <>
            {items.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <motion.div 
                      className="flex items-start py-2 rounded-md -ml-2 -mr-2 px-2" 
                      style={{ paddingLeft: `${level * 24 + 8}px` }}
                      whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                    >
                        <div className="flex-shrink-0 w-6 h-6 mr-3 text-cyan-400">
                            {item.type === 'folder' ? <FolderIcon /> : <DocumentTextIcon />}
                        </div>
                        <div className="flex-grow">
                            <p className="font-mono font-medium text-gray-100 flex items-center">
                                {item.name}
                                {item.count && (
                                    <span className="ml-3 text-xs bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded-full">
                                        {item.count} files
                                    </span>
                                )}
                            </p>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                    </motion.div>
                    {item.children && <DirectoryTree items={item.children} level={level + 1} />}
                </motion.div>
            ))}
        </>
    );
};

const CodeDirectory: React.FC = () => {
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
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
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
            className="glass-card interactive-card p-6 rounded-lg"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                 style={{ transform: 'translateZ(20px)' }}
            >
                <DirectoryTree items={directoryStructure} level={0} />
            </motion.div>
        </div>
    );
};

export default CodeDirectory;
