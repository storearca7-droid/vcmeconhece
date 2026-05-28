export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface WrongAnswer {
  question: Question;
  selectedOptionIndex: number;
}

export interface UserInfo {
  name: string;
  phone: string;
}

export type GameState = 'start' | 'playing' | 'result';
