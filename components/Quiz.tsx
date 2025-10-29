import React, { useState } from 'react';
import type { Question, Answer, Dimension } from '../types';

interface QuizProps {
  question: Question;
  onAnswer: (dimension: Dimension, answer: Answer) => void;
  progress: number;
}

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-gray-700/50 rounded-full h-1.5 mb-6 relative overflow-hidden">
    <div
      className="bg-gradient-to-r from-[#a64cff] to-[#00ffae] h-full rounded-full transition-all duration-500 ease-out"
      style={{ width: `${progress}%` }}
    ></div>
    <div 
      className="absolute top-0 left-0 h-full w-full opacity-50"
      style={{
        background: `radial-gradient(circle at ${progress}%, #00ffae, transparent 40%)`
      }}
    ></div>
  </div>
);

export const Quiz: React.FC<QuizProps> = ({ question, onAnswer, progress }) => {
  const [selected, setSelected] = useState<Answer>(null);

  const handleSelect = (answer: Answer) => {
    setSelected(answer);
    onAnswer(question.dimension, answer);
  };

  const buttonStyle = "w-full py-4 px-4 rounded-lg font-bold text-lg border-2 transition-all duration-200 transform focus:outline-none";
  const selectedStyle = {
    'Sim': 'bg-[#00ffae] border-[#00ffae] text-black scale-105 shadow-[0_0_15px_rgba(0,255,174,0.6)]',
    'Às vezes': 'bg-[#a64cff] border-[#a64cff] text-white scale-105 shadow-[0_0_15px_rgba(166,76,255,0.6)]',
    'Não': 'bg-[#ff3366] border-[#ff3366] text-white scale-105 shadow-[0_0_15px_rgba(255,51,102,0.6)]'
  };
  const unselectedStyle = "bg-transparent border-gray-600 hover:border-gray-400";


  return (
    <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-lg shadow-purple-900/50 p-6 sm:p-8 animate-fade-in">
      <ProgressBar progress={progress} />
      <div className="text-center">
        <p className="text-lg md:text-xl text-gray-200 mb-8 min-h-[6rem] flex items-center justify-center">{question.text}</p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleSelect('Sim')}
            disabled={selected !== null}
            className={`${buttonStyle} ${selected ? (selected === 'Sim' ? selectedStyle['Sim'] : 'opacity-50') : unselectedStyle + ' hover:text-[#00ffae] hover:border-[#00ffae]'}`}
          >
            Sim
          </button>
          <button
            onClick={() => handleSelect('Às vezes')}
            disabled={selected !== null}
            className={`${buttonStyle} ${selected ? (selected === 'Às vezes' ? selectedStyle['Às vezes'] : 'opacity-50') : unselectedStyle + ' hover:text-[#a64cff] hover:border-[#a64cff]'}`}
          >
            Às vezes
          </button>
          <button
            onClick={() => handleSelect('Não')}
            disabled={selected !== null}
            className={`${buttonStyle} ${selected ? (selected === 'Não' ? selectedStyle['Não'] : 'opacity-50') : unselectedStyle + ' hover:text-[#ff3366] hover:border-[#ff3366]'}`}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};