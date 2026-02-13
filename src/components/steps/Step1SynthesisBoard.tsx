import { stickyNotes } from '../../data/synthesis';
import type { StickyNoteStage } from '../../data/types';

const stageOrder: StickyNoteStage[] = [
  'Pain Points & Frustrations',
  'Current Workarounds',
  'Desired Features',
  'Emotional Impact',
  'Behavioral Patterns',
];

const stageColors: Record<StickyNoteStage, string> = {
  'Pain Points & Frustrations': 'bg-red-500/10 border-red-500/30 text-red-300',
  'Current Workarounds': 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300',
  'Desired Features': 'bg-blue-500/10 border-blue-500/30 text-blue-300',
  'Emotional Impact': 'bg-purple-500/10 border-purple-500/30 text-purple-300',
  'Behavioral Patterns': 'bg-green-500/10 border-green-500/30 text-green-300',
};

export function Step1SynthesisBoard() {
  return (
    <section id="synthesis" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-research-purple/20 rounded-full mb-4">
            <span className="text-sm font-mono text-research-purple">Step 1</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research Synthesis Board
          </h2>
          <p className="text-xl text-research-gray-400 max-w-3xl mx-auto">
            49 sticky notes synthesized from 5 in-depth interviews, organized across
            5 thematic stages to reveal patterns and insights.
          </p>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stageOrder.map((stage) => {
            const notesInStage = stickyNotes.filter((note) => note.stage === stage);
            const colorClass = stageColors[stage];

            return (
              <div key={stage} className="flex flex-col">
                {/* Stage Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">{stage}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-research-gray-400">
                      {notesInStage.length} notes
                    </span>
                  </div>
                </div>

                {/* Sticky Notes */}
                <div className="space-y-3">
                  {notesInStage.map((note) => (
                    <div
                      key={note.id}
                      className={`
                        p-4 rounded-lg border backdrop-blur-sm
                        transition-all hover:scale-105 hover:shadow-lg
                        ${colorClass}
                      `}
                    >
                      <p className="text-sm leading-relaxed mb-3 text-research-gray-100">
                        {note.text}
                      </p>

                      {/* Participant badges */}
                      <div className="flex flex-wrap gap-1">
                        {note.sources.map((source) => (
                          <span
                            key={source}
                            className="px-2 py-0.5 bg-research-card/50 rounded text-xs font-mono text-research-gray-400"
                          >
                            {source}
                          </span>
                        ))}
                      </div>

                      {/* Priority indicator */}
                      {note.priority && (
                        <div className="mt-2">
                          <span
                            className={`
                              text-xs font-medium px-2 py-0.5 rounded
                              ${
                                note.priority === 'high'
                                  ? 'bg-red-500/20 text-red-400'
                                  : note.priority === 'medium'
                                  ? 'bg-yellow-500/20 text-yellow-400'
                                  : 'bg-green-500/20 text-green-400'
                              }
                            `}
                          >
                            {note.priority}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
