interface NavigationProps {
  activeSection: string;
  sections: Array<{ id: string; title: string }>;
}

export function Navigation({ activeSection, sections }: NavigationProps) {
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
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-research-bg/80 backdrop-blur-lg border-b border-research-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gradient-purple-pink">Hisab</span>
            <span className="ml-2 text-sm text-research-gray-400 font-mono hidden sm:inline">
              Research
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-end overflow-x-auto scrollbar-hide">
            <div className="flex space-x-1 sm:space-x-2">
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
        </div>
      </div>
    </nav>
  );
}
