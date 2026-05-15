
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserGroupIcon, RocketLaunchIcon, ChartBarIcon, InformationCircleIcon } from './IconComponents';

const portalData = {
    teacher: {
        title: 'The Teacher Command Center 🧑‍🏫',
        goal: 'To solve the crisis of time by automating content creation and administrative tasks, freeing teachers to focus on mentorship and inspiration.',
        icon: <UserGroupIcon className="w-8 h-8 text-cyan-400" />,
        features: [
            { feature: 'Dashboard', functionality: 'Provides a real-time, at-a-glance overview of the classroom, including a dynamically categorized student roster, quick-action buttons for logging incidents, and a priorities list.', problem: 'Eliminates manual tracking and provides an immediate, actionable snapshot of the classroom\'s status, helping teachers prioritize their attention effectively.' },
            { feature: 'AI Lesson Planner', functionality: 'Generates a complete, standards-aligned lesson plan from a simple topic, pasted text, or an uploaded PDF. Uses `gemini-2.5-pro` with a strict `responseSchema` for reliability.', problem: 'Reduces lesson planning time from hours to minutes. It solves the "blank page" problem and provides a high-quality, structured foundation for any lesson.' },
            { feature: 'One-Click Lesson Kit', functionality: 'With a single click, transforms a generated lesson plan into a downloadable ZIP file containing a slide deck (PDF), student worksheets (PDF), and a grading rubric (PDF).', problem: 'Automates the most tedious part of lesson prep: creating supplementary materials. This saves teachers immense amounts of time and ensures all materials are cohesive.' },
            { feature: 'Adventure Architect', functionality: 'A creative studio to design interactive, narrative-based learning modules ("Adventures") for students by defining a topic and a story prompt.', problem: 'Empowers teachers to create highly engaging, gamified learning content without needing any coding or design skills, making complex topics more accessible and fun.' },
            { feature: 'Media Hub', functionality: 'A suite of AI tools within the Adventure Architect to generate custom images (`imagen-4.0-generate-001`) or videos (`Veo`) for key story moments. Teachers can even prompt the AI to feature a student\'s unique hero avatar in the generated media.', problem: 'Provides teachers with an in-house production studio to create hyper-personalized, high-quality visual aids that are perfectly tailored to their lesson and their students.' },
            { feature: 'AI Coach', functionality: 'A dedicated chat interface using `gemini-2.5-pro` with `thinkingConfig` enabled, providing deep pedagogical insights for professional development and brainstorming.', problem: 'Offers teachers an on-demand, expert instructional coach to help them refine teaching strategies, explore new pedagogical theories, and overcome creative blocks.' },
            { feature: 'IEP Copilot', functionality: 'Analyzes a student\'s complete data profile (grades, incidents, etc.) to generate a draft of a S.M.A.R.T. (Specific, Measurable, Achievable, Relevant, Time-bound) IEP goal.', problem: 'Streamlines the incredibly time-consuming special education documentation process. It provides a data-driven, well-structured starting point for crucial student support plans.' },
            { feature: 'Communications Center', functionality: 'A messaging hub for parent communication where the AI can draft professional, formal emails based on a few key points provided by the teacher, including on-the-fly translation.', problem: 'Reduces the time and emotional load of parent outreach, overcomes language barriers, and ensures all communication is consistent, professional, and clear.' },
        ]
    },
    student: {
        title: 'The Student Universe 🧑‍🚀',
        goal: 'To transform passive learning into an active, personalized, and engaging adventure where every student is empowered.',
        icon: <RocketLaunchIcon className="w-8 h-8 text-cyan-400" />,
        features: [
            { feature: 'AI Mentor (Professor Astra)', functionality: 'A personalized AI tutor that adopts the persona of a student\'s chosen "Hero" (e.g., Marie Curie). It teaches concepts, adapts its style, and checks for understanding with interactive widgets.', problem: 'Makes learning personal, engaging, and fun by providing one-on-one tutoring that adapts to the student\'s pace and personality, something impossible in a traditional 30-to-1 classroom.' },
            { feature: 'Learning Hub', functionality: 'A central campus of subject-specific AI tools: **Math Solver**, **AI Coder**, **Science Lab**, **Language Tutor**, **History Explorer**, **Literature Companion**, and more.', problem: 'Provides powerful, expert help on demand. Instead of getting stuck and disengaging, students have tools to help them understand concepts and solve problems independently.' },
            { feature: 'Adventures', functionality: 'Interactive, choice-based stories and games where the student is the protagonist. The AI dynamically generates branching narratives that adapt to student choices, with key scenes illustrated by custom images or videos featuring the student\'s own unique hero avatar.', problem: 'Transforms passive lessons into active, gamified experiences. This dramatically increases motivation and knowledge retention by making the student the protagonist of their learning.' },
            { feature: 'Assignments & Quizzes', functionality: 'A dashboard to view assignments, take quizzes, and submit work. Provides instant, AI-powered, Socratic-style explanations for any incorrect quiz answers.', problem: 'Streamlines the student workflow and provides immediate, constructive feedback. This closes the learning loop instantly, rather than days later when a test is graded.' },
            { feature: 'Adaptive Learning Path', functionality: 'After a quiz, the student can click a button to have an AI analyze their mistakes and generate a personalized list of recommended lessons and practice exercises to focus on next.', problem: 'Creates a truly individualized education plan. Students can focus their efforts precisely where they need the most help, making study time hyper-efficient and effective.' },
        ]
    },
    admin: {
        title: 'The Admin Holodeck 📊',
        goal: 'To provide school leadership with clear, real-time, data-driven insights for proactive and equitable school management.',
        icon: <ChartBarIcon className="w-8 h-8 text-cyan-400" />,
        features: [
            { feature: 'AI Copilot', functionality: 'A conversational AI where administrators can ask complex, school-wide questions in natural language (e.g., "Generate a fairness report," "Identify at-risk students").', problem: 'Transforms data from a static resource into a dynamic intelligence layer. It allows for complex data analysis on-demand, without needing a dedicated data science team.' },
            { feature: 'Fairness & Equity Dashboard', functionality: 'Visualizes incident and disciplinary data across the school and uses an AI-generated analysis to highlight potential biases or inequities in policy application.', problem: 'Provides a clear, objective tool to monitor and improve school-wide equity. It helps administrators move from anecdotal evidence to data-driven decision-making.' },
            { feature: 'Student Support Hub', functionality: 'An AI-powered dashboard that proactively identifies students who may be struggling academically or behaviorally by analyzing their holistic data and suggests intervention strategies.', problem: 'Shifts student support from a reactive model (waiting for failure) to a proactive one (early intervention). This leads to better student outcomes and well-being.' },
            { feature: 'User Management', functionality: 'A simple interface for adding, editing, and deleting student and teacher accounts.', problem: 'Simplifies the administrative overhead of managing school rosters at the beginning and end of the school year.' },
            { feature: 'School Archive & Compliance Log', functionality: 'An immutable, timestamped log of all major system actions (e.g., report generation, high-severity incident approvals) and AI Copilot conversations for review.', problem: 'Ensures transparency, accountability, and a clear audit trail for compliance with school policies and regulations like FERPA.' },
            { feature: 'Approvals & Actions', functionality: 'A centralized queue where administrators can review, comment on, and approve or deny teacher-submitted requests, such as high-severity incidents or new IEP goal drafts.', problem: 'Streamlines the official approval workflow between teachers and administration, ensuring that critical items are reviewed and actioned in a timely and documented manner.' },
        ]
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};


const PortalSection: React.FC<{ data: typeof portalData.teacher }> = ({ data }) => {
    const [isGoalVisible, setIsGoalVisible] = useState(false);

    return (
        <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
                {data.icon}
                <h3 className="text-3xl">{data.title}</h3>
                <div 
                    className="relative flex items-center"
                    onMouseEnter={() => setIsGoalVisible(true)}
                    onMouseLeave={() => setIsGoalVisible(false)}
                >
                    <InformationCircleIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
                    <AnimatePresence>
                    {isGoalVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-slate-900 text-white p-3 rounded-lg shadow-lg border border-cyan-500/50 z-10"
                        >
                            <p className="text-sm italic">{data.goal}</p>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-900/50">
                            <th className="p-4 text-sm font-bold uppercase text-gray-300 border-b-2 border-gray-700 w-1/4">Feature</th>
                            <th className="p-4 text-sm font-bold uppercase text-gray-300 border-b-2 border-gray-700 w-1/2">Functionality</th>
                            <th className="p-4 text-sm font-bold uppercase text-gray-300 border-b-2 border-gray-700 w-1/4">Problem Solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.features.map((item, index) => (
                            <tr key={index} className="hover:bg-cyan-500/5 transition-colors duration-200">
                                <td className="p-4 border-b border-gray-700/50 font-semibold text-gray-100 align-top">{item.feature}</td>
                                <td className="p-4 border-b border-gray-700/50 text-gray-300 align-top" dangerouslySetInnerHTML={{ __html: item.functionality.replace(/`([^`]+)`/g, '<code class="bg-gray-700 text-cyan-300 px-1.5 py-0.5 rounded-md text-sm font-mono">$1</code>') }}></td>
                                <td className="p-4 border-b border-gray-700/50 text-gray-300 align-top">{item.problem}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const FunctionalityMatrix: React.FC = () => {
    return (
        <div className="glass-card p-4 md:p-8 rounded-lg">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div variants={itemVariants} id="matrix-student" className="scroll-mt-24">
                    <PortalSection data={portalData.student} />
                </motion.div>
                <motion.div variants={itemVariants} id="matrix-teacher" className="scroll-mt-24">
                    <PortalSection data={portalData.teacher} />
                </motion.div>
                <motion.div variants={itemVariants} id="matrix-admin" className="scroll-mt-24">
                    <PortalSection data={portalData.admin} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FunctionalityMatrix;
