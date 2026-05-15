import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import type { TeamMember } from '../types';
import { TwitterIcon, LinkedInIcon, GitHubIcon } from './IconComponents';

interface TeamMemberCardProps {
  member: TeamMember;
  skills: string[];
}

const skillColors = [
    'bg-cyan-800/70 text-cyan-300',
    'bg-fuchsia-800/70 text-fuchsia-300',
    'bg-amber-800/70 text-amber-300',
    'bg-emerald-800/70 text-emerald-300',
];

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, skills }) => {
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
    <motion.div
      ref={cardRef}
      className="glass-card interactive-card rounded-xl overflow-hidden h-full flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.2s ease-out' }}
    >
      <img className="w-full h-72 object-cover" src={member.photoUrl} alt={member.name} />
      <div className="p-8 flex flex-col flex-grow" style={{ transform: 'translateZ(40px)' }}>
        <h3 className="text-2xl font-bold text-white glow-on-hover">{member.name}</h3>
        <p className="text-cyan-400 font-semibold mt-1 text-lg glow-on-hover gradient-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">{member.role}</p>
        
        {skills && skills.length > 0 && (
             <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, index) => (
                    <span key={skill} className={`text-xs font-medium px-2.5 py-1 rounded-full ${skillColors[index % skillColors.length]}`}>{skill}</span>
                ))}
            </div>
        )}

        <p className="text-gray-300 mt-4 text-base flex-grow">{member.bio}</p>

        {member.socials && (
          <div className="mt-6 pt-4 border-t border-gray-700/50 flex items-center gap-4">
            {member.socials.twitter && (
              <a 
                href={member.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`${member.name}'s Twitter profile`}
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
            )}
            {member.socials.linkedin && (
              <a 
                href={member.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            )}
            {member.socials.github && (
              <a 
                href={member.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`${member.name}'s GitHub profile`}
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;