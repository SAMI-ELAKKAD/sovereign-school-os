import React, { useRef } from 'react';
import type { Testimonial } from '../types';

// Simple mapping for demo purposes. In a real app, this would be more robust.
const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
        'Canada': '🇨🇦',
        'USA': '🇺🇸',
        'Brazil': '🇧🇷',
        'Japan': '🇯🇵',
    };
    return flags[country] || '🌐';
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
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
            className="glass-card interactive-card p-8 rounded-xl h-full flex flex-col"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
        >
            <div style={{ transform: 'translateZ(30px)' }} className="flex-grow flex flex-col">
                <div className="flex-grow">
                    <p className="text-lg text-gray-200 italic">"{testimonial.quote}"</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700 flex items-center">
                    <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-cyan-500/50" />
                    <div>
                        <p className="font-bold text-white">{testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{testimonial.platform} <span className="mx-1">&middot;</span> {getCountryFlag(testimonial.country)} {testimonial.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;