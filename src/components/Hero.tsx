export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-research-purple/20 via-research-bg to-research-pink/20" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold mb-4">
            <span className="text-gradient-purple-pink">Hisab</span>
          </h1>
          <p className="text-2xl md:text-3xl text-research-gray-300 font-light">
            Ethiopia's First Freelancer Protection Platform
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 animate-slide-up">
          <div className="bg-research-card/50 backdrop-blur-sm border border-research-gray-800 rounded-xl p-6 card-glow">
            <div className="text-4xl font-bold text-research-purple mb-2">5</div>
            <div className="text-sm text-research-gray-400 uppercase tracking-wider">Interviews</div>
          </div>
          <div className="bg-research-card/50 backdrop-blur-sm border border-research-gray-800 rounded-xl p-6 card-glow">
            <div className="text-4xl font-bold text-research-pink mb-2">49</div>
            <div className="text-sm text-research-gray-400 uppercase tracking-wider">Notes</div>
          </div>
          <div className="bg-research-card/50 backdrop-blur-sm border border-research-gray-800 rounded-xl p-6 card-glow">
            <div className="text-4xl font-bold text-research-purple mb-2">6</div>
            <div className="text-sm text-research-gray-400 uppercase tracking-wider">Insights</div>
          </div>
          <div className="bg-research-card/50 backdrop-blur-sm border border-research-gray-800 rounded-xl p-6 card-glow">
            <div className="text-4xl font-bold text-research-pink mb-2">20</div>
            <div className="text-sm text-research-gray-400 uppercase tracking-wider">Solutions</div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-research-gray-300 leading-relaxed mb-8">
            A comprehensive user research synthesis based on in-depth interviews with
            Ethiopian freelancers, revealing the critical barriers to freelance growth
            and the solutions that will unlock the ecosystem.
          </p>

          <div className="flex items-center justify-center gap-3 text-sm text-research-gray-400">
            <span className="font-mono">Scroll to explore</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
