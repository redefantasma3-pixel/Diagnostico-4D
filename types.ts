export type Dimension = 'Mental' | 'Emocional' | 'Financeira' | 'Prática';

export type Answer = 'Sim' | 'Às vezes' | 'Não' | null;

export interface Question {
  id: number;
  text: string;
  dimension: Dimension;
}

export type QuizAnswers = {
  [key: number]: Answer;
};

export type DimensionScores = Record<Dimension, number>;

export interface UserInfo {
  name: string;
  email: string;
}

export type Step = 'start' | 'quiz' | 'intermission' | 'form' | 'result';