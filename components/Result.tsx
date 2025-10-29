import React from 'react';
import type { Dimension, UserInfo } from '../types';

interface ResultProps {
  result: Dimension;
  userInfo: UserInfo;
  pdfLink: string;
  xp: number;
  dimensionScore: number;
  onReset: () => void;
}

const dimensionDetails: Record<Dimension, { icon: string; title: string; color: string; borderColor: string; }> = {
    Mental: { icon: '🧠', title: 'Mental', color: 'text-blue-400', borderColor: 'border-blue-500' },
    Emocional: { icon: '❤️', title: 'Emocional', color: 'text-rose-400', borderColor: 'border-rose-500' },
    Financeira: { icon: '💰', title: 'Financeira', color: 'text-green-400', borderColor: 'border-green-500' },
    Prática: { icon: '⚙️', title: 'Prática', color: 'text-amber-400', borderColor: 'border-amber-500' },
};

export const Result: React.FC<ResultProps> = ({ result, userInfo, pdfLink, xp, dimensionScore, onReset }) => {
    const details = dimensionDetails[result];

    return (
        <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-lg shadow-purple-900/50 p-6 sm:p-8 text-center animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-glow">Diagnóstico Concluído!</h2>
            <p className="mt-2 text-gray-300">Parabéns, {userInfo.name}, você completou com <span className="text-[#00ffae] font-bold">{xp} XP</span>!</p>

            <p className="mt-4 text-gray-300">Seu maior ponto de bloqueio está na dimensão:</p>
            
            <div className={`my-6 p-6 bg-gray-900/50 rounded-lg border-l-4 ${details.borderColor}`}>
                <span className="text-5xl">{details.icon}</span>
                <h3 className={`text-3xl font-bold mt-2 ${details.color}`}>{details.title}</h3>
                <p className={`mt-1 font-semibold ${details.color}`}>({dimensionScore} XP)</p>
            </div>

            <p className="text-gray-300 mb-6">🎯 Baixe seu <span className="font-bold">Desafio de 7 Dias</span> e suba para o próximo nível.</p>
            
            <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-[#a64cff] text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-500 shadow-[0_0_15px_rgba(166,76,255,0.6)] hover:shadow-[0_0_25px_rgba(166,76,255,0.8)] transition-all duration-300 transform hover:scale-105"
            >
                Baixar Desafio 4D
            </a>

            <div className="mt-10 pt-6 border-t border-gray-700">
                <p className="mt-2 text-gray-400">Quer transformar 7 dias em uma mudança real? Conheça o caminho completo.</p>
                <a
                    href="https://oferta.solucoes4d.com.br/mentoria-4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-green-600/80 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-400/50 transition-all duration-300 shadow-md"
                >
                    Conhecer a Mentoria 4D
                </a>
            </div>

            <button
                onClick={onReset}
                className="mt-8 text-sm text-gray-500 hover:text-[#a64cff] transition-colors"
            >
                Fazer novo diagnóstico
            </button>
        </div>
    );
};