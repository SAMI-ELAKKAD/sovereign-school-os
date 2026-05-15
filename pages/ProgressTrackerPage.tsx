import React from 'react';
import { projects } from '../data';
import type { Project } from '../types';
import ProjectTimeline from '../components/ProjectTimeline';

const ProgressTrackerPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white sm:text-6xl">Our Hackathon Progress</h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400">
          A visual journey through the evolution of our projects, from initial spark to final deployment. Here's a day-by-day look at our development process, challenges, and milestones.
        </p>
      </div>
      <div className="space-y-24">
        {projects.map((project: Project) => (
          <section key={project.id}>
            <h2 className="text-4xl font-bold text-center text-cyan-600 dark:text-cyan-400 mb-12">{project.name}</h2>
            <ProjectTimeline timeline={project.timeline} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProgressTrackerPage;