export interface TeamMember {
  name: string;
  photoUrl: string;
  role: string;
  bio: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ProjectSection {
  title: string;
  content: string[];
}

export interface CorePillar {
  targetAudience: string;
  title: string;
  description: string;
  icon: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
}

export interface Prompt {
  context: string;
  prompt: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  tags?: string[];
  heroImageUrl: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  problemStatement?: ProjectSection;
  vision?: ProjectSection;
  corePillars?: CorePillar[];
  personalization?: ProjectSection;
  implementation: ProjectSection;
  keyTakeaways?: ProjectSection;
  result: {
    videoUrl: string;
    summary: string[];
  };
  timeline: Milestone[];
  keyPrompts: Prompt[];
}

export interface SocialPost {
  platform: 'X/Twitter' | 'WeChat' | 'Xiaohongshu' | 'Bilibili' | 'Blog' | 'LinkedIn' | 'Instagram';
  imageUrl: string;
  link: string;
  caption: string;
}

export interface JournalEntry {
  author: string;
  date: string;
  title: string;
  content: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  platform: string;
  avatarUrl: string;
  country: string; // For international buzz
}

export interface TutorialStep {
  step: number;
  title: string;
  description: string;
  code?: string;
  prompt?: Prompt;
}

export interface HeroImage {
  id: string;
  url: string;
  alt: string;
  category: 'Countries' | 'Fantasy' | 'Sci-Fi' | 'History' | 'Nature';
}