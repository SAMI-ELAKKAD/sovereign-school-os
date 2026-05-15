
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { journalEntries, teamMembers } from '../data';
import type { JournalEntry, TeamMember } from '../types';

// Group entries by author
const entriesByAuthor: { [author: string]: JournalEntry[] } = journalEntries.reduce((acc, entry) => {
    const author = entry.author;
    if (!acc[author]) {
        acc[author] = [];
    }
    acc[author].push(entry);
    return acc;
}, {} as { [author: string]: JournalEntry[] });

const renderJournalContent = (text: string) => {
    // This regex looks for [kw-somecolor]...[/kw-somecolor] tags
    const parts = text.split(/(\[kw-primary\].*?\[\/kw-primary\]|\[kw-secondary\].*?\[\/kw-secondary\]|\[kw-accent\].*?\[\/kw-accent\])/g);

    return parts.filter(Boolean).map((part, index) => {
        if (part.startsWith('[kw-primary]')) {
            return <strong key={index} className="highlight-keyword highlight-keyword-primary">{part.replace(/\[\/?kw-primary\]/g, '')}</strong>;
        }
        if (part.startsWith('[kw-secondary]')) {
            return <strong key={index} className="highlight-keyword highlight-keyword-secondary">{part.replace(/\[\/?kw-secondary\]/g, '')}</strong>;
        }
        if (part.startsWith('[kw-accent]')) {
            return <strong key={index} className="highlight-keyword highlight-keyword-accent">{part.replace(/\[\/?kw-accent\]/g, '')}</strong>;
        }
        return part;
    });
};


const HorizontalTimeline: React.FC<{ entries: JournalEntry[] }> = ({ entries }) => {
    return (
        <div className="w-full overflow-hidden relative group">
            <div className="flex items-stretch overflow-x-auto space-x-4 md:space-x-0 p-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                {entries.map((entry, index) => (
                    <React.Fragment key={index}>
                        <div className="snap-center flex-shrink-0 w-80 md:w-96">
                            <motion.div 
                                className="glass-card p-6 rounded-lg h-full flex flex-col"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <p className="font-bold text-cyan-400 text-sm mb-1">{entry.date}</p>
                                <h3 className="text-xl font-bold mb-3">{entry.title}</h3>
                                <div className="space-y-3 text-gray-300 text-sm flex-grow">
                                    {entry.content.map((p, i) => <p key={i}>{renderJournalContent(p)}</p>)}
                                </div>
                            </motion.div>
                        </div>

                        {index < entries.length - 1 && (
                            <div className="flex-shrink-0 w-16 h-full flex items-center justify-center md:w-24">
                                <div className="w-full h-1 bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30"></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
             <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-2 pointer-events-none">
                <div className="w-12 h-24 bg-gradient-to-r from-bg-deep to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-24 bg-gradient-to-l from-bg-deep to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
        </div>
    );
};


const JournalEntryCard: React.FC<{ entry: JournalEntry }> = ({ entry }) => {
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
        <motion.article 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
            className="glass-card interactive-card p-8 rounded-lg shadow-md transition-shadow hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                <div className="mb-4">
                    <p className="font-semibold text-cyan-400">{entry.date}</p>
                    <h3 className="text-3xl">{entry.title}</h3>
                </div>
                <div className="space-y-4 text-gray-300 text-lg">
                    {entry.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

const AuthorSection: React.FC<{ member: TeamMember, entries: JournalEntry[] }> = ({ member, entries }) => (
    <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-24"
    >
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 p-6 glass-card rounded-xl max-w-5xl mx-auto">
            <img src={member.photoUrl} alt={member.name} className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400/50" />
            <div>
                <h2 className="text-4xl">{member.name}</h2>
                <p className="text-xl text-cyan-400 font-semibold">{member.role}</p>
            </div>
        </div>

        {member.name === 'EL AKKAD SAMI' ? (
            <HorizontalTimeline entries={entries} />
        ) : (
            <div className="space-y-12 max-w-5xl mx-auto">
                {entries.map((entry, index) => (
                    <JournalEntryCard key={index} entry={entry} />
                ))}
            </div>
        )}
    </motion.section>
);


const JournalPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop" alt="Desk with journal and laptop" className="w-full h-auto max-w-4xl mx-auto object-cover rounded-xl shadow-lg mb-8" />
        <h1 className="text-5xl sm:text-6xl">Our Development Journey 🗺️</h1>
        <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-400">
          A chronicle of our 8-week journey. These are the personal developer diaries detailing the story of how our ideas grew into full-fledged applications.
        </p>
      </motion.div>
      <div className="max-w-full">
        {teamMembers.map(member => {
            const memberEntries = entriesByAuthor[member.name] || [];
            if (member.name === 'EL AKKAD SAMI') {
                // Sort by station number numerically to fix string sorting issue (e.g., "10" vs "2")
                const getStationNumber = (dateStr: string) => parseInt(dateStr.replace('Station ', ''), 10) || 0;
                memberEntries.sort((a, b) => getStationNumber(a.date) - getStationNumber(b.date));
            } else {
                memberEntries.sort((a, b) => a.date.localeCompare(b.date));
            }
            return <AuthorSection key={member.name} member={member} entries={memberEntries} />
        })}
      </div>
    </div>
  );
};

export default JournalPage;
