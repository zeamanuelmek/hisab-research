import { useState } from 'react';
import { recommendations } from '../../data/recommendations';

const priorityConfig = {
  P0: { label: 'Must Have', color: '#DC2626', bg: '#FEE2E2', timeline: 'V1.1 Core' },
  P1: { label: 'Should Have', color: '#F59E0B', bg: '#FEF3C7', timeline: 'V1.1' },
  P2: { label: 'Nice to Have', color: '#3B82F6', bg: '#DBEAFE', timeline: 'V1.2' },
};

export function Step5Recommendations() {
  const [expandedRec, setExpandedRec] = useState<string | null>(null);

  return (
    <section id="recommendations" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-purple/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-purple">Step 5</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prioritized Recommendations
          </h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            8 strategic recommendations ranked by priority (P0-P2) with evidence,
            rationale, and estimated effort for implementation.
          </p>
        </div>

        {/* Priority Legend */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          {Object.entries(priorityConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded"
                style={{ background: config.color }}
              />
              <span className="text-sm text-research-gray-400">
                {key} — {config.label} ({config.timeline})
              </span>
            </div>
          ))}
        </div>

        {/* Recommendation Cards */}
        <div className="space-y-4">
          {recommendations.map((rec) => {
            const config = priorityConfig[rec.priority];
            const isExpanded = expandedRec === rec.id;

            return (
              <div
                key={rec.id}
                className="bg-research-card border border-research-gray-800 rounded-xl overflow-hidden transition-all hover:border-research-gray-700"
                style={{
                  borderLeftWidth: '4px',
                  borderLeftColor: config.color,
                }}
              >
                {/* Card Header */}
                <button
                  onClick={() => setExpandedRec(isExpanded ? null : rec.id)}
                  className="w-full px-6 py-4 flex items-start gap-4 text-left hover:bg-research-bg/30 transition-colors"
                >
                  <div
                    className="px-3 py-1 rounded-lg text-xs font-bold font-mono"
                    style={{
                      background: config.bg,
                      color: config.color,
                    }}
                  >
                    {rec.priority}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-research-gray-100 mb-1">
                      {rec.title}
                    </h3>
                    <p className="text-sm text-research-gray-400 mb-2">
                      {rec.description}
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-research-bg rounded text-research-gray-500">
                        {rec.theme}
                      </span>
                      <span className="text-xs px-2 py-1 bg-research-bg rounded text-research-gray-500">
                        {rec.estimatedEffort}
                      </span>
                    </div>
                  </div>

                  <svg
                    className={`w-5 h-5 text-research-gray-500 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-research-gray-800 pt-4 animate-fade-in">
                    {/* Rationale */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-research-purple mb-2">
                        Why This Matters
                      </h4>
                      <p className="text-sm text-research-gray-300 leading-relaxed">
                        {rec.rationale}
                      </p>
                    </div>

                    {/* Evidence */}
                    {rec.evidence && (
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-research-purple mb-2">
                          Evidence from Research
                        </h4>
                        <ul className="space-y-1">
                          {rec.evidence.map((evidence, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-research-gray-400 flex items-start gap-2"
                            >
                              <span className="text-research-pink mt-1">•</span>
                              <span>{evidence}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Features */}
                    {rec.features && (
                      <div>
                        <h4 className="text-sm font-bold text-research-purple mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {rec.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-research-gray-300 flex items-start gap-2"
                            >
                              <svg
                                className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">
              {recommendations.filter((r) => r.priority === 'P0').length}
            </div>
            <div className="text-sm text-research-gray-400">P0 — Must Have</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              {recommendations.filter((r) => r.priority === 'P1').length}
            </div>
            <div className="text-sm text-research-gray-400">P1 — Should Have</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {recommendations.filter((r) => r.priority === 'P2').length}
            </div>
            <div className="text-sm text-research-gray-400">P2 — Nice to Have</div>
          </div>
        </div>
      </div>
    </section>
  );
}
