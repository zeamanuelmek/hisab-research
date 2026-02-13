import { useState } from 'react';
import { competitors, positioningData } from '../../data/competitors';

const threatStyles = {
  Primary: { color: '#EF4444', label: '🔴 PRIMARY THREAT' },
  Partner: { color: '#3B82F6', label: '🔵 INTEGRATION PARTNER' },
  Low: { color: '#22C55E', label: '🟢 LOW THREAT' },
};

export function Step8Competitors() {
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(
    null
  );

  return (
    <section id="competitors" className="py-20 px-6 bg-research-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-pink/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-pink">Step 8</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Competitive Landscape
          </h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            Who's Hisab really competing with? Spoiler: It's not Upwork. It's Telegram.
          </p>
        </div>

        {/* Strategic Insight Banner */}
        <div className="mb-6 p-5 rounded-xl bg-gradient-to-r from-research-purple/10 to-research-pink/10 border border-research-purple/30">
          <div className="text-xs font-mono font-bold text-research-purple tracking-wider mb-2">
            STRATEGIC INSIGHT
          </div>
          <p className="text-sm leading-relaxed text-research-gray-200">
            International platforms are{' '}
            <strong className="text-red-400">irrelevant</strong> for Ethiopian
            domestic freelancing. The real competitor is the{' '}
            <strong className="text-yellow-400">
              informal Telegram + bank transfer workflow
            </strong>
            . Hisab wins by making the professional path{' '}
            <strong className="text-green-400">easier</strong> than the informal
            path.
          </p>
        </div>

        {/* Competitor Cards */}
        <div className="space-y-3 mb-6">
          {competitors.map((comp) => {
            const threat = threatStyles[comp.threat];
            const isExpanded = expandedCompetitor === comp.id;

            return (
              <div
                key={comp.id}
                className={`bg-research-card rounded-xl border transition-all ${
                  isExpanded
                    ? 'border-opacity-40'
                    : 'border-research-gray-800 hover:border-research-gray-700'
                }`}
                style={{
                  borderColor: isExpanded ? `${threat.color}66` : undefined,
                }}
              >
                <button
                  onClick={() =>
                    setExpandedCompetitor(isExpanded ? null : comp.id)
                  }
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-research-bg/30 transition-colors rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{comp.logo}</span>
                    <div>
                      <div className="font-bold text-sm text-research-gray-100">
                        {comp.name}
                      </div>
                      <div className="text-xs text-research-gray-500">
                        {comp.type} · {comp.market}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold font-mono"
                      style={{
                        background: `${threat.color}18`,
                        color: threat.color,
                        border: `1px solid ${threat.color}44`,
                      }}
                    >
                      {threat.label}
                    </span>
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
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-research-gray-800 pt-4 animate-fade-in">
                    <p className="text-xs italic text-research-gray-500 mb-4">
                      {comp.tagline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {/* Strengths */}
                      <div>
                        <div className="text-xs font-mono font-bold text-green-400 tracking-wider mb-2">
                          STRENGTHS
                        </div>
                        <ul className="space-y-1">
                          {comp.strengths.map((str, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-research-gray-400 pl-3 border-l-2 border-green-500/20 leading-relaxed"
                            >
                              {str}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Weaknesses */}
                      <div>
                        <div className="text-xs font-mono font-bold text-red-400 tracking-wider mb-2">
                          WEAKNESSES
                        </div>
                        <ul className="space-y-1">
                          {comp.weaknesses.map((weak, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-research-gray-400 pl-3 border-l-2 border-red-500/20 leading-relaxed"
                            >
                              {weak}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Market Gap */}
                    <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                      <div className="text-xs font-mono font-bold text-yellow-400 tracking-wider mb-1">
                        ETHIOPIAN MARKET GAP
                      </div>
                      <p className="text-xs text-yellow-300/80 leading-relaxed">
                        {comp.gap}
                      </p>
                    </div>

                    <div className="text-xs text-research-gray-600 mt-3">
                      Pricing: {comp.pricing}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Positioning Scorecard */}
        <div className="bg-research-card rounded-2xl p-6 border border-research-gray-800">
          <div className="text-sm font-mono font-bold text-research-purple tracking-wider mb-1">
            POSITIONING SCORECARD
          </div>
          <p className="text-xs text-research-gray-600 mb-4">
            Score out of 100 — higher is better for the Ethiopian freelance market
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-research-gray-800">
                  <th className="text-left py-3 px-2 text-xs font-semibold text-research-gray-500">
                    Dimension
                  </th>
                  <th className="text-center py-3 px-2 text-xs font-bold text-research-purple">
                    Hisab
                  </th>
                  <th className="text-center py-3 px-2 text-xs font-semibold text-research-gray-600">
                    Upwork
                  </th>
                  <th className="text-center py-3 px-2 text-xs font-semibold text-research-gray-600">
                    Fiverr
                  </th>
                  <th className="text-center py-3 px-2 text-xs font-semibold text-research-gray-600">
                    Telegram
                  </th>
                </tr>
              </thead>
              <tbody>
                {positioningData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-research-gray-900/50"
                  >
                    <td className="py-3 px-2 text-xs text-research-gray-400">
                      {row.dimension}
                    </td>
                    {(['hisab', 'upwork', 'fiverr', 'telegram'] as const).map(
                      (key) => {
                        const val = row[key];
                        const isHisab = key === 'hisab';
                        const barColor = isHisab
                          ? val > 70
                            ? '#8B5CF6'
                            : '#8B5CF644'
                          : val > 70
                          ? '#ffffff22'
                          : '#ffffff11';

                        return (
                          <td key={key} className="text-center py-3 px-2">
                            <div className="inline-flex items-center gap-2">
                              <div
                                className="h-1.5 rounded-full transition-all"
                                style={{
                                  width: Math.max(val * 0.45, 3),
                                  background: barColor,
                                }}
                              />
                              <span
                                className={`text-xs font-mono ${
                                  isHisab
                                    ? val > 70
                                      ? 'font-bold text-research-purple'
                                      : 'text-research-purple/60'
                                    : 'text-research-gray-600'
                                }`}
                              >
                                {val}
                              </span>
                            </div>
                          </td>
                        );
                      }
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-research-purple/5 border border-research-purple/20">
            <p className="text-xs text-research-purple/90 leading-relaxed">
              <strong>Hisab dominates</strong> the three dimensions that matter
              most: Payment Protection, Local Payment Support, and Ethiopian Market
              Fit. The gap in Client Pool and Brand Recognition is expected for a
              new entrant and is addressed through the Build in Public GTM strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
