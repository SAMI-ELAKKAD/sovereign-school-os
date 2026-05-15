
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';

const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
        'Canada': '🇨🇦',
        'USA': '🇺🇸',
        'Brazil': '🇧🇷',
        'Japan': '🇯🇵',
    };
    return flags[country] || '🌐';
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};


const TestimonialCarousel: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        setPage([(page + newDirection + testimonials.length) % testimonials.length, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 5000); // Change testimonial every 5 seconds
        return () => clearInterval(interval);
    }, [page]);

    const testimonialIndex = page;
    const testimonial = testimonials[testimonialIndex];

    return (
        <div className="relative w-full h-[320px] md:h-[280px] flex items-center justify-center overflow-hidden glass-card p-8 rounded-xl">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute w-full h-full flex flex-col justify-center items-center text-center px-4 md:px-12"
                >
                    <p className="text-lg md:text-xl text-gray-200 italic max-w-3xl">"{testimonial.quote}"</p>
                    <div className="mt-6 flex items-center">
                        <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-cyan-500/50" />
                        <div>
                            <p className="font-bold text-white">{testimonial.author}</p>
                            <p className="text-gray-400 text-sm">{getCountryFlag(testimonial.country)} {testimonial.country}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 flex justify-center space-x-2">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage([i, i > page ? 1 : -1])}
                        className={`w-2 h-2 rounded-full transition-colors ${i === page ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-400'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
