import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { socialPosts, testimonials, projectDemos } from '../data';
import type { SocialPost, Testimonial } from '../types';
import GlobalEngagementMap from '../components/GlobalEngagementMap';
import { 
  ChatBubbleLeftRightIcon, 
  GlobeAltIcon, 
  PlayCircleIcon, 
  ShareIcon, 
  TwitterIcon,
  LinkedInIcon,
  DocumentTextIcon,
  PhotoIcon,
} from '../components/IconComponents';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

const SocialPostCard: React.FC<{ post: SocialPost }> = ({ post }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const platformIcons: { [key in SocialPost['platform']]: React.ReactNode } = {
        'X/Twitter': <TwitterIcon className="w-6 h-6" />,
        'LinkedIn': <LinkedInIcon className="w-6 h-6" />,
        'WeChat': <ChatBubbleLeftRightIcon className="w-6 h-6" />,
        'Xiaohongshu': <PhotoIcon className="w-6 h-6" />,
        'Bilibili': <PlayCircleIcon className="w-6 h-6" />,
        'Blog': <DocumentTextIcon className="w-6 h-6" />,
        'Instagram': <PhotoIcon className="w-6 h-6" />,
    };

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
            variants={itemVariants}
            className="glass-card interactive-card rounded-xl overflow-hidden group h-full flex flex-col"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
        >
            <div className="overflow-hidden h-52">
                <img src={post.imageUrl} alt={post.platform} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex items-center gap-3 mb-3">
                    <div className="text-cyan-400">
                        {platformIcons[post.platform] || <ShareIcon className="w-6 h-6" />}
                    </div>
                    <h3 className="font-bold text-xl">{post.platform}</h3>
                </div>
                <p className="text-gray-300 mt-2 text-base flex-grow">{post.caption}</p>
                <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyan-400 group-hover:text-cyan-300 transition-colors mt-5 inline-block font-semibold text-base glow-on-hover"
                >
                    View Post &rarr;
                </a>
            </div>
        </motion.div>
    );
};

const DemoCard: React.FC<{ demo: typeof projectDemos[0] }> = ({ demo }) => {
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
            variants={itemVariants}
            className="glass-card interactive-card rounded-xl overflow-hidden group h-full flex flex-col"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
        >
            <div className="overflow-hidden h-52">
                <img src={demo.imageUrl} alt={demo.projectName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow" style={{ transform: 'translateZ(20px)' }}>
                <h3 className="font-bold text-xl">{demo.projectName}</h3>
                <p className="text-gray-300 mt-2 text-base flex-grow">{demo.description}</p>
                <NavLink to={demo.link} className="text-cyan-400 group-hover:text-cyan-300 transition-colors mt-5 inline-block font-semibold text-base glow-on-hover">
                    Explore Project &rarr;
                </NavLink>
            </div>
        </motion.div>
    );
};

const StrategyCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => {
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={itemVariants}
      className="glass-card interactive-card p-6 rounded-xl text-center h-full"
      style={{ transition: 'transform 0.2s ease-out' }}
    >
      <div className="text-cyan-400 w-12 h-12 mx-auto mb-4 flex items-center justify-center" style={{ transform: 'translateZ(30px)' }}>{icon}</div>
      <h3 className="text-2xl font-bold mb-2" style={{ transform: 'translateZ(30px)' }}>{title}</h3>
      <p className="text-gray-300" style={{ transform: 'translateZ(30px)' }}>{description}</p>
    </motion.div>
  )
}

const PageSection: React.FC<{title: string; subtitle: string; children: React.ReactNode; className?: string;}> = ({title, subtitle, children, className}) => {
    return (
        <motion.section 
            className={`${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-4xl sm:text-5xl">{title}</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                    {subtitle}
                </p>
            </motion.div>
            {children}
        </motion.section>
    );
};

const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
        'Canada': '🇨🇦',
        'USA': '🇺🇸',
        'Brazil': '🇧🇷',
        'Japan': '🇯🇵',
        'Germany': '🇩🇪',
        'India': '🇮🇳',
    };
    return flags[country] || '🌐';
}

const MiniTestimonial: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const rotateX = (y - height / 2) / 20;
        const rotateY = -(x - width / 2) / 20;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
            variants={itemVariants}
            className="glass-card interactive-card p-4 rounded-lg"
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                <p className="text-base text-gray-200 italic leading-snug">"{testimonial.quote}"</p>
                <div className="mt-3 text-right">
                    <p className="font-semibold text-sm text-white">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">{getCountryFlag(testimonial.country)} {testimonial.country}</p>
                </div>
            </div>
        </motion.div>
    );
};


const CommunicationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24 md:space-y-32">
      <motion.section 
        className="text-center relative py-20 rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Global network" />
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl">Spreading the Word 🌐</h1>
            <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-200">
            Innovation is best when shared. Here's a look at our multi-platform strategy to promote our projects, engage with a global community, and gather valuable feedback.
            </p>
        </div>
      </motion.section>

      <PageSection
        title="Our Communication Strategy"
        subtitle="We focused on a three-pronged approach to share our journey and projects with the world."
      >
        <div className="grid md:grid-cols-3 gap-8">
            <StrategyCard 
                icon={<ShareIcon className="w-10 h-10" />}
                title="Amplify Our Vision"
                description="Crafting a clear and compelling narrative across multiple social platforms to maximize our reach."
            />
            <StrategyCard 
                icon={<PlayCircleIcon className="w-10 h-10" />}
                title="Show, Don't Tell"
                description="Creating engaging video demos and interactive examples to let people experience our projects firsthand."
            />
            <StrategyCard 
                icon={<ChatBubbleLeftRightIcon className="w-10 h-10" />}
                title="Foster Community"
                description="Actively listening to feedback and celebrating the global community that formed around our work."
            />
        </div>
      </PageSection>

      <PageSection
        title="Broadcasting Our Signal"
        subtitle="We shared our progress and launch announcements across platforms tailored to different audiences, from developers to the general public."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialPosts.map((post, index) => (
              <SocialPostCard key={index} post={post} />
            ))}
        </div>
      </PageSection>

      <PageSection
        title="Engaging the Global Community"
        subtitle="Our projects resonated with users around the world, highlighting the universal appeal of accessible and impactful AI solutions."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div className="lg:col-span-7 min-h-[500px]" variants={itemVariants}>
            <GlobalEngagementMap testimonials={testimonials} />
          </motion.div>
          <div className="lg:col-span-5">
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold mb-8 text-center lg:text-left"
            >
              Voices from Our Community
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <MiniTestimonial key={index} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>
      </PageSection>

      <PageSection
        title="Experience the Innovation"
        subtitle="Words can only say so much. We invite you to explore our project demos and see our ideas in action."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectDemos.map((demo, index) => (
                <DemoCard key={index} demo={demo} />
            ))}
        </div>
      </PageSection>
    </div>
  );
};

export default CommunicationPage;