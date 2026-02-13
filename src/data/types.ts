// Type definitions for Hisab Research Data

export type StickyNoteStage =
  | 'Pain Points & Frustrations'
  | 'Current Workarounds'
  | 'Desired Features'
  | 'Emotional Impact'
  | 'Behavioral Patterns';

export type StickyNoteType =
  | 'pain'
  | 'workaround'
  | 'feature'
  | 'emotion'
  | 'behavior';

export interface StickyNote {
  id: string;
  text: string;
  stage: StickyNoteStage;
  type: StickyNoteType;
  sources: string[]; // Participant IDs or names
  priority?: 'high' | 'medium' | 'low';
}

export interface Persona {
  id: string;
  name: string;
  avatar?: string;
  tagline: string;
  demographics: {
    age?: number;
    location: string;
    occupation: string;
    experience: string;
  };
  quote: string;
  goals: string[];
  frustrations: string[];
  behaviors: string[];
  needs: string[];
  color?: string; // Theme color for the persona
}

export interface KeyInsight {
  id: string;
  title: string;
  description: string;
  impact: 'critical' | 'high' | 'medium' | 'low';
  sources: string[];
  category?: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  color: string;
  insights: string[];
  priority: number;
}

export interface SolutionIdea {
  id: string;
  title: string;
  description: string;
  impact: 1 | 2 | 3 | 4 | 5; // 1 = low, 5 = high
  effort: 1 | 2 | 3 | 4 | 5; // 1 = low, 5 = high
  theme: string; // Theme ID
  category?: 'quick-win' | 'big-bet' | 'nice-to-have' | 'time-sink';
}

export interface PriorityRanking {
  feature: string;
  mentions: number;
  percentage: number;
}

export interface DesiredFeature {
  name: string;
  frequency: number;
  participants: string[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'P0' | 'P1' | 'P2';
  rationale: string;
  estimatedEffort: string;
  theme: string;
  evidence?: string[];
  features?: string[];
}

export interface JourneyStage {
  name: string;
  actions: string[];
  thoughts: string[];
  emotions: string[];
  painPoints: string[];
  opportunities: string[];
}

export interface CustomerJourney {
  personaId: string;
  stages: JourneyStage[];
}

export interface RoadmapItem {
  title: string;
  priority: 'P0' | 'P1' | 'P2' | 'Future';
  description: string;
  icon: string;
}

export interface RoadmapPhase {
  version: string;
  name: string;
  timeline: string;
  color: string;
  description: string;
  features: string[];
  goals: string[];
  items: RoadmapItem[];
}

export interface Competitor {
  name: string;
  strengths: string[];
  weaknesses: string[];
  marketPosition: string;
}
