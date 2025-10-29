import React, { useState } from 'react';
import type { UserInfo } from '../types';

interface UserInfoFormProps {
  onSubmit: (userInfo: UserInfo) => void;
}

export const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onSubmit({ name, email });
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-lg shadow-purple-900/50 p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-glow">Quase lá!</h2>
            <p className="mt-2 text-gray-300">Para onde enviamos seu Desafio 4D personalizado?</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Seu nome</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-[#a64cff] focus:border-[#a64cff] transition-all"
                    placeholder="Seu Nome"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Seu melhor e-mail</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-[#a64cff] focus:border-[#a64cff] transition-all"
                    placeholder="seu@email.com"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-[#a64cff] text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-500 shadow-[0_0_15px_rgba(166,76,255,0.6)] hover:shadow-[0_0_25px_rgba(166,76,255,0.8)] transition-all duration-300 transform hover:scale-105"
            >
                Receber Diagnóstico
            </button>
        </form>
    </div>
  );
};