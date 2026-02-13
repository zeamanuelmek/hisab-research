import { useState } from 'react';
import {
  reportSections,
  executiveSummaryStats,
  methodologyPhases,
  keyFindingsData,
  journeyEmotionData,
  gtmPhases,
} from '../../data/report';

export function Step9Report() {
  const [activeTab, setActiveTab] = useState('executive');

  return (
    <section id="report" className="py-20 px-6 bg-research-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-pink/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-pink">Step 9</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Foundational Report
          </h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            Complete research synthesis packaged for stakeholder review
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {reportSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === section.id
                  ? 'bg-research-purple text-white'
                  : 'bg-research-card text-research-gray-400 hover:bg-research-gray-800'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-research-card rounded-2xl p-6 border border-research-gray-800 animate-fade-in">
          {activeTab === 'executive' && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-research-gray-100">
                Executive Summary
              </h3>
              <p className="text-sm text-research-gray-400 leading-relaxed mb-6">
                This research validates a critical market gap: Ethiopian
                freelancers lose 15,000–50,000 ETB annually to payment defaults,
                yet no platform exists to protect them. Hisab's MVP focuses on
                escrow-based payment protection integrated with TeleBirr/Chapa —
                the single highest-impact feature validated across all 5
                interviews.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {executiveSummaryStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-research-bg rounded-xl border border-research-gray-800 text-center"
                  >
                    <div className="text-3xl font-bold text-research-purple mb-1">
                      {stat.num}
                    </div>
                    <div className="text-xs font-semibold text-research-gray-300 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-research-gray-600">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="text-xs font-mono font-bold text-green-400 tracking-wider mb-2">
                  KEY RECOMMENDATION
                </div>
                <p className="text-sm text-green-300/90 leading-relaxed">
                  Build V1.1 MVP with <strong>escrow-first architecture</strong>.
                  Agreements, milestones, and scope management are supporting
                  features — but escrow is the core value driver that converts
                  freelancers from Telegram to Hisab.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'methodology' && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-research-gray-100">
                Research Methodology
              </h3>
              <p className="text-sm text-research-gray-400 leading-relaxed mb-6">
                Following Digital Product School (DPS) user research framework:
                Recruit → Interview → Synthesize → Validate → Recommend
              </p>

              <div className="space-y-4">
                {methodologyPhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-research-bg rounded-xl border border-research-gray-800"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold font-mono"
                        style={{
                          background: `${['#EF4444', '#F97316', '#8B5CF6', '#22C55E'][idx]}22`,
                          color: ['#EF4444', '#F97316', '#8B5CF6', '#22C55E'][idx],
                          border: `2px solid ${['#EF4444', '#F97316', '#8B5CF6', '#22C55E'][idx]}44`,
                        }}
                      >
                        {phase.num}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm text-research-gray-100 mb-2">
                          {phase.phase}
                        </div>
                        <p className="text-xs text-research-gray-400 leading-relaxed mb-2">
                          {phase.desc}
                        </p>
                        <p className="text-xs text-research-gray-600 italic">
                          {phase.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'findings' && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-research-gray-100">
                Key Findings
              </h3>
              <p className="text-sm text-research-gray-400 leading-relaxed mb-6">
                6 critical insights that shape Hisab's product strategy
              </p>

              <div className="space-y-3">
                {keyFindingsData.map((finding, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border-l-4"
                    style={{
                      background: `${finding.color}08`,
                      borderColor: finding.color,
                    }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono"
                        style={{
                          background: `${finding.color}22`,
                          color: finding.color,
                        }}
                      >
                        {finding.num}
                      </span>
                      <div className="flex-1">
                        <div className="font-bold text-sm text-research-gray-100 mb-1">
                          {finding.title}
                        </div>
                        <p className="text-xs text-research-gray-400 leading-relaxed">
                          {finding.finding}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-research-gray-600 italic ml-11">
                      Source: {finding.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'journey' && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-research-gray-100">
                Customer Journey: Emotional Arc
              </h3>
              <p className="text-sm text-research-gray-400 leading-relaxed mb-6">
                Freelancer satisfaction drops dramatically as projects progress —
                payment collection is the lowest point at 20/100.
              </p>

              <div className="space-y-3 mb-6">
                {journeyEmotionData.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-research-bg rounded-xl border border-research-gray-800"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-sm text-research-gray-100">
                        {stage.stage}
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{
                            width: Math.max(stage.emotion * 1.5, 10),
                            background: stage.color,
                          }}
                        />
                        <span
                          className="text-xs font-mono font-bold"
                          style={{ color: stage.color }}
                        >
                          {stage.emotion}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs font-mono font-bold text-red-400 mb-1">
                          PAIN POINT
                        </div>
                        <p className="text-xs text-research-gray-400">
                          {stage.pain}
                        </p>
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-green-400 mb-1">
                          HISAB SOLUTION
                        </div>
                        <p className="text-xs text-research-gray-400">
                          {stage.hisab}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-research-purple/10 border border-research-purple/30">
                <p className="text-xs text-research-purple/90 leading-relaxed">
                  <strong>Critical Insight:</strong> Emotional satisfaction
                  degrades by 67% from discovery to payment collection. Hisab's
                  escrow reverses this trend — payment becomes the{' '}
                  <strong>most confident</strong> moment instead of the most
                  stressful.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'gtm' && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-research-gray-100">
                Go-to-Market Strategy
              </h3>
              <p className="text-sm text-research-gray-400 leading-relaxed mb-6">
                3-phase "Build in Public" approach leveraging Zeamanuel's network,
                KazaWorks community, and LinkedIn presence
              </p>

              <div className="space-y-4">
                {gtmPhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border-2"
                    style={{
                      background: `${['#8B5CF6', '#EC4899', '#22C55E'][idx]}08`,
                      borderColor: `${['#8B5CF6', '#EC4899', '#22C55E'][idx]}44`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-lg text-research-gray-100">
                        {phase.phase}
                      </div>
                      <div className="text-xs font-mono text-research-gray-500">
                        {phase.time}
                      </div>
                    </div>
                    <div
                      className="text-sm font-semibold mb-3"
                      style={{ color: ['#8B5CF6', '#EC4899', '#22C55E'][idx] }}
                    >
                      Target: {phase.target}
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-research-gray-400 pl-3 border-l-2 leading-relaxed"
                          style={{
                            borderColor: `${['#8B5CF6', '#EC4899', '#22C55E'][idx]}44`,
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <div className="text-xs font-mono font-bold text-yellow-400 tracking-wider mb-2">
                  SUCCESS CRITERIA
                </div>
                <p className="text-sm text-yellow-300/90 leading-relaxed">
                  <strong>50 completed escrow projects within 6 months</strong> —
                  proves the core value loop (freelancer onboards → client
                  deposits → work delivered → escrow releases) functions at scale.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
