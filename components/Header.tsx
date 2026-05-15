
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { CodeBracketIcon, XMarkIcon, Bars3Icon, CommandLineIcon } from './IconComponents';

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, children, onClick, className }) => {
  const activeClass = 'text-cyan-400';
  const inactiveClass = 'text-gray-300 hover:text-cyan-400 transition-colors duration-300';
  
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `${isActive ? activeClass : inactiveClass} text-sm font-medium ${className}`}
    >
      {children}
    </NavLink>
  );
};

interface HeaderProps {
  setCommandPaletteOpen: (isOpen: boolean) => void;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ setCommandPaletteOpen, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [isDesktopProjectsOpen, setIsDesktopProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (projectsRef.current && !projectsRef.current.contains(event.target as Node)) {
        setIsDesktopProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [projectsRef]);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsMobileProjectsOpen(false);
    setIsDesktopProjectsOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-sky-400/10' : 'bg-slate-900/50 backdrop-blur-md border-sky-400/20'} border-b`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ease-in-out ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={closeAllMenus} className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300">
              <CodeBracketIcon className="h-8 w-8 text-cyan-500" />
              <span className="font-bold text-lg">AI-Explorers</span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLinkItem to="/" onClick={closeAllMenus}>HOME</NavLinkItem>
            <NavLinkItem to="/team" onClick={closeAllMenus}>TEAM</NavLinkItem>
            <NavLinkItem to="/about-hackathon" onClick={closeAllMenus}>ABOUT</NavLinkItem>
            <div className="relative" ref={projectsRef}>
                <button
                    onClick={() => setIsDesktopProjectsOpen(prev => !prev)}
                    className="text-gray-300 text-sm font-medium cursor-pointer hover:text-cyan-400 flex items-center transition-colors duration-300"
                >
                    <span>PROJECTS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-300 ${isDesktopProjectsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isDesktopProjectsOpen && (
                    <div className="absolute right-0 bg-slate-800 rounded-md shadow-lg mt-2 py-1 w-56 border border-sky-400/20">
                        <NavLinkItem to="/project1" className="block px-4 py-2" onClick={closeAllMenus}>S.S.O.</NavLinkItem>
                        <NavLinkItem to="/project2" className="block px-4 py-2" onClick={closeAllMenus}>Miscellaneous Tutor</NavLinkItem>
                        <NavLinkItem to="/project3" className="block px-4 py-2" onClick={closeAllMenus}>Ask Smart</NavLinkItem>
                    </div>
                )}
            </div>
            <NavLinkItem to="/journal" onClick={closeAllMenus}>JOURNAL</NavLinkItem>
            <NavLinkItem to="/communication" onClick={closeAllMenus}>COMMUNICATION</NavLinkItem>
            <NavLinkItem to="/glossary" onClick={closeAllMenus}>GLOSSARY</NavLinkItem>
            <NavLinkItem to="/tutorial" onClick={closeAllMenus}>TUTORIAL</NavLinkItem>
          </div>
          <div className="flex items-center">
             <button
              onClick={() => setCommandPaletteOpen(true)}
              className="hidden sm:flex items-center p-2 mr-2 rounded-md text-gray-400 hover:bg-gray-800 focus:outline-none transition-colors duration-300 border border-gray-600"
              aria-label="Open command palette"
            >
              <CommandLineIcon className="h-5 w-5 mr-2" />
              <kbd className="font-sans text-xs font-semibold text-gray-400">⌘K</kbd>
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-sky-400/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinkItem to="/" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">HOME</NavLinkItem>
            <NavLinkItem to="/team" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">TEAM</NavLinkItem>
            <NavLinkItem to="/about-hackathon" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">ABOUT</NavLinkItem>
            <div>
                <button onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)} className="w-full text-left text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium flex justify-between items-center">
                    <span>PROJECTS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${isMobileProjectsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isMobileProjectsOpen && (
                    <div className="pl-4 border-l-2 border-gray-700 ml-3">
                        <NavLinkItem to="/project1" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">S.S.O.</NavLinkItem>
                        <NavLinkItem to="/project2" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">Miscellaneous Tutor</NavLinkItem>
                        <NavLinkItem to="/project3" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">Ask Smart</NavLinkItem>
                    </div>
                )}
            </div>
            <NavLinkItem to="/journal" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">JOURNAL</NavLinkItem>
            <NavLinkItem to="/communication" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">COMMUNICATION</NavLinkItem>
            <NavLinkItem to="/glossary" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">GLOSSARY</NavLinkItem>
            <NavLinkItem to="/tutorial" onClick={closeAllMenus} className="block px-3 py-2 rounded-md">TUTORIAL</NavLinkItem>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
