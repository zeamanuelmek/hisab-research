import { useState } from 'react';
import { customerJourneys, emotionScores } from '../../data/journeys';
import { personas } from '../../data/synthesis';

export function Step6Journey() {
  const [activePersona, setActivePersona] = useState<'solo-selam' | 'agency-abebe'>('solo-selam');
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const currentJourney = customerJourneys.find((j) => j.personaId === activePersona);
  const currentPersona = personas.find((p) => p.id === activePersona);
  const currentScores = emotionScores[activePersona];

  if (!currentJourney || !currentPersona) return null;

  const getEmotionColor = (score: number) => {
    if (score >= 60) return '#22C55E';
    if (score >= 45) return '#F59E0B';
    return '#EF4444';
  };

  const getEmotionLabel = (score: number) => {
    if (score >= 70) return 'Positive';
    if (score >= 55) return 'Mixed';
    if (score >= 40) return 'Concerned';
    return 'Negative';
  };

  return (
    <section id="journey" className="py-20 px-6 bg-research-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-pink/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-pink">Step 6</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Journey Maps
          </h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            Detailed journey maps for both personas across 5 stages, showing emotional
            progression and critical pain points at each phase.
          </p>
        </div>

        {/* Persona Selector */}
        <div className="flex justify-center gap-4 mb-8">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona.id as any)}
              className={`px-6 py-3 rounded-xl border-2 transition-all ${
                activePersona === persona.id
                  ? 'border-research-purple bg-research-purple/10'
                  : 'border-research-gray-800 bg-research-card hover:border-research-gray-700'
              }`}
              style={{
                borderColor:
                  activePersona === persona.id ? persona.color : undefined,
              }}
            >
              <div className="text-sm font-bold" style={{ color: persona.color }}>
                {persona.name}
              </div>
              <div className="text-xs text-research-gray-500 mt-1">
                {persona.tagline}
              </div>
            </button>
          ))}
        </div>

        {/* Emotion Journey Visualization */}
        <div className="bg-research-card border border-research-gray-800 rounded-2xl p-6 mb-8">
          <h3 className="text-sm font-bold font-mono text-research-purple mb-6 tracking-wider">
            EMOTIONAL JOURNEY
          </h3>
          <div className="flex items-end gap-2 h-32 mb-6">
            {currentJourney.stages.map((stage, i) => {
              const score = currentScores[i];
              const color = getEmotionColor(score);

              return (
                <button
                  key={i}
                  onClick={() => setActiveStage(activeStage === i ? null : i)}
                  className="flex-1 flex flex-col justify-end items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <div
                    className="w-full rounded-t-lg transition-all"
                    style={{
                      height: `${score}%`,
                      background: `linear-gradient(to top, ${color}40, ${color}15)`,
                      borderTop: `3px solid ${color}`,
                    }}
                  />
                  <div className="text-xs text-center">
                    <div className="font-semibold text-research-gray-300">
                      {stage.name}
                    </div>
                    <div
                      className="text-xs font-bold mt-1"
                      style={{ color }}
                    >
                      {getEmotionLabel(score)}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-center text-research-gray-600">
            Click a stage to explore details • Notice how emotion drops sharply at "Collect Payment"
          </p>
        </div>

        {/* Stage Details */}
        <div className="space-y-4">
          {currentJourney.stages.map((stage, i) => {
            const isExpanded = activeStage === null || activeStage === i;
            const score = currentScores[i];
            const color = getEmotionColor(score);
            const isCritical = i === 4; // Collect Payment stage

            if (!isExpanded) return null;

            return (
              <div
                key={i}
                className={`bg-research-card border rounded-2xl overflow-hidden ${
                  isCritical ? 'border-red-500/50' : 'border-research-gray-800'
                }`}
              >
                {/* Stage Header */}
                <button
                  onClick={() => setActiveStage(activeStage === i ? null : i)}
                  className={`w-full px-6 py-4 flex items-center gap-4 text-left transition-colors ${
                    isCritical ? 'bg-red-500/5' : 'hover:bg-research-bg/30'
                  }`}
                >
                  <div className="text-2xl">{i === 0 ? '🔍' : i === 1 ? '🤝' : i === 2 ? '⚙️' : i === 3 ? '📦' : '💰'}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">
                      Stage {i + 1}: {stage.name}
                      {isCritical && (
                        <span className="text-xs text-red-500 ml-2">⚠️ CRITICAL</span>
                      )}
                    </h3>
                    <p className="text-sm text-research-gray-400 italic">
                      {stage.thoughts.join(' / ')}
                    </p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2"
                    style={{
                      backgroundColor: `${color}20`,
                      borderColor: color,
                      color: color,
                    }}
                  >
                    {score}
                  </div>
                </button>

                {/* Stage Details */}
                {(activeStage === i || activeStage === null) && (
                  <div className="px-6 pb-6 border-t border-research-gray-800 pt-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div>
                        <h4 className="text-sm font-bold font-mono text-blue-400 mb-3">
                          ACTIONS
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {stage.actions.map((action, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-research-gray-400 flex items-start gap-2"
                            >
                              <span className="text-research-gray-600 mt-1">•</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-sm font-bold font-mono text-yellow-400 mb-3">
                          TOUCHPOINTS
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {stage.emotions.map((emotion, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full text-xs bg-research-bg text-research-gray-400"
                            >
                              {emotion}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <h4 className="text-sm font-bold font-mono text-red-400 mb-3">
                          PAIN POINTS
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {stage.painPoints.map((pain, idx) => (
                            <li
                              key={idx}
                              className={`text-sm flex items-start gap-2 ${
                                pain.startsWith('🔴')
                                  ? 'text-red-400 font-semibold'
                                  : 'text-research-gray-400'
                              }`}
                            >
                              <span className="text-red-500 mt-1">•</span>
                              <span>{pain}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-sm font-bold font-mono text-green-400 mb-3">
                          OPPORTUNITIES
                        </h4>
                        <ul className="space-y-2">
                          {stage.opportunities.map((opp, idx) => (
                            <li
                              key={idx}
                              className={`text-sm flex items-start gap-2 ${
                                opp.startsWith('⭐️')
                                  ? 'text-green-400 font-semibold'
                                  : 'text-research-gray-400'
                              }`}
                            >
                              <span className="text-green-500 mt-1">•</span>
                              <span>{opp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
