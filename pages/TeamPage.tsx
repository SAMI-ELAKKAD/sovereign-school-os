import React from 'react';
import { motion, Variants } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';
import type { TeamMember } from '../types';
import { teamMemberSkills } from '../data';

interface TeamPageProps {
  members: TeamMember[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

const TeamPage: React.FC<TeamPageProps> = ({ members }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h1 
          className="text-5xl sm:text-6xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Meet the Minds Behind the Magic ✨
        </motion.h1>
        <motion.p 
          className="mt-6 max-w-3xl mx-auto text-xl text-gray-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          We are a team of passionate innovators, each bringing a unique set of skills and perspectives. Together, we collaborated to push the boundaries of what's possible with AI.
        </motion.p>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {members.map((member) => (
          <motion.div key={member.name} variants={itemVariants}>
            <TeamMemberCard member={member} skills={teamMemberSkills[member.name] || []} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamPage;
