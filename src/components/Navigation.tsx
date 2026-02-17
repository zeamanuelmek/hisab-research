import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  sections: Array<{ id: string; title: string }>;
}

export function Navigation({ activeSection, sections }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-research-bg/90 backdrop-blur-lg border-b border-research-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gradient-purple-pink">Hisab</span>
            <span className="ml-2 text-sm text-research-gray-400 font-mono hidden sm:inline">
              Research
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <div className="flex space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap
                    ${
                      activeSection === section.id
                        ? 'bg-research-purple text-white'
                        : 'text-research-gray-400 hover:text-research-gray-200 hover:bg-research-card'
                    }
                  `}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-research-gray-400 hover:text-research-gray-200 hover:bg-research-card transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-research-bg/95 backdrop-blur-lg border-t border-research-gray-800">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  px-4 py-3 rounded-lg text-sm font-medium transition-all text-left
                  ${
                    activeSection === section.id
                      ? 'bg-research-purple text-white'
                      : 'text-research-gray-400 hover:text-research-gray-200 hover:bg-research-card'
                  }
                `}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
