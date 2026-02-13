import { useState } from 'react';
import { themes, solutionIdeas, categorizeIdeas } from '../../data/themes';
import type { SolutionIdea } from '../../data/types';

export function Step4Themes() {
  const categorized = categorizeIdeas(solutionIdeas);
  const [selectedIdea, setSelectedIdea] = useState<SolutionIdea | null>(null);

  const getIdeaColor = (idea: SolutionIdea) => {
    if (idea.category === 'quick-win') return '#10B981';
    if (idea.category === 'big-bet') return '#8B5CF6';
    if (idea.category === 'time-sink') return '#6B7280';
    return '#F59E0B';
  };

  return (
    <section id="themes" className="py-20 px-6 bg-research-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-pink/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-pink">Step 4</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Themes & Solution Ideas
          </h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            5 strategic themes with 20 solution ideas mapped on an impact/effort matrix
            to prioritize development. Click dots to explore details.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="bg-research-card border-2 rounded-xl p-6 card-glow hover:scale-105 transition-transform"
              style={{ borderColor: `${theme.color}40` }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: `${theme.color}20`, color: theme.color }}
              >
                {theme.priority}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: theme.color }}>
                {theme.name}
              </h3>
              <p className="text-sm text-research-gray-400 leading-relaxed mb-4">
                {theme.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {theme.insights.map((insight, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-research-bg/50 rounded text-xs text-research-gray-500"
                  >
                    {insight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Impact/Effort Matrix */}
        <div className="bg-research-card border border-research-gray-800 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Impact vs Effort Matrix (Interactive)
          </h3>
          <p className="text-sm text-center text-research-gray-500 mb-8">
            Click any dot to see solution details
          </p>

          {/* SVG Matrix */}
          <div className="relative w-full aspect-square max-w-3xl mx-auto mb-8">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              {/* Grid Background */}
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1F2937" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="500" height="500" fill="url(#grid)" />

              {/* Quadrant Labels */}
              <text x="125" y="125" className="fill-research-gray-500 text-xs" textAnchor="middle">
                TIME SINKS
              </text>
              <text x="375" y="125" className="fill-green-400 text-sm font-bold" textAnchor="middle">
                QUICK WINS
              </text>
              <text x="125" y="375" className="fill-research-gray-500 text-xs" textAnchor="middle">
                NICE TO HAVE
              </text>
              <text x="375" y="375" className="fill-research-purple text-sm font-bold" textAnchor="middle">
                BIG BETS
              </text>

              {/* Axes */}
              <line x1="0" y1="250" x2="500" y2="250" stroke="#4B5563" strokeWidth="2" />
              <line x1="250" y1="0" x2="250" y2="500" stroke="#4B5563" strokeWidth="2" />

              {/* Axis Labels */}
              <text x="470" y="270" className="fill-research-gray-400 text-xs" textAnchor="end">
                Low Effort →
              </text>
              <text x="30" y="270" className="fill-research-gray-400 text-xs">
                ← High Effort
              </text>
              <text x="260" y="30" className="fill-research-gray-400 text-xs">
                High Impact ↑
              </text>
              <text x="260" y="490" className="fill-research-gray-400 text-xs">
                ↓ Low Impact
              </text>

              {/* Plot Ideas */}
              {solutionIdeas.map((idea) => {
                // Convert impact/effort (1-5) to coordinates (500-0 for y, 0-500 for x)
                const x = 500 - (idea.effort * 100) + 50;
                const y = 500 - (idea.impact * 100) + 50;
                const color = getIdeaColor(idea);
                const isSelected = selectedIdea?.id === idea.id;

                return (
                  <g key={idea.id}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? "12" : "8"}
                      fill={color}
                      opacity={isSelected ? "1" : "0.8"}
                      className="hover:opacity-100 cursor-pointer transition-all"
                      onClick={() => setSelectedIdea(idea)}
                      style={{
                        filter: isSelected ? 'drop-shadow(0 0 8px currentColor)' : 'none',
                      }}
                    />
                    {isSelected && (
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        opacity="0.5"
                        className="animate-pulse"
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Selected Idea Detail */}
          {selectedIdea && (
            <div className="bg-research-bg border-2 rounded-xl p-6 animate-fade-in relative"
              style={{ borderColor: getIdeaColor(selectedIdea) }}
            >
              <button
                onClick={() => setSelectedIdea(null)}
                className="absolute top-4 right-4 text-research-gray-500 hover:text-research-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    backgroundColor: `${getIdeaColor(selectedIdea)}20`,
                    color: getIdeaColor(selectedIdea),
                  }}
                >
                  {selectedIdea.category === 'quick-win' ? '⚡' :
                   selectedIdea.category === 'big-bet' ? '🚀' :
                   selectedIdea.category === 'time-sink' ? '⏳' : '💡'}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold text-research-gray-100">
                      {selectedIdea.title}
                    </h4>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                      style={{
                        backgroundColor: `${getIdeaColor(selectedIdea)}20`,
                        color: getIdeaColor(selectedIdea),
                      }}
                    >
                      {selectedIdea.category?.replace('-', ' ')}
                    </span>
                  </div>

                  <p className="text-sm text-research-gray-300 leading-relaxed mb-4">
                    {selectedIdea.description}
                  </p>

                  <div className="flex gap-6">
                    <div>
                      <span className="text-xs text-research-gray-500">Impact:</span>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded"
                            style={{
                              backgroundColor: i <= selectedIdea.impact ? getIdeaColor(selectedIdea) : '#2A2A35',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-research-gray-500">Effort:</span>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded"
                            style={{
                              backgroundColor: i <= selectedIdea.effort ? '#F59E0B' : '#2A2A35',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-research-gray-800">
                    <span className="text-xs text-research-gray-500">
                      Related theme: <span className="text-research-purple">{themes.find(t => t.id === selectedIdea.theme)?.name}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!selectedIdea && (
            <p className="text-center text-sm text-research-gray-600">
              👆 Click any dot on the matrix above to view solution details
            </p>
          )}

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 text-sm mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span className="text-research-gray-400">Quick Wins ({categorized.quickWins.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-research-purple" />
              <span className="text-research-gray-400">Big Bets ({categorized.bigBets.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <span className="text-research-gray-400">Nice to Have ({categorized.niceToHave.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-research-gray-500" />
              <span className="text-research-gray-400">Time Sinks ({categorized.timeSinks.length})</span>
            </div>
          </div>
        </div>

        {/* Solution Ideas by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Wins */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-green-400">
              ⚡ Quick Wins ({categorized.quickWins.length})
            </h3>
            <div className="space-y-3">
              {categorized.quickWins.map((idea) => (
                <button
                  key={idea.id}
                  onClick={() => setSelectedIdea(idea)}
                  className="w-full text-left bg-research-card/50 rounded-lg p-4 hover:bg-research-card transition-colors"
                >
                  <h4 className="font-bold text-sm text-research-gray-200 mb-1">
                    {idea.title}
                  </h4>
                  <p className="text-xs text-research-gray-400 mb-2">{idea.description}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-green-400">Impact: {idea.impact}/5</span>
                    <span className="text-research-gray-500">•</span>
                    <span className="text-research-gray-400">Effort: {idea.effort}/5</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Big Bets */}
          <div className="bg-research-purple/10 border border-research-purple/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-research-purple">
              🚀 Big Bets ({categorized.bigBets.length})
            </h3>
            <div className="space-y-3">
              {categorized.bigBets.map((idea) => (
                <button
                  key={idea.id}
                  onClick={() => setSelectedIdea(idea)}
                  className="w-full text-left bg-research-card/50 rounded-lg p-4 hover:bg-research-card transition-colors"
                >
                  <h4 className="font-bold text-sm text-research-gray-200 mb-1">
                    {idea.title}
                  </h4>
                  <p className="text-xs text-research-gray-400 mb-2">{idea.description}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-research-purple">Impact: {idea.impact}/5</span>
                    <span className="text-research-gray-500">•</span>
                    <span className="text-research-gray-400">Effort: {idea.effort}/5</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-research-purple mb-2">
              {solutionIdeas.length}
            </div>
            <div className="text-sm text-research-gray-400">Total Ideas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {categorized.quickWins.length}
            </div>
            <div className="text-sm text-research-gray-400">Quick Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-research-purple mb-2">
              {categorized.bigBets.length}
            </div>
            <div className="text-sm text-research-gray-400">Big Bets</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-research-pink mb-2">
              {themes.length}
            </div>
            <div className="text-sm text-research-gray-400">Themes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
