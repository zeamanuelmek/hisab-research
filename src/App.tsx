import { useScrollSpy } from './hooks/useScrollSpy';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Step1SynthesisBoard } from './components/steps/Step1SynthesisBoard';
import { Step2Personas } from './components/steps/Step2Personas';
import { Step3Insights } from './components/steps/Step3Insights';
import { Step4Themes } from './components/steps/Step4Themes';
import { Step5Recommendations } from './components/steps/Step5Recommendations';
import { Step6Journey } from './components/steps/Step6Journey';
import { Step7Roadmap } from './components/steps/Step7Roadmap';
import { Step8Competitors } from './components/steps/Step8Competitors';
import { Step9Report } from './components/steps/Step9Report';
import { Conclusion } from './components/Conclusion';

const sections = [
  { id: 'synthesis', title: 'Synthesis' },
  { id: 'personas', title: 'Personas' },
  { id: 'insights', title: 'Insights' },
  { id: 'themes', title: 'Themes' },
  { id: 'recommendations', title: 'Recommendations' },
  { id: 'journey', title: 'Journey' },
  { id: 'roadmap', title: 'Roadmap' },
  { id: 'competitors', title: 'Competitors' },
  { id: 'report', title: 'Report' },
  { id: 'conclusion', title: 'Next Steps' },
];

function App() {
  const activeSection = useScrollSpy(sections.map(s => s.id), 150);

  return (
    <div className="min-h-screen bg-research-bg text-research-gray-100">
      <Navigation activeSection={activeSection} sections={sections} />

      <Hero />

      <Step1SynthesisBoard />

      <Step2Personas />

      <Step3Insights />

      <Step4Themes />

      <Step5Recommendations />

      <Step6Journey />

      <Step7Roadmap />

      <Step8Competitors />

      <Step9Report />

      <Conclusion />
    </div>
  );
}

export default App;
