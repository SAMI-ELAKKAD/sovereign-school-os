# AIID Hackathon 2025 - AI-Explorers Documentation Website

A comprehensive documentation website built for the AIID Hackathon 2025, showcasing our team's collaboration, development processes, and project outcomes. This platform serves as a centralized hub for presenting our hackathon projects, team profiles, and a technical tutorial based on our experience.

**[🚀 View the Live Website](https://aiid-hackathon-group-documentation-438148500299.us-west1.run.app/#/project1)**

## 🏆 Key Features & Documentation Philosophy

To win the "Best Documentation Award," a website must do more than just present information—it must teach, inspire, and tell a compelling story. We built this site around a core philosophy of making complex ideas accessible and engaging.

-   🌌 **Immersive & Interactive UI**: Go beyond static pages. Our site features a dynamic, GPU-accelerated constellation background, responsive aurora effects, and 3D-tilting glassmorphic cards that react to your cursor. This creates a deeply engaging and futuristic user experience that makes exploring our documentation a memorable journey.
-   🧠 **Interactive Technical Storytelling**: We believe in showing, not just telling. Complex concepts are brought to life with interactive visualizations. Our flagship project's system architecture diagram is a fully clickable navigation tool, seamlessly connecting high-level design to in-depth feature explanations.
-   🚀 **Live Vibe Coding Playground**: Our tutorial is a hands-on learning experience. We've embedded an interactive "Vibe Coding" playground where you can describe a UI in plain English and watch the AI generate code in real-time. This isn't just a tutorial; it's a demonstration of our core development philosophy.
-   🌐 **Comprehensive Journey-Oriented Content**: This website tells the complete story of our hackathon. We've meticulously documented everything from our developer journal and a visual progress tracker to a detailed glossary and a showcase of our global community engagement, providing a transparent, holistic view of our process.
-   ⚡ **Rapid & Accessible Navigation**: We value your time. The entire site is navigable via a fast, keyboard-driven command palette (accessible with `⌘K`), allowing for instant access to any page and ensuring a seamless experience for all users.
-   🛠️ **Clean & Scalable Architecture**: Built with React, TypeScript, and Framer Motion, the site's foundation is as robust as its UI is beautiful. By centralizing all content in a single `data.ts` file, we've created a "single source of truth" that makes the entire platform exceptionally easy to update, maintain, and scale.

## 🚀 Project Overview

This website demonstrates modern web development practices using React, TypeScript, and Tailwind CSS to create an elegant, responsive documentation platform. It features a clean architecture with component-based design and client-side routing to deliver a smooth user experience.

## 👥 Team & Credits

This project was a collaborative effort by the members of the **AI-Explorers** learning circle.

-   **EL AKKAD SAMI**: Creator of S.S.O.
    -   **Linkedin**: [SAMI-ELAKKAD](https://www.linkedin.com/in/sami-el-akkad-萨米-361296188/)
    -   **GitHub**: [ELAKKAD-SAMI](https://github.com/SAMI-ELAKKAD)
    -   **Email**: [elakkadsami00@gmail.com](mailto:elakkadsami00@gmail.com)
-   **CHUTIRAT SAENGYINGYONGWATTANA**: Creator of Miscellaneous Tutor
-   **Camellia Yip**: Founder of Ask Smart

## 🏗️ Website Structure

### Main Sections

-   🏠 **Home**: Introduction and overview of our hackathon mission and projects.
-   👥 **Team**: Profiles of our team members and their roles.
-   🤖 **Projects**: Detailed pages for each of our three hackathon projects.
    -   **Sovereign School OS (S.S.O.)**: A gamified AI learning OS that crafts personalized adventures for students and generates instant, game-based presentations for teachers.
    -   **Miscellaneous Tutor**: An AI-powered educational chatbot that uses the DeepSeek API to generate interactive HTML lessons and quizzes on any topic, right in your chat window.
    -   **Ask Smart**: An AI-powered communication coach for ROKID glasses that provides real-time, subtle guidance to help you navigate high-pressure conversations.
-   📡 **Communication**: A showcase of our promotional efforts, social media presence, and community feedback.
-   **Journal**: Our developer logs, sharing challenges and breakthroughs.
-   **Progress**: A timeline view of our development progress across all projects.
-   **Glossary**: Definitions of key technical terms we used.
-   **Tutorial**: A live "Vibe Coding" playground to demonstrate rapid AI-powered prototyping.

## 🛠️ Technology Stack

### Frontend

-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: Provides static typing to enhance code quality and maintainability.
-   **Tailwind CSS**: A utility-first CSS framework used via CDN for rapid UI development.
-   **React Router**: For client-side routing and navigation.
-   **Framer Motion**: For creating fluid animations and transitions.
-   **@google/genai**: The Google Gemini API SDK for powering all generative AI features.

## 🏛️ Project Architecture

### Directory Structure

Our project is organized to be clean, scalable, and easy to navigate. Here's a breakdown of the key files and folders:

```
.
├── components/       # Reusable React components
│   ├── Header.tsx    # Site-wide navigation bar
│   ├── Footer.tsx    # Site-wide footer
│   ├── TeamMemberCard.tsx # Displays individual team member profiles
│   └── ...           # Other shared components (Icons, Modals, etc.)
├── pages/            # Top-level page components for each route
│   ├── HomePage.tsx  # The main landing page
│   ├── ProjectPage.tsx # Template for individual project showcases
│   └── ...           # All other pages (Team, Tutorial, etc.)
├── App.tsx           # Main application component. Manages routing, theme, and layout.
├── data.ts           # The "single source of truth". All text, project details, team bios, etc., are stored here for easy updates without touching component logic.
├── types.ts          # Centralizes all TypeScript type definitions, ensuring data consistency across the app.
├── index.html        # The main HTML file that serves as the entry point for the web application.
├── index.tsx         # The root of our React application. It renders the `App` component into the DOM.
└── metadata.json     # Contains application metadata for the hosting environment.
```

### Key Patterns

-   **Centralized Data**: All content (project details, team bios, etc.) is managed in `data.ts` for easy updates.
-   **Component-First Architecture**: The UI is broken down into small, reusable components.
-   **Type Safety**: Full TypeScript implementation ensures robust and error-free code.
-   **Responsive Design**: Mobile-first styling ensures a great experience on all devices.

## 📱 Responsive Design

The website is fully responsive across all device sizes:

-   **Desktop**: Full-featured layout with hover effects and animations.
-   **Tablet**: Optimized navigation and content layout.
-   **Mobile**: Touch-friendly interface with a collapsible navigation menu.

## 🎨 Design System

### Visual Identity

-   **Color Palette**: A modern dark theme with cyan, fuchsia, and amber as primary accent colors, creating an energetic, futuristic feel.
-   **Typography**: Clean, modern fonts (Inter) with excellent readability.
-   **Spacing**: A consistent spacing system for visual harmony.
-   **Interactions**: Smooth transitions and hover effects powered by Framer Motion.

## 🚀 Deployment

This project is built as a static website, making it easy to deploy on any platform that supports static hosting (e.g., Zeabur, Vercel, Netlify, GitHub Pages). Simply serve the contents of the directory.

## 🤝 Contributing

This project serves as a template for hackathon documentation websites. When contributing or adapting:

-   Follow the established component patterns.
-   Maintain type safety with TypeScript.
-   Update `data.ts` with your own project and team information.
-   Test responsive design across devices.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

-   **AIID Hackathon 2025**: Organizers, mentors, and participants.
-   **Google Gemini Team**: For providing the powerful generative AI models and API.
-   **React & Framer Motion Teams**: For the excellent frontend libraries.