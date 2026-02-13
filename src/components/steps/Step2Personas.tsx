import { personas } from '../../data/synthesis';

export function Step2Personas() {
  return (
    <section id="personas" className="py-20 px-6 bg-research-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-pink/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-pink">Step 2</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">User Personas</h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            Two primary personas representing the spectrum of Ethiopian freelancers,
            from solo practitioners to growing agencies.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="bg-research-card border border-research-gray-800 rounded-2xl p-8 card-glow hover:scale-105 transition-transform"
              style={{ borderColor: `${persona.color}40` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: persona.color }}>
                    {persona.name}
                  </h3>
                  <p className="text-lg text-research-gray-400">{persona.tagline}</p>
                </div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: `${persona.color}20`, color: persona.color }}
                >
                  {persona.name.charAt(0)}
                </div>
              </div>

              {/* Demographics */}
              <div className="mb-6 p-4 bg-research-bg/50 rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-research-gray-500">Age:</span>{' '}
                    <span className="text-research-gray-200">{persona.demographics.age}</span>
                  </div>
                  <div>
                    <span className="text-research-gray-500">Location:</span>{' '}
                    <span className="text-research-gray-200">{persona.demographics.location}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-research-gray-500">Occupation:</span>{' '}
                    <span className="text-research-gray-200">{persona.demographics.occupation}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-research-gray-500">Experience:</span>{' '}
                    <span className="text-research-gray-200">{persona.demographics.experience}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-6 p-4 border-l-4 italic text-research-gray-300" style={{ borderColor: persona.color }}>
                "{persona.quote}"
              </blockquote>

              {/* Goals */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-research-gray-400 mb-3">
                  Goals
                </h4>
                <ul className="space-y-2">
                  {persona.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-research-gray-300">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: persona.color }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frustrations */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-research-gray-400 mb-3">
                  Frustrations
                </h4>
                <ul className="space-y-2">
                  {persona.frustrations.map((frustration, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-research-gray-300">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {frustration}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Behaviors */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-research-gray-400 mb-3">
                  Behaviors
                </h4>
                <ul className="space-y-2">
                  {persona.behaviors.map((behavior, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-research-gray-300">
                      <span className="text-research-gray-500">•</span>
                      {behavior}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Needs */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-research-gray-400 mb-3">
                  Needs
                </h4>
                <div className="flex flex-wrap gap-2">
                  {persona.needs.map((need, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-research-bg/50 border rounded-full text-sm text-research-gray-300"
                      style={{ borderColor: `${persona.color}40` }}
                    >
                      {need}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
