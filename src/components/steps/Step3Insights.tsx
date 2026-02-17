import { keyInsights, priorityRankings, desiredFeatures } from '../../data/synthesis';

export function Step3Insights() {
  const criticalFinding = keyInsights.find((i) => i.impact === 'critical');
  const otherInsights = keyInsights.filter((i) => i.impact !== 'critical');

  return (
    <section id="insights" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-purple/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-purple">Step 3</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Insights</h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            6 core insights synthesized from research, including 1 critical finding
            that defines the entire product strategy.
          </p>
        </div>

        {/* Critical Finding */}
        {criticalFinding && (
          <div className="mb-12 p-4 sm:p-8 bg-gradient-to-r from-red-500/20 to-research-pink/20 border-2 border-red-500/50 rounded-2xl card-glow-pink">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-red-300">
                  CRITICAL FINDING: {criticalFinding.title}
                </h3>
                <p className="text-base sm:text-lg text-research-gray-200 leading-relaxed mb-4">
                  {criticalFinding.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-research-gray-400">Sources:</span>
                  <div className="flex flex-wrap gap-1">
                    {criticalFinding.sources.map((source) => (
                      <span
                        key={source}
                        className="px-2 py-0.5 bg-research-card/50 rounded text-xs font-mono text-research-gray-300"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherInsights.map((insight) => (
            <div
              key={insight.id}
              className="bg-research-card border border-research-gray-800 rounded-xl p-6 card-glow hover:scale-105 transition-transform"
            >
              {/* Impact badge */}
              <div className="mb-4">
                <span
                  className={`
                    px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                    ${
                      insight.impact === 'high'
                        ? 'bg-research-purple/20 text-research-purple'
                        : 'bg-research-gray-700 text-research-gray-300'
                    }
                  `}
                >
                  {insight.impact} impact
                </span>
                {insight.category && (
                  <span className="ml-2 text-xs text-research-gray-500 font-mono">
                    {insight.category}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3 text-research-gray-100">
                {insight.title}
              </h3>
              <p className="text-sm text-research-gray-400 leading-relaxed mb-4">
                {insight.description}
              </p>

              {/* Sources */}
              <div className="flex flex-wrap gap-1">
                {insight.sources.map((source) => (
                  <span
                    key={source}
                    className="px-2 py-0.5 bg-research-bg/50 rounded text-xs font-mono text-research-gray-500"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Priority Rankings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature Priority Chart */}
          <div className="bg-research-card border border-research-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Feature Priority Rankings</h3>
            <div className="space-y-4">
              {priorityRankings.map((ranking) => (
                <div key={ranking.feature}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-research-gray-300">
                      {ranking.feature}
                    </span>
                    <span className="text-sm text-research-gray-500">
                      {ranking.mentions}/5 participants
                    </span>
                  </div>
                  <div className="h-2 bg-research-bg rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-research-purple to-research-pink transition-all"
                      style={{ width: `${ranking.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desired Features List */}
          <div className="bg-research-card border border-research-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Desired Features (by frequency)</h3>
            <div className="space-y-3">
              {desiredFeatures
                .sort((a, b) => b.frequency - a.frequency)
                .map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between p-3 bg-research-bg/50 rounded-lg"
                  >
                    <span className="text-sm font-medium text-research-gray-300">
                      {feature.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {feature.participants.map((p) => (
                          <span
                            key={p}
                            className="w-6 h-6 rounded-full bg-research-purple/30 flex items-center justify-center text-xs font-mono text-research-purple"
                          >
                            {p.replace('P', '')}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-bold text-research-pink">
                        {feature.frequency}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
