import type { Question, Dimension } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  // Block 1: Mente & Emoção
  { id: 1, text: 'Você pensa demais antes de agir?', dimension: 'Mental' },
  { id: 2, text: 'Sente culpa quando descansa?', dimension: 'Emocional' },
  { id: 3, text: 'Tem dificuldade em tomar decisões?', dimension: 'Mental' },
  { id: 4, text: 'Fica irritado com pessoas próximas sem motivo claro?', dimension: 'Emocional' },
  { id: 5, text: 'Sente que está sempre sobrecarregado de ideias?', dimension: 'Mental' },
  { id: 6, text: 'Sente que o ambiente ao seu redor te suga energia?', dimension: 'Emocional' },
  { id: 7, text: 'Procrastina mesmo sabendo o que precisa fazer?', dimension: 'Mental' },
  { id: 8, text: 'Se cobra por não ser “perfeita(o)”?', dimension: 'Emocional' },

  // Block 2: Ação & Rotina
  { id: 9, text: 'Você começa projetos e não termina?', dimension: 'Prática' },
  { id: 10, text: 'Trabalha muito, mas o dinheiro sempre acaba rápido?', dimension: 'Financeira' },
  { id: 11, text: 'Costuma deixar tarefas acumularem?', dimension: 'Prática' },
  { id: 12, text: 'Evita olhar seu extrato bancário?', dimension: 'Financeira' },
  { id: 13, text: 'Fica sem saber por onde começar o dia?', dimension: 'Prática' },
  { id: 14, text: 'Sente que perde o foco com facilidade?', dimension: 'Mental' },
  { id: 15, text: 'Tem dificuldade de manter uma rotina?', dimension: 'Prática' },
  { id: 16, text: 'Guarda sentimentos sem conseguir expressar?', dimension: 'Emocional' },

  // Block 3: Dinheiro & Fluxo
  { id: 17, text: 'Sente que o dinheiro “some” sem saber pra onde foi?', dimension: 'Financeira' },
  { id: 18, text: 'Vive apagando incêndios e reagindo ao que acontece?', dimension: 'Prática' },
  { id: 19, text: 'Compra por impulso pra aliviar o estresse?', dimension: 'Financeira' },
  { id: 20, text: 'Chora ou se isola quando está sobrecarregado?', dimension: 'Emocional' },
  { id: 21, text: 'Já tentou se organizar financeiramente, mas desistiu?', dimension: 'Financeira' },
  { id: 22, text: 'Sente que a vida está bagunçada, mas não sabe por onde arrumar?', dimension: 'Prática' },
  { id: 23, text: 'Tem medo de não conseguir sustentar o futuro?', dimension: 'Financeira' },
  { id: 24, text: 'Fica ansioso quando precisa escolher um caminho?', dimension: 'Mental' },
];

export const PDF_LINKS: Record<Dimension, string> = {
    Mental: 'https://www.example.com/desafio-mental.pdf',
    Emocional: 'https://www.example.com/desafio-emocional.pdf',
    Financeira: 'https://www.example.com/desafio-financeiro.pdf',
    Prática: 'https://www.example.com/desafio-pratico.pdf',
};