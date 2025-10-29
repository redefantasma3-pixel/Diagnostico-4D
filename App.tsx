import React, { useState, useMemo, useEffect } from 'react';
import { Quiz } from './components/Quiz';
import { UserInfoForm } from './components/UserInfoForm';
import { Result } from './components/Result';
import { QUIZ_QUESTIONS, PDF_LINKS } from './constants';
import type { UserInfo, Dimension, Step, Answer, DimensionScores } from './types';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('start');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalXp, setTotalXp] = useState(0);
  const [dimensionScores, setDimensionScores] = useState<DimensionScores>({
    Mental: 0,
    Emocional: 0,
    Financeira: 0,
    Prática: 0,
  });
  const [xpPopup, setXpPopup] = useState<{ key: number; value: number } | null>(null);

  const diagnosisResult = useMemo<Dimension>(() => {
    if (step !== 'result') return 'Prática'; // Default
    return Object.keys(dimensionScores).reduce((a, b) =>
      dimensionScores[a as Dimension] > dimensionScores[b as Dimension] ? a : b
    ) as Dimension;
  }, [dimensionScores, step]);

  const handleStart = () => {
    setStep('quiz');
  };

  const handleAnswer = (questionDimension: Dimension, answer: Answer) => {
    let xpGain = 0;
    if (answer === 'Sim') xpGain = 25;
    else if (answer === 'Às vezes') xpGain = 15;
    else if (answer === 'Não') xpGain = 5;
    
    setDimensionScores(prev => ({ ...prev, [questionDimension]: prev[questionDimension] + xpGain }));
    setTotalXp(prev => prev + xpGain);
    setXpPopup({ key: Date.now(), value: xpGain });

    setTimeout(() => {
        if (currentQuestionIndex === 7 || currentQuestionIndex === 15) {
            setStep('intermission');
        } else if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setStep('form');
        }
    }, 300);
  };
  
  const handleContinue = () => {
      setTotalXp(prev => prev + 100); // Bonus XP
      setStep('quiz');
      setCurrentQuestionIndex(prev => prev + 1);
  };

  const handleFormSubmit = (submittedUserInfo: UserInfo) => {
    setUserInfo(submittedUserInfo);
    setStep('result');
  };

  const handleReset = () => {
    setStep('start');
    setUserInfo(null);
    setCurrentQuestionIndex(0);
    setTotalXp(0);
    setDimensionScores({ Mental: 0, Emocional: 0, Financeira: 0, Prática: 0 });
  };

  useEffect(() => {
    if (xpPopup) {
      const timer = setTimeout(() => setXpPopup(null), 900);
      return () => clearTimeout(timer);
    }
  }, [xpPopup]);

  const renderStep = () => {
    switch (step) {
      case 'start':
        return (
          <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-lg shadow-purple-900/50 p-8 text-center animate-fade-in">
            <h1 className="text-4xl font-bold text-glow mb-2">Diagnóstico 4D</h1>
            <p className="text-gray-300 mb-8">Descubra onde está vazando sua energia.</p>
            <button
              onClick={handleStart}
              className="w-full bg-[#a64cff] text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-500 shadow-[0_0_15px_rgba(166,76,255,0.6)] hover:shadow-[0_0_25px_rgba(166,76,255,0.8)] transition-all duration-300 transform hover:scale-105"
            >
              Começar →
            </button>
          </div>
        );
      case 'quiz':
        return (
          <Quiz
            key={currentQuestionIndex}
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            onAnswer={handleAnswer}
            progress={((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}
          />
        );
      case 'intermission':
        return (
            <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-lg shadow-purple-900/50 p-8 text-center animate-fade-in">
                <h2 className="text-3xl font-bold text-[#00ffae]">+100 XP</h2>
                <p className="text-xl font-bold text-glow my-2">Avançando de nível...</p>
                <p className="text-gray-300 mb-8">Respira. Vamos pro próximo bloco.</p>
                <button
                    onClick={handleContinue}
                    className="w-full bg-[#a64cff] text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-500 shadow-[0_0_15px_rgba(166,76,255,0.6)] hover:shadow-[0_0_25px_rgba(166,76,255,0.8)] transition-all duration-300 transform hover:scale-105"
                >
                    Continuar
                </button>
            </div>
        );
      case 'form':
        return <UserInfoForm onSubmit={handleFormSubmit} />;
      case 'result':
        if (userInfo) {
          return (
            <Result
              result={diagnosisResult}
              userInfo={userInfo}
              pdfLink={PDF_LINKS[diagnosisResult]}
              xp={totalXp}
              dimensionScore={dimensionScores[diagnosisResult]}
              onReset={handleReset}
            />
          );
        }
        handleReset();
        return null;
      default:
        handleReset();
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black bg-gradient-radial from-[#6A0DAD]/30 via-black to-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {xpPopup && (
          <div key={xpPopup.key} className="absolute top-1/2 left-1/2 -translate-x-1/2 z-50 text-3xl font-bold text-[#00ffae] xp-popup-animate pointer-events-none">
            +{xpPopup.value} XP
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-[#00FFE6]/10"></div>
        <header className="absolute top-0 left-0 w-full p-6 text-center">
             <h4 className="text-2xl font-bold text-glow tracking-widest">4D</h4>
        </header>
        <main className="w-full max-w-xl mx-auto z-10">
            {renderStep()}
        </main>
    </div>
  );
};

export default App;