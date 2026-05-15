import { TeamMember, Project, SocialPost, JournalEntry, GlossaryTerm, Testimonial, TutorialStep, HeroImage } from './types';

export const teamMembers: TeamMember[] = [
  {
    name: 'EL AKKAD SAMI',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    role: 'Creator of S.S.O. 👑',
    bio: 'Lead developer for \'S.S.O.\', Sami was the architect behind our most ambitious project. He specialized in advanced prompt engineering, pioneering our use of `responseSchema` to guarantee structured data from the Gemini API and designing the custom markup parser that brings our dynamic UI to life.',
    socials: {
      twitter: 'https://x.com/SAMIELAKKAD',
      linkedin: 'https://www.linkedin.com/in/sami-el-akkad-5a3632239/',
      github: 'https://github.com/SAMI-ELAKKAD'
    }
  },
  {
    name: 'CHUTIRAT SAENGYINGYONGWATTANA',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    role: 'Creator of Miscellaneous Tutor 🤖',
    bio: 'Lead developer for \'Miscellaneous Tutor\', Chutirat engineered a fully client-side educational chatbot. She focused on creating a dynamic user experience with vanilla JavaScript and integrating the DeepSeek API to generate interactive HTML learning modules on the fly.',
    socials: {
        linkedin: 'https://www.linkedin.com/in/chutirat-saengyingyongwattana-524823269/',
        github: 'https://github.com/csaeng'
    }
  },
  {
    name: 'Camellia Yip',
    photoUrl: 'https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=400&auto=format&fit=crop',
    role: 'Founder of Ask Smart',
    bio: 'Founder of Ask Smart, Camellia builds cognitive AI wearables that run fully on-device.Combining neuroscience insight with real-time multimodal modeling, she designs systems that process voice, text, and subtle emotional cues locally — turning empathy into an engineered feature of everyday communication.'
  }
];

export const teamMemberSkills: { [key: string]: string[] } = {
    'EL AKKAD SAMI': ['Advanced Prompt Engineering', 'Gemini API', 'responseSchema', 'Custom Parsers'],
    'CHUTIRAT SAENGYINGYONGWATTANA': ['Vanilla JavaScript', 'HTML/CSS', 'DeepSeek API', 'Client-Side Apps'],
    'Camellia Yip': ['Edge AI Wearables', 'TinyML Training', 'Emotion Recognition', 'Real-time Feedback', 'Emotion-Aware Interfaces']
};

export const projects: Project[] = [
  {
    id: 'sso',
    name: 'S.S.O.',
    tagline: "An AI-native educational OS that transforms learning into a gamified 'Hero's Journey'. A complete ecosystem with every tool a student, teacher, or administrator needs to thrive.",
    tags: ["Gamification", "Gamified Curriculum", "Hero's Journey", "Narrative-Driven Education", "Cultural Heroes", "Folklore in Education", "Historical Personas", "Student Engagement", "Learning Quests", "Personalized Learning", "Adaptive Learning", "Age-Adaptive Content", "Cross-Curricular Learning", "Global Education", "AI Mentor", "Curriculum Generation", "Lesson Kit Generation", "Teacher Automation", "Admin Analytics", "Educational OS", "AI-Native", "Multimodal AI", "Privacy-First", "Serverless", "AI-Powered Assessment", "Data-Driven Insights", "Real-time Feedback", "Equity Analytics", "EdTech"],
    heroImageUrl: 'https://storage.googleapis.com/aistudio-hosting/history/21224602/projects/f9611593/instances/375b058a/image.jpeg',
    liveDemoUrl: 'https://sovereign-school-os-496150374983.us-west1.run.app',
    githubUrl: 'https://github.com/sami-el-akkad/S.S.O.',
    problemStatement: {
      title: "The Crisis in the Classroom ⚠️",
      content: [
        "Modern education is at a breaking point, failing its most critical stakeholders:",
        "• **For Students: The Engagement Abyss. 📉** The industrial-age, one-size-fits-all curriculum fails to connect with a generation raised on personalization and interactivity, leading to widespread disengagement and wasted potential.",
        "• **For Teachers: The Burnout Epidemic. 🔥** Educators are drowning in administrative tasks—grading, reporting, and endless paperwork. This bureaucratic overload crushes their passion and steals precious time that should be spent inspiring students.",
        "• **For Administrators: Flying Blind. ✈️** School leaders are forced to make critical decisions based on lagging, incomplete data. They lack the real-time, actionable insights needed to effectively allocate resources, support their staff, and guide their institutions into the future."
      ]
    },
    vision: {
        title: "Our Visionary Solution ✨",
        content: [
            "S.S.O. is a massive undertaking designed to be a comprehensive solution for modern education—a project that can handle virtually anything a school needs (literally) and completely reinvents the learning experience.",
            "It is not an incremental improvement; it is a complete reimagining of the educational ecosystem. This AI-native, privacy-first operating system integrates dozens of bespoke functionalities, each meticulously crafted from scratch, to transform every aspect of the school day. We are turning passive classrooms into active, personalized universes of learning where every student, teacher, and administrator is empowered to reach their full potential.",
            "The project is vast in scope, and words cannot fully capture its functionality. To truly understand its potential, we highly recommend watching the video demo."
        ]
    },
    corePillars: [
      {
        targetAudience: 'For Students',
        title: 'The Hero\'s Journey',
        description: 'The AI mentor crafts a unique adventure for every student. It dynamically generates **personalized quests** and **gamified challenges** that fuse core subjects with a student\'s passions (like dinosaurs and space). **Benefit:** This transforms passive lessons into an epic adventure, making learning deeply engaging and personal.',
        icon: 'RocketLaunchIcon'
      },
      {
        targetAudience: 'For Teachers',
        title: 'Mission Control',
        description: 'Instantly generate entire, standards-aligned lesson kits—from slide decks to worksheets—with a single prompt. This isn\'t just an assistant; it\'s an automated curriculum department, freeing teachers to focus on inspiration, not administration.',
        icon: 'ViewColumnsIcon'
      },
      {
        targetAudience: 'For Admins',
        title: 'The Holodeck',
        description: 'Ask complex questions in natural language—"Show me equity gaps in 3rd-grade math scores"—and get instant, actionable insights. The Holodeck transforms raw school data into a strategic command center for proactive, data-informed leadership.',
        icon: 'CubeTransparentIcon'
      }
    ],
    personalization: {
      title: "The AI Engine: Your Universe, Your Rules 🪐",
      content: [
        "At the heart of SSO lies its revolutionary AI personalization engine, which transforms education into a bespoke 'Hero's Journey' for every student. The system architecturally abandons the one-size-fits-all model for one of infinite possibility.",
        "**From Interests to Identity:** A student loves 'paleontology' and 'cyberpunk'. The AI doesn't just note this; it fuses them, generating a unique 'Cyborg-Raptor' avatar and a rich persona that becomes the student's identity across all subjects.",
        "**From Heroes to Mentors:** Students can choose their favorite historical figure, fictional character, or even create a new persona to be their AI teaching companion. Whether it's learning physics from Isaac Newton or creative writing from Shakespeare, the AI adopts the chosen persona, making every interaction a conversation with a hero.",
        "**From Lessons to Quests:** A math lesson on fractions is no longer a worksheet. It's a critical mission to 'calculate jump-drive fuel ratios for your starship'. The AI masterfully reframes abstract concepts into tangible, narrative-driven challenges, making engagement effortless.",
        "**Inclusive by Default:** The engine is architected for true inclusivity. It adapts delivery for diverse learning styles and is hard-coded to generate narratives with a rich tapestry of gender-neutral characters and diverse names. Every student sees themselves as the hero."
      ]
    },
    implementation: {
      title: 'Under the Hood: How We Built It 🛠️',
      content: [
        'The most complex part was ensuring reliable, structured JSON output from the AI for lesson plans, quizzes, and flashcards. We solved this by using the `responseSchema` feature in the Gemini API config, forcing the AI\'s output to match our TypeScript interfaces perfectly.',
        'For the Presentation Generator, we extend this `responseSchema` approach. We prompt the model to return a structured JSON object defining an entire slide deck. This object details slide titles, bullet points, speaker notes, and includes descriptive prompts for `imagen-4.0-generate-001` to generate custom, thematic images, ensuring the visual style matches the students\' game-based adventures.',
        'A key innovation is the dynamic UI parser. We instructed the AI to use a simple markup like `[QUIZ:...]` or `[FLASHCARD:...]` in its chat responses. A custom parser then renders these text snippets as interactive React components for the student.',
        'The \'S.M.A.R.T. Classroom\' feature utilizes `gemini-2.5-flash-native-audio-preview-09-2025` for real-time audio analysis. The raw audio stream is processed on the client, converted into non-identifiable metrics (e.g., speech-to-silence ratio, tonal variation), and then sent to the model for a high-level engagement summary, ensuring no actual student voices are ever stored or transmitted.'
      ]
    },
    keyTakeaways: {
      title: 'Key Takeaways & Learnings 💡',
      content: [
        '**Structured Data is King:** Using `responseSchema` with the Gemini API was a game-changer, guaranteeing reliable JSON output and eliminating flaky parsing logic. This is the bedrock of a stable AI application.',
        '**AI as a UI Generator:** By defining a simple markup language (e.g., `[QUIZ:...]`), we could prompt the AI to generate not just data, but interactive UI components, making the front-end incredibly dynamic.',
        '**Privacy-by-Design is Non-Negotiable:** For sensitive features like classroom audio analysis, performing all processing on the client-side is crucial. It\'s possible to extract valuable, non-identifiable metrics without ever sending raw user data to the cloud.'
      ]
    },
    result: {
      videoUrl: 'https://www.youtube.com/watch?v=GiT1a5auorA',
      summary: [
        '**Scenario 1: A Student\'s Quest. 🧑‍🚀** Maya, a 4th grader who loves space, receives a learning quest about asteroid impacts. Her lesson includes interactive flashcards on dinosaur species and a quiz on orbital mechanics, all framed as a mission for her \'Dino-Astronaut\' hero.',
        '**Scenario 2: A Teacher\'s Time-Saver. ⏳** Mr. Davis needs a presentation on "Ancient Egypt" for his 10-year-olds. He requests a 10-slide deck with a "treasure hunt" theme. The AI generates "The Pharaoh\'s Quest," complete with interactive quiz slides and thematic images, saving him hours of prep time.',
        '**Scenario 3: An Administrator\'s Insight. 📈** The principal uses the Holodeck to ask, "What are the key engagement trends this month?" The AI analyzes anonymized data and reports a dip in afternoon engagement, suggesting a need for more interactive activities after lunch.'
      ]
    },
    timeline: [
      {
        date: 'Station 1',
        title: 'The Blueprint: Identifying the Crisis',
        description: 'Before a single line of code was written, the project began with deep global research. I conducted surveys and scoured the internet to understand the core problems plaguing modern education. The findings were clear: students were disengaged, teachers were buried in administrative work, and administrators lacked actionable insights. This research culminated in a comprehensive blueprint—a detailed plan to build a holistic solution that would systematically address and fix each of these critical pain points.'
      },
      {
        date: 'Station 2',
        title: 'The Global Pantheon',
        description: 'The journey began with a massive vision: learning through heroes. The first step was a deep dive into Cultural Research, identifying hundreds of historical figures, scientists, and folkloric heroes from dozens of countries. From the start, the core architecture was decided: a serverless approach using localStorage to ensure absolute privacy-by-design.'
      },
      {
        date: 'Station 3',
        title: 'The Persona Engine',
        description: 'With a roster of heroes, the next challenge was bringing them to life. I engineered a sophisticated Prompt Engineering pipeline to "download" a hero\'s persona. Using gemini-2.5-pro, I could distill biographical data into a structured persona object (tone, expertise, etc.), guaranteed by a strict responseSchema. This was the soul of the AI mentor.'
      },
      {
        date: 'Station 4',
        title: 'The Master Storyteller',
        description: 'Personas needed narratives. I architected the AI to be a master storyteller, a "Dungeon Master" for education. I developed prompts that could take any curriculum standard and weave it into a Narrative-Driven Quest tailored to the hero\'s unique voice. Physics with Newton wasn\'t a lecture; it was a mission to uncover the laws of the universe.'
      },
      {
        date: 'Station 5',
        title: 'The Gamification Layer',
        description: 'Stories need mechanics. I designed the systems for XP, skills, and achievements, all tied to learning objectives. The key innovation was a custom markup language (e.g., [QUIZ:{...}]) that the Storyteller AI could embed in its narratives. A Dynamic UI Parser on the frontend then rendered these tags as interactive, game-like React components.'
      },
      {
        date: 'Station 6',
        title: 'The AI Mentor Chatbot',
        description: 'This is where it all came together for the student. I built the Conversational AI interface where the student chats directly with their hero. The chatbot had to maintain context, stay perfectly in character using the persona from Station 3, and seamlessly deploy the interactive widgets from Station 5. The Hero\'s Journey was now fully interactive.'
      },
      {
        date: 'Station 7',
        title: 'Mission Control for Teachers',
        description: 'With the student experience perfected, I expanded to empower the teachers. I built the "Mission Control" portal, featuring a one-click Lesson Kit Generator. It used the same robust responseSchema to output entire slide decks, worksheets, and rubrics, with thematic images generated by imagen-4.0-generate-001.'
      },
      {
        date: 'Station 8',
        title: 'The Holodeck & The Guardian',
        description: 'The final pieces were the Admin portal and advanced features. I built the Data Holodeck for natural language data queries. Then, for the S.M.A.R.T. Classroom, I implemented the "Guardian" feature: a privacy-first system using gemini-2.5-flash-native-audio-preview-09-2025 for client-side audio analysis.'
      },
      {
        date: 'Station 9',
        title: 'The Unification',
        description: 'The final weeks were about integrating all three portals into a single, cohesive OS. This involved extensive end-to-end testing, refining the global UI/UX to ensure a seamless experience, and preparing the final documentation and deployment. What started as a concept became a fully-realized, feature-complete ecosystem.'
      },
      {
        date: 'Station 10',
        title: 'The Global Classroom: Real-World Impact',
        description: 'Upon completion, S.S.O. was sent to dozens of educators and students across different countries for real-world testing. The feedback was overwhelmingly positive. They reported it dramatically changed classroom dynamics, solving many long-standing problems. Schools are now becoming fun, interest-based, and interactive environments. Many of these initial testers are now actively using S.S.O., demonstrating its profound impact on making education a truly personalized and engaging journey.'
      }
    ],
    keyPrompts: [
        {
            context: 'For the Teacher\'s Portal, to generate a full lesson plan as a structured JSON object.',
            prompt: 'You are an expert curriculum designer for K-12 education. Generate a complete 45-minute lesson plan for a [GRADE LEVEL] class on the topic of "[TOPIC]". The output MUST be a JSON object that strictly follows this schema: { "title": "string", "objective": "string", "materials": ["item1", "item2"], "activities": [{ "name": "string", "duration_minutes": "integer", "description": "string" }] }. Ensure the activities are engaging and age-appropriate.'
        },
        {
            context: 'For the Student Portal, to generate a personalized "quest" based on their interests.',
            prompt: 'You are a master storyteller and game designer. A student loves [INTEREST 1] and [INTEREST 2]. Create a short, exciting learning "quest" for them about [LEARNING TOPIC]. The quest should have a catchy title, a one-paragraph story introduction, and three clear "tasks" they need to complete. The tone should be adventurous and encouraging. Weave in elements from their interests. Include an interactive element using this markup: [QUIZ: ...].'
        }
    ]
  },
  {
    id: 'miscellaneous-tutor',
    name: 'Miscellaneous Tutor',
    tagline: 'An interactive web-based educational chatbot that provides engaging learning experiences across a wide variety of topics through AI-powered conversations and interactive modules.',
    tags: ["AI Chatbot", "Education", "Interactive Learning", "DeepSeek API", "Vanilla JS", "Client-Side AI"],
    heroImageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    liveDemoUrl: 'https://misceltutorai-demo.zeabur.app/',
    githubUrl: 'https://github.com/csaeng/Miscellaneous_Tutor_AIID',
    problemStatement: {
      title: "The Static Learning Experience",
      content: [
        "Traditional online learning often relies on static text and videos, which can be passive and disengaging for many learners.",
        "There's a lack of personalized, on-demand tutoring that can adapt to a user's curiosity and generate tailored educational content instantly.",
        "Learners often have to switch between different platforms for explanations, visualizations, and quizzes, fragmenting the educational process."
      ]
    },
    vision: {
        title: "A Universal AI Tutor",
        content: [
            "Miscellaneous Tutor aims to be a single, conversational interface for learning. By leveraging a powerful language model, it provides a dynamic and responsive educational experience. Whether a user wants a simple explanation, an interactive diagram, or a quick quiz, the tutor can generate it on the fly, making learning more accessible, engaging, and personalized."
        ]
    },
    corePillars: [
      {
        targetAudience: 'Key Component',
        title: 'Real-time Chat Interface',
        description: 'Engage in a dynamic conversation with the AI tutor, featuring message history persistence, loading indicators, and error handling for a smooth experience.',
        icon: 'ChatBubbleLeftRightIcon'
      },
      {
        targetAudience: 'Key Component',
        title: 'Interactive Learning Modules',
        description: 'Receive rich, AI-generated HTML content embedded directly in the chat. Modules are fully responsive and support a fullscreen mode for immersive learning.',
        icon: 'ViewColumnsIcon'
      },
      {
        targetAudience: 'Key Component',
        title: 'On-Demand Quiz System',
        description: 'Test your knowledge with multiple question types. The AI provides instant feedback and scoring to help you identify and review weak areas.',
        icon: 'AcademicCapIcon'
      }
    ],
    implementation: {
      title: 'Pure Client-Side Power 🛠️',
      content: [
        'The entire application is built with vanilla HTML, CSS, and JavaScript, demonstrating that a powerful AI experience doesn\'t require complex frameworks. It runs entirely in the browser, using the DeepSeek API for AI-powered content generation. The key innovation is prompting the AI to return self-contained HTML modules that are rendered directly into the UI.'
      ]
    },
    keyTakeaways: {
      title: 'Key Takeaways & Learnings 💡',
      content: [
        '**AI-Generated HTML is Viable:** Modern LLMs are surprisingly proficient at generating self-contained HTML/CSS/JS modules. This allows for the creation of rich, interactive content on the fly without complex front-end frameworks.',
        '**The Power of Vanilla JS:** A powerful, serverless AI application can be built with just vanilla JavaScript. This approach maximizes performance, simplifies deployment, and reduces dependencies, proving that complexity isn\'t always necessary.',
        '**The System Prompt is Everything:** A well-crafted system prompt is the most critical part of an AI application. It is the constitution that governs the AI\'s behavior, personality, and output format, directly shaping the entire user experience.'
      ]
    },
    result: {
      videoUrl: 'https://drive.google.com/file/d/1LNtAOdoTIEit5_tVV_aisVCjwziic0j7/view?usp=drivesdk',
      summary: [
        '**Prompt:** "Teach me about photosynthesis" -> **Response:** An interactive lesson with diagrams.',
        '**Prompt:** "Explain quantum physics in simple terms" -> **Response:** A simplified explanation with examples.',
        '**Prompt:** "Give me a quiz about World War II" -> **Response:** A multiple-choice quiz with instant feedback.',
        '**Prompt:** "Show me an interactive lesson about the solar system" -> **Response:** A multi-slide lesson with animations.'
      ]
    },
    timeline: [
        { date: 'Weeks 1-2: Foundation & UI 🎨', title: 'UI Scaffolding & Core Logic', description: 'Built the core HTML structure and CSS for the chat interface using pure vanilla JS. Focused on creating a clean, responsive layout, message bubbles, input area, and theme toggling. Implemented the foundational JavaScript for managing message history.' },
        { date: 'Weeks 3-4: API Integration 🔌', title: 'Connecting to the AI Brain', description: 'Engineered the logic to connect to the DeepSeek API. This involved managing the conversation state, handling asynchronous API responses and errors, and displaying loading indicators for a smooth user experience.' },
        { date: 'Weeks 5-6: Interactive Modules & Polish ✨', title: 'Dynamic Content Rendering', description: 'Developed the core innovation: prompting the AI to return self-contained HTML. Wrote the client-side logic to safely render this AI-generated code into iframes, creating the interactive lessons and quizzes. Added a fullscreen mode and polished the final UI.' }
    ],
    keyPrompts: [
        {
            context: 'The main system prompt to configure the AI\'s behavior as an educational tutor.',
            prompt: 'You are the Miscellaneous Tutor, an AI assistant designed to provide educational content. When a user asks you to teach them about a topic, you MUST generate a comprehensive, interactive learning module using HTML, CSS, and JavaScript. The module should be well-structured, visually appealing, and may include elements like diagrams, multi-part slides with navigation, and quizzes. For simple questions, provide a clear, concise text answer. All HTML responses must be self-contained within a single HTML document.'
        }
    ]
  },
  {
    id: 'ask-smart',
    name: 'Ask Smart',
    tagline: 'The Invisible Layer of Clarity.',
    tags: ["Communication", "AI Tool", "Real-time Feedback", "GSAP", "ROKID", "AI Glasses", "Edge AI Wearables", "TinyML Training", "Emotion Recognition", "Emotion-Aware Interfaces"],
    heroImageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/jordan-lee-dev/Ask_Smart_AIID',
    problemStatement: {
      title: "The Communication Breakdown",
      content: [
        "In high-pressure conversations, emotional reactions often overshadow clear communication. People lose their center, react instead of understand, and miss subtle conversational cues, leading to misunderstandings and conflict in both professional and personal settings."
      ]
    },
    vision: {
        title: "Restoring Empathy with AI",
        content: [
            "Ask Smart is not about replacing empathy, but restoring it. It provides a lightweight, 'invisible layer' of AI that listens, senses, and reflects—right when it's needed most. It offers quiet guidance to help people stay centered, speak with awareness, and decide with calm, fostering healthier and more effective communication."
        ]
    },
    corePillars: [
      {
        targetAudience: 'For Professionals & Individuals',
        title: 'Real-time Sensing',
        description: 'Detects subtle conversational cues like tone, pace, and hesitation, providing a deeper layer of awareness without being intrusive.',
        icon: 'CpuChipIcon'
      },
      {
        targetAudience: 'For High-Stakes Moments',
        title: 'Quiet Guidance',
        description: 'Offers gentle, single-sentence prompts and moments of perspective, helping you recenter yourself during a difficult conversation.',
        icon: 'LightBulbIcon'
      },
      {
        targetAudience: 'For Holistic Support',
        title: 'Dual Focus: Work & Life',
        description: 'Tailored coaching for both professional challenges (Meeting Coach, Client Sensing) and personal growth (Therapeutic Loop).',
        icon: 'ChatBubbleLeftRightIcon'
      }
    ],
    implementation: {
      title: 'Lightweight & Privacy-First 🍃',
      content: [
        'Conceptually designed for edge AI wearables, Ask Smart runs entirely on-device using TinyML models for real-time emotion recognition and communication analysis. It processes voice, text, and subtle emotional cues locally, ensuring user privacy by design.',
        'The front-end demonstration utilizes GSAP (GreenSock Animation Platform) to simulate this fluid, real-time feedback loop in a browser environment, showcasing the "invisible layer" concept.'
      ]
    },
    keyTakeaways: {
      title: 'Key Takeaways & Learnings 💡',
      content: [
        '**Minimalist AI Interfaces are Powerful:** AI doesn\'t always need a complex chat UI. For real-time guidance, a subtle, "invisible layer" of single-sentence prompts can be more effective and less distracting.',
        '**Animation is Key for Futuristic UX:** Using a high-performance animation library like GSAP can transform a simple UI into a fluid, futuristic experience that feels responsive and intelligent, which is crucial for next-gen hardware.',
        '**Design for Future Hardware:** Thinking beyond the traditional screen (for AR glasses like ROKID) encourages a design philosophy focused on context-awareness and minimal, high-impact information display.'
      ]
    },
    result: {
      videoUrl: 'https://youtu.be/wMdn9R4T_x8',
      summary: [
        '**Work Scenario:** In a tense negotiation, the "Meeting Coach" detects a rapid pace and heightened tone. It quietly prompts the user\'s AR display: "Suggestion: A moment of silence can be powerful." This helps de-escalate the situation.',
        '**Life Scenario:** During a difficult family conversation, the "Therapeutic Loop" senses avoidance patterns. It suggests: "Perspective: What is the unspoken feeling here?" This encourages deeper, more honest communication.'
      ]
    },
    timeline: [
        { date: 'Weeks 1-2: Concept & Core UI 🧠', title: 'Designing for the "Invisible Layer"', description: 'Defined the core concept of "quiet guidance" for AR wearables. Built the basic HTML structure for the work and life scenario pages with a modern, futuristic dark theme, focusing on a minimal, high-impact information display.' },
        { date: 'Weeks 3-4: GSAP Animations & Logic ⚙️', title: 'Simulating Real-time Feedback', description: 'Integrated GSAP to create the fluid background animations, HUD elements, and card transitions. Wrote the core JavaScript logic for simulating the real-time communication analysis and feedback loop, bringing the concept to life in a browser.' },
        { date: 'Weeks 5-6: Content & Polish ✨', title: 'Crafting the Narrative', description: 'Populated the scenario pages with detailed content, refined all animations for a fluid feel, and ensured the design was fully responsive across devices. Finalized the conceptual system prompt for the on-device TinyML model.' }
    ],
    keyPrompts: [
        {
            context: 'The core system prompt used to train the on-device TinyML model for real-time communication analysis.',
            prompt: 'You are an expert communication coach specializing in real-time, empathetic feedback. Given a conversational input containing text, vocal tone analysis (e.g., {pitch: "high", pace: "rapid"}), and sentiment, your task is to generate a single, concise, non-intrusive guidance suggestion (under 15 words). The output must be a JSON object with this schema: { "guidance": "string" }. Focus on de-escalation, empathy, and clarity. The model must be lightweight enough to run on-device.'
        }
    ]
  }
];

export const socialPosts: SocialPost[] = [
    { platform: 'X/Twitter', imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=800&auto=format&fit=crop', link: '#', caption: 'Thrilled to launch our hackathon project, S.S.O.! An AI-native OS to revolutionize the classroom. 🚀 #AIIDHackathon #GenAI' },
    { platform: 'LinkedIn', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', link: '#', caption: 'Our team, AI-Explorers, just wrapped up an incredible 72 hours at the #AIIDHackathon. We built three full-stack generative AI applications. Check out our documentation site to see our journey. 👇' }
];

export const testimonials: Testimonial[] = [
    { quote: "S.S.O. is a game-changer. The idea of a privacy-first, serverless solution for education is exactly what the world needs. Truly inspiring work.", author: 'Dr. Evelyn Reed', platform: 'LinkedIn Comment', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop', country: 'Canada' },
    { quote: "Incrível! The level of detail in the documentation and the quality of the projects are top-notch. The world needs more teams like the AI-Explorers.", author: 'Isabella Costa', platform: 'Dev.to Comment', avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop', country: 'Brazil' },
    { quote: "The design and execution of the S.S.O. project are brilliant. It's a clear vision for the future of educational technology. As a developer, I'm truly impressed.", author: 'Kenji Tanaka', platform: 'GitHub Discussion', avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop', country: 'Japan' },
    { quote: "Fantastic documentation! This team has set a new standard for hackathon projects.", author: 'Anja Schmidt', platform: 'X/Twitter', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop', country: 'Germany' },
    { quote: "The 'Miscellaneous Tutor' is a simple yet powerful concept. The ability to generate interactive HTML lessons on the fly is a game-changer for accessible learning.", author: 'Priya Patel', platform: 'LinkedIn Comment', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop', country: 'India' },
    { quote: "The 'Ask Smart' concept is so innovative. Real-time communication guidance is something many professionals could benefit from. The futuristic UI is just the cherry on top.", author: 'Michael B.', platform: 'Product Hunt', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop', country: 'USA' },
];

export const journalEntries: JournalEntry[] = [
  // EL AKKAD SAMI's Journey
  {
      author: 'EL AKKAD SAMI',
      date: 'Station 1',
      title: 'The Blueprint: Identifying the Crisis',
      content: [
          'Before a single line of code was written, the project began with [kw-secondary]deep global research[/kw-secondary]. I conducted surveys and scoured the internet to understand the core problems plaguing modern education. The findings were clear: students were disengaged, teachers were buried in administrative work, and administrators lacked actionable insights. This research culminated in a [kw-accent]comprehensive blueprint[/kw-accent]—a detailed plan to build a holistic solution that would systematically address and fix each of these critical pain points.'
      ]
  },
  {
      author: 'EL AKKAD SAMI',
      date: 'Station 2',
      title: 'The Global Pantheon',
      content: [
          'The journey began with a massive vision: learning through heroes. The first step was a deep dive into [kw-secondary]Cultural Research[/kw-secondary], identifying hundreds of historical figures, scientists, and folkloric heroes from dozens of countries. From the start, the core architecture was decided: a [kw-accent]serverless[/kw-accent] approach using [kw-accent]localStorage[/kw-accent] to ensure absolute [kw-accent]privacy-by-design[/kw-accent].'
      ]
  },
  {
      author: 'EL AKKAD SAMI',
      date: 'Station 3',
      title: 'The Persona Engine',
      content: [
          'With a roster of heroes, the next challenge was bringing them to life. I engineered a sophisticated [kw-primary]Prompt Engineering[/kw-primary] pipeline to "download" a hero\'s persona. Using [kw-primary]gemini-2.5-pro[/kw-primary], I could distill biographical data into a structured persona object (tone, expertise, etc.), guaranteed by a strict [kw-primary]responseSchema[/kw-primary]. This was the soul of the AI mentor.'
      ]
  },
  {
      author: 'EL AKKAD SAMI',
      date: 'Station 4',
      title: 'The Master Storyteller',
      content: [
          'Personas needed narratives. I architected the AI to be a master storyteller, a "Dungeon Master" for education. I developed prompts that could take any curriculum standard and weave it into a [kw-secondary]Narrative-Driven Quest[/kw-secondary] tailored to the hero\'s unique voice. Physics with Newton wasn\'t a lecture; it was a mission to uncover the laws of the universe.'
      ]
  },
   {
      author: 'EL AKKAD SAMI',
      date: 'Station 5',
      title: 'The Gamification Layer',
      content: [
          'Stories need mechanics. I designed the systems for XP, skills, and achievements, all tied to learning objectives. The key innovation was a custom markup language ([kw-secondary]e.g., [QUIZ:{...}][/kw-secondary]) that the Storyteller AI could embed in its narratives. A [kw-secondary]Dynamic UI Parser[/kw-secondary] on the frontend then rendered these tags as interactive, game-like [kw-accent]React components[/kw-accent].'
      ]
  },
  {
      author: 'EL AKKAD SAMI',
      date: 'Station 6',
      title: 'The AI Mentor Chatbot',
      content: [
          'This is where it all came together for the student. I built the [kw-primary]Conversational AI[/kw-primary] interface where the student chats directly with their hero. The chatbot had to maintain context, stay perfectly in character using the persona from Station 3, and seamlessly deploy the interactive widgets from Station 5. The [kw-secondary]Hero\'s Journey[/kw-secondary] was now fully interactive.'
      ]
  },
  {
      author: 'EL AKKAD SAMI',
      date: 'Station 7',
      title: 'Mission Control for Teachers',
      content: [
          'With the student experience perfected, I expanded to empower the teachers. I built the "Mission Control" portal, featuring a one-click [kw-accent]Lesson Kit Generator[/kw-accent]. It used the same robust [kw-primary]responseSchema[/kw-primary] to output entire slide decks, worksheets, and rubrics, with thematic images generated by [kw-primary]imagen-4.0-generate-001[/kw-primary].'
      ]
  },
  {
      author: 'EL AKKAD SAMI',
      date: 'Station 8',
      title: 'The Holodeck & The Guardian',
      content: [
          'The final pieces were the Admin portal and advanced features. I built the [kw-secondary]Data Holodeck[/kw-secondary] for natural language data queries. Then, for the [kw-secondary]S.M.A.R.T. Classroom[/kw-secondary], I implemented the "Guardian" feature: a privacy-first system using [kw-primary]gemini-2.5-flash-native-audio-preview-09-2025[/kw-primary] for [kw-accent]client-side audio analysis[/kw-accent].'
      ]
  },
  {
      author: 'EL AKKAD SAMI',
      date: 'Station 9',
      title: 'The Unification',
      content: [
          'The final weeks were about integrating all three portals into a single, [kw-secondary]cohesive OS[/kw-secondary]. This involved extensive [kw-accent]end-to-end testing[/kw-accent], refining the global UI/UX to ensure a seamless experience, and preparing the final documentation and deployment. What started as a concept became a fully-realized, feature-complete ecosystem.'
      ]
  },
    {
      author: 'EL AKKAD SAMI',
      date: 'Station 10',
      title: 'The Global Classroom: Real-World Impact',
      content: [
          'Upon completion, S.S.O. was sent to dozens of educators and students across [kw-secondary]different countries for real-world testing[/kw-secondary]. The feedback was overwhelmingly positive. They reported it [kw-accent]dramatically changed classroom dynamics[/kw-accent], solving many long-standing problems. Schools are now becoming fun, [kw-secondary]interest-based, and interactive[/kw-secondary] environments. Many of these initial testers are now actively using S.S.O., demonstrating its profound impact on making education a truly personalized and engaging journey.'
      ]
  },
  // CHUTIRAT SAENGYINGYONGWATTANA's Journey
  {
      author: 'CHUTIRAT SAENGYINGYONGWATTANA',
      date: 'Weeks 1-2: Vanilla JS Foundation',
      title: 'From Chat UI to API Integration',
      content: [
          'My goal for the Miscellaneous Tutor was to prove that a powerful, responsive AI application could be built without heavy frameworks. I started with the basics: pure HTML, CSS, and JavaScript. The first step was building a clean, modern chat interface from scratch. I focused on getting the details right—message bubbles, loading indicators, and a persistent conversation history that felt smooth and intuitive.',
          'Once the UI was solid, I moved on to integrating the DeepSeek API. This involved writing the core logic to manage the conversation state, package the user\'s input, and send it to the AI. Handling the asynchronous nature of API calls and displaying responses correctly was the main challenge of this phase. It was all about building a stable foundation for the more complex features to come.'
      ]
  },
  {
      author: 'CHUTIRAT SAENGYINGYONGWATTANA',
      date: 'Weeks 3-5: The Core Innovation',
      title: 'Getting the AI to Build the Frontend',
      content: [
          'The project\'s core idea came to life in this period. Instead of just getting text back from the AI, what if I could get fully interactive HTML? I began experimenting with the system prompt, instructing the AI to act as an educational content designer and to respond with self-contained HTML, CSS, and JavaScript for any complex request.',
          'This was a huge breakthrough. A user asking about "photosynthesis" could now receive an interactive diagram instead of a wall of text. The biggest technical challenge was rendering this AI-generated code safely. I decided to use an `iframe` to sandbox the content, preventing any potential style conflicts or script issues with the main application. This allowed for rich, dynamic modules without compromising the integrity of the core app.'
      ]
  },
  {
      author: 'CHUTIRAT SAENGYINGYONGWATTANA',
      date: 'Weeks 6-8: Refinement and Polish',
      title: 'Mastering the System Prompt',
      content: [
          'The final weeks were dedicated to refining the "constitution" of the AI—the system prompt. I expanded its capabilities, teaching it how to generate different types of modules, like multi-part lessons with navigation buttons and interactive quizzes with feedback. I learned that the quality of the system prompt directly determined the quality of the user experience.',
          'I also focused on polishing the UI, adding features like a fullscreen mode for the interactive modules and ensuring the entire application was fully responsive. The project stands as a testament to the power of vanilla JavaScript and clever prompt engineering. It demonstrates that you can create incredibly dynamic, AI-driven experiences with a surprisingly simple and lightweight tech stack.'
      ]
  },
  // Camellia Yip's Journey
  {
      author: 'Camellia Yip',
      date: 'Weeks 1-3: Conceptual Design',
      title: 'Beyond the Screen: Designing for AR',
      content: [
          'Ask Smart was never just a web app; it\'s a concept for a future hardware platform—edge AI wearables like the ROKID glasses. So, the first weeks were purely conceptual. I wasn\'t designing for a screen; I was designing for a subtle, "invisible layer" of information in someone\'s field of view during a high-pressure conversation.',
          'The core principle was "quiet guidance." The AI shouldn\'t be a distracting chatbot. It should offer single-sentence prompts to help the user recenter. This philosophy drove every design decision, from the minimalist UI to the types of feedback provided in the "Meeting Coach" and "Therapeutic Loop" scenarios.'
      ]
  },
  {
      author: 'Camellia Yip',
      date: 'Weeks 4-6: Simulating the Future',
      title: 'Bringing the Vision to Life with GSAP',
      content: [
          'How do you demonstrate an AR experience in a web browser? The answer was animation. I chose GSAP (GreenSock Animation Platform) because of its power and performance. I used it to create a fluid, futuristic UI that simulates the real-time feedback loop of the conceptual device.',
          'This phase involved building the core application logic in JavaScript and meticulously crafting animations for every element. The background grid, the card transitions, and the analysis feedback were all designed to feel intelligent and responsive, giving the user a glimpse into what the final wearable experience would feel like.'
      ]
  },
  {
      author: 'Camellia Yip',
      date: 'Weeks 7-8: Content and Narrative',
      title: 'Polishing the Scenarios for Impact',
      content: [
          'With the simulation framework in place, the final weeks were about crafting compelling narratives for the demo scenarios. I wrote the content for the "Work" and "Life" examples, focusing on realistic situations where AI-powered emotional intelligence could make a real difference.',
          'I also refined the conceptual system prompt for the on-device TinyML model. The prompt was designed to be lightweight and efficient, focusing on generating concise, empathetic guidance from multimodal inputs (text, tone, pace). The final project is more than a demo; it\'s a polished vision of a future where AI restores empathy to our conversations, rather than replacing it.'
      ]
  }
];

export const glossaryTerms: GlossaryTerm[] = [
    { term: 'responseSchema', definition: 'A feature in the Gemini API that allows developers to define a JSON schema for the model\'s output. This forces the AI to return data in a specific, structured format, eliminating the need for complex parsing and making the AI\'s responses more reliable for use in applications.' },
    { term: 'Serverless Architecture', definition: 'A design pattern where the application logic is run in stateless compute containers that are event-triggered, ephemeral, and fully managed by a third party. In our case, it refers to a 100% client-side application where all logic and data storage (using `localStorage`) happens in the user\'s browser, requiring no backend server.' }
];


export const tutorialData: TutorialStep[] = [];

export const projectDemos = [
    { 
        projectName: 'S.S.O.', 
        imageUrl: 'https://storage.googleapis.com/aistudio-hosting/history/21224602/projects/f9611593/instances/375b058a/image.jpeg', 
        link: '/project1', 
        description: 'A glimpse into the Teacher\'s Portal, where an entire, game-themed slide deck is generated in seconds based on a simple prompt.' 
    },
    { 
        projectName: 'Miscellaneous Tutor', 
        imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop', 
        link: '/project2', 
        description: 'A user asks the AI to teach them about the solar system, and it generates an interactive, multi-slide HTML lesson on the fly.' 
    },
    { 
        projectName: 'Ask Smart', 
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=800&auto=format&fit=crop', 
        link: '/project3', 
        description: 'Experience the "invisible layer" of clarity as the AI analyzes a conversation and offers quiet, helpful guidance in real-time.' 
    },
];

export const projectSummaries: { [key: string]: string } = {
    'sso': "A massive, AI-native operating system built from the ground up to revolutionize the entire educational ecosystem. It transforms learning into a gamified 'Hero's Journey' for students with personalized quests, provides teachers with an AI copilot to automate lesson planning and generate entire lesson kits, and equips administrators with a data-driven 'Holodeck' for real-time, actionable school insights. This is not just a tool; it's a comprehensive, privacy-first, serverless platform for the future of education.",
    'miscellaneous-tutor': 'An AI-powered educational chatbot that uses the DeepSeek API to generate interactive HTML lessons and quizzes on any topic, right in your chat window.',
    'ask-smart': 'An AI-powered communication coach for ROKID glasses that provides real-time, subtle guidance to help you navigate high-pressure conversations.'
};

export const ssoHeroImages: HeroImage[] = [
  // Countries
  { id: 'tokyo', url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop', alt: 'Neon-lit streets of Tokyo at night', category: 'Countries' },
  { id: 'cairo', url: 'https://images.unsplash.com/photo-1569056314955-633f5a386d82?q=80&w=1200&auto=format&fit=crop', alt: 'The pyramids of Giza near Cairo', category: 'Countries' },
  { id: 'paris', url: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=1200&auto=format&fit=crop', alt: 'The Eiffel Tower in Paris', category: 'Countries' },
  { id: 'rio', url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200&auto=format&fit=crop', alt: 'Christ the Redeemer statue in Rio de Janeiro', category: 'Countries' },
  // Fantasy
  { id: 'dragon', url: 'https://images.unsplash.com/photo-1576676392331-9a7a2305a4ec?q=80&w=1200&auto=format&fit=crop', alt: 'A dragon in its mountainous lair', category: 'Fantasy' },
  { id: 'elf-forest', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop', alt: 'An enchanted elven forest with glowing flora', category: 'Fantasy' },
  { id: 'magic-castle', url: 'https://images.unsplash.com/photo-1574593950117-1a0932598150?q=80&w=1200&auto=format&fit=crop', alt: 'A magical castle floating in the sky', category: 'Fantasy' },
  { id: 'underwater-city', url: 'https://images.unsplash.com/photo-1535142893413-a44d2150186c?q=80&w=1200&auto=format&fit=crop', alt: 'A lost underwater city', category: 'Fantasy' },
  // Sci-Fi
  { id: 'cyberpunk', url: 'https://images.unsplash.com/photo-1534488972412-13a85ffd7699?q=80&w=1200&auto=format&fit=crop', alt: 'A futuristic cyberpunk city with flying vehicles', category: 'Sci-Fi' },
  { id: 'space-station', url: 'https://images.unsplash.com/photo-1614728263952-84ea256ec346?q=80&w=1200&auto=format&fit=crop', alt: 'A space station orbiting a planet', category: 'Sci-Fi' },
  { id: 'alien-planet', url: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1200&auto=format&fit=crop', alt: 'The landscape of a strange alien planet', category: 'Sci-Fi' },
  { id: 'robot-future', url: 'https://images.unsplash.com/photo-1581092921462-63f2f75d8a8a?q=80&w=1200&auto=format&fit=crop', alt: 'A sleek robot in a futuristic setting', category: 'Sci-Fi' },
  // History
  { id: 'colosseum', url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop', alt: 'The Roman Colosseum', category: 'History' },
  { id: 'viking-village', url: 'https://images.unsplash.com/photo-1613997242823-f22b82c49a62?q=80&w=1200&auto=format&fit=crop', alt: 'A Viking village by a fjord', category: 'History' },
  { id: 'ancient-library', url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop', alt: 'An ancient library filled with scrolls', category: 'History' },
  { id: 'samurai', url: 'https://images.unsplash.com/photo-1590858583487-920f187396a6?q=80&w=1200&auto=format&fit=crop', alt: 'A samurai warrior near a Japanese temple', category: 'History' },
  // Nature
  { id: 'rainforest', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop', alt: 'Sunbeams shining through a lush rainforest', category: 'Nature' },
  { id: 'arctic', url: 'https://images.unsplash.com/photo-1508873760731-9338541d132a?q=80&w=1200&auto=format&fit=crop', alt: 'The aurora borealis over an arctic landscape', category: 'Nature' },
  { id: 'coral-reef', url: 'https://images.unsplash.com/photo-1551214731-6453de18e169?q=80&w=1200&auto=format&fit=crop', alt: 'A vibrant coral reef with tropical fish', category: 'Nature' },
  { id: 'savanna', url: 'https://images.unsplash.com/photo-1547471080-7cc2d5d88e93?q=80&w=1200&auto=format&fit=crop', alt: 'A sunset over the African savanna', category: 'Nature' },
];

export const ssoGlobalAppealPillars = [
  {
    icon: 'GlobeAltIcon',
    title: 'Culturally Adaptive Narratives',
    description: "SSO's AI can dynamically weave local folklore, historical figures, and cultural heroes into its learning quests. A student in Japan might learn physics with help from a samurai persona, while a student in Brazil explores math through adventures in the Amazon rainforest, making education relevant and resonant worldwide."
  },
  {
    icon: 'SparklesIcon',
    title: 'The Universal Language of Fun',
    description: 'Gamification is a language everyone understands. By turning lessons into quests, challenges, and adventures, SSO taps into universal human motivations like curiosity, achievement, and competition, creating an engaging experience that transcends cultural and linguistic barriers.'
  },
  {
    icon: 'LanguageIcon',
    title: 'Multilingual & Accessible',
    description: 'The platform is built to be multilingual from the ground up. The AI can generate content and provide instruction in numerous languages, ensuring that students can learn in their native tongue. This removes barriers and makes high-quality, personalized education accessible to a global student body.'
  },
  {
    icon: 'HeartIcon',
    title: 'Inclusive by Design',
    description: 'At its core, SSO is built on principles of inclusivity. The AI is designed to generate gender-neutral characters, use a diverse range of names, and adapt content for various learning styles and needs. This ensures every student, no matter their background, feels seen, represented, and empowered to be the hero of their own story.'
  }
];