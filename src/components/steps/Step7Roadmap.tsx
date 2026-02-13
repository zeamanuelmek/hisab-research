import { useState } from 'react';
import { roadmapPhases } from '../../data/roadmap';

const priorityStyles = {
  P0: { bg: '#EF444418', border: '#EF4444', text: '#FCA5A5' },
  P1: { bg: '#F9731618', border: '#F97316', text: '#FDBA74' },
  P2: { bg: '#3B82F618', border: '#3B82F6', text: '#93C5FD' },
  Future: { bg: '#6B728018', border: '#6B7280', text: '#9CA3AF' },
};

export function Step7Roadmap() {
  const [activePhase, setActivePhase] = useState(0);

  const phase = roadmapPhases[activePhase];

  return (
    <section id="roadmap" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-purple/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-purple">Step 7</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Roadmap</h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            Three-phase development roadmap driven by user research priorities
          </p>
        </div>

        {/* Phase Selector */}
        <div className="flex gap-2 mb-2">
          {roadmapPhases.map((p, i) => (
            <button
              key={i}
              onClick={() => setActivePhase(i)}
              className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                activePhase === i
                  ? 'border-opacity-100'
                  : 'border-opacity-30 hover:border-opacity-50'
              }`}
              style={{
                borderColor: p.color,
                background: activePhase === i ? `${p.color}12` : '#141419',
              }}
            >
              <div
                className="text-lg font-bold font-mono"
                style={{ color: p.color }}
              >
                {p.version}
              </div>
              <div
                className={`text-sm font-semibold mt-1 ${
                  activePhase === i ? 'text-research-gray-100' : 'text-research-gray-500'
                }`}
              >
                {p.name}
              </div>
              <div className="text-xs font-mono text-research-gray-600 mt-1">
                {p.timeline}
              </div>
            </button>
          ))}
        </div>

        {/* Timeline Connector */}
        <div className="flex items-center px-10 py-2">
          {roadmapPhases.map((p, i) => (
            <div key={i} className="flex items-center flex-1">
              <div
                className="w-4 h-4 rounded-full border-2 transition-all"
                style={{
                  background: i <= activePhase ? p.color : '#2A2A35',
                  borderColor: i <= activePhase ? p.color : '#2A2A35',
                }}
              />
              {i < roadmapPhases.length - 1 && (
                <div
                  className="flex-1 h-0.5 transition-all"
                  style={{
                    background:
                      i < activePhase
                        ? `linear-gradient(90deg, ${p.color}, ${roadmapPhases[i + 1].color})`
                        : '#1E1E28',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Active Phase Details */}
        <div
          className="bg-research-card rounded-2xl p-6 border animate-fade-in"
          style={{ borderColor: `${phase.color}33` }}
        >
          <p className="text-sm text-research-gray-400 mb-6 leading-relaxed">
            {phase.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {phase.items.map((item, idx) => {
              const pStyle = priorityStyles[item.priority];
              return (
                <div
                  key={idx}
                  className="flex gap-3 p-4 bg-research-bg rounded-xl border border-research-gray-800 hover:border-research-gray-700 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-bold text-sm text-research-gray-100">
                        {item.title}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-bold font-mono"
                        style={{
                          background: pStyle.bg,
                          color: pStyle.text,
                          border: `1px solid ${pStyle.border}55`,
                        }}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-xs text-research-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Metric */}
        <div className="mt-6 p-5 rounded-xl text-center bg-gradient-to-r from-green-500/10 to-research-purple/10 border border-green-500/30">
          <div className="text-xs font-mono font-bold text-green-400 tracking-widest mb-2">
            SUCCESS METRIC
          </div>
          <div className="text-xl font-bold text-research-gray-100">
            50 completed escrow projects within 6 months of launch
          </div>
          <div className="text-sm text-research-gray-500 mt-2">
            Proves product-market fit and the core escrow value loop
          </div>
        </div>
      </div>
    </section>
  );
}
