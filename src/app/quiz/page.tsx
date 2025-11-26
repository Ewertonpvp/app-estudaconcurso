'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correctAnswer: 2,
    explanation: "Brasília é a capital federal do Brasil desde 1960."
  },
  {
    id: 2,
    question: "Quem foi o primeiro presidente do Brasil?",
    options: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Floriano Peixoto"],
    correctAnswer: 2,
    explanation: "Deodoro da Fonseca foi o primeiro presidente do Brasil após a Proclamação da República em 1889."
  },
  {
    id: 3,
    question: "Qual é o maior rio do mundo?",
    options: ["Amazonas", "Nilo", "Yangtzé", "Mississippi"],
    correctAnswer: 0,
    explanation: "O Rio Amazonas é considerado o maior rio do mundo em termos de volume de água."
  }
];

export default function Quiz() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Acesso Negado</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Você precisa estar logado para fazer quizzes.</p>
          <a href="/" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
            Voltar ao Início
          </a>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === sampleQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold ${
                percentage >= 70 ? 'bg-green-100 text-green-600' : percentage >= 50 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
              }`}>
                {percentage}%
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quiz Concluído!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Você acertou {score} de {sampleQuestions.length} perguntas.
            </p>
            <div className="space-y-4">
              <button
                onClick={restartQuiz}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Fazer Outro Quiz
              </button>
              <a
                href="/dashboard"
                className="block w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Voltar ao Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = sampleQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pergunta {currentQuestion + 1} de {sampleQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pontuação: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {question.question}
          </h2>

          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                disabled={showResult}
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {String.fromCharCode(65 + index)}. {option}
                </span>
              </button>
            ))}
          </div>

          {showResult && (
            <div className={`p-4 rounded-lg mb-6 ${
              selectedAnswer === question.correctAnswer
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <p className="font-medium text-gray-900 dark:text-white mb-2">
                {selectedAnswer === question.correctAnswer ? '✓ Correto!' : '✗ Incorreto'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {question.explanation}
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={handleShowResult}
              disabled={selectedAnswer === null || showResult}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Ver Resposta
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={!showResult}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {currentQuestion === sampleQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}