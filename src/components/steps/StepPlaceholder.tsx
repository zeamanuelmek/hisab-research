interface StepPlaceholderProps {
  step: number;
  title: string;
  description: string;
  id: string;
  bgVariant?: 'default' | 'card';
}

export function StepPlaceholder({
  step,
  title,
  description,
  id,
  bgVariant = 'default',
}: StepPlaceholderProps) {
  return (
    <section
      id={id}
      className={`py-20 px-6 ${bgVariant === 'card' ? 'bg-research-card/30' : ''}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-research-purple/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-purple">Step {step}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-research-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-research-card border border-research-gray-800 rounded-2xl p-12">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-research-purple/10 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-research-purple"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-research-gray-500 mb-4">
            This section will contain detailed {title.toLowerCase()} data from the research synthesis.
          </p>
          <p className="text-sm font-mono text-research-gray-600">
            Data to be added from JSX artifacts
          </p>
        </div>
      </div>
    </section>
  );
}
