'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

export default function Support() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSending(true);
    try {
      // Here you would typically send the support request to your backend
      // For now, we'll just simulate it
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setSubject('');
      setMessage('');
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Central de Suporte
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Estamos aqui para ajudar você em sua jornada de estudos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Entre em Contato
            </h2>
            {user ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Digite o assunto da sua mensagem"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Descreva seu problema ou dúvida em detalhes"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  {sending ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Para entrar em contato, você precisa estar logado.
                </p>
                <a
                  href="/"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Fazer Login
                </a>
              </div>
            )}
          </div>

          {/* FAQ and Info */}
          <div className="space-y-6">
            {/* FAQ */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Perguntas Frequentes
              </h3>
              <div className="space-y-4">
                <details className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <summary className="cursor-pointer text-gray-900 dark:text-white font-medium mb-2">
                    Como acessar as videoaulas?
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Após fazer login, acesse a seção "Estudar" no menu principal e selecione o curso desejado.
                  </p>
                </details>
                <details className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <summary className="cursor-pointer text-gray-900 dark:text-white font-medium mb-2">
                    Como fazer os quizzes?
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Vá para a seção "Quiz" no menu e escolha um quiz disponível para testar seus conhecimentos.
                  </p>
                </details>
                <details className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <summary className="cursor-pointer text-gray-900 dark:text-white font-medium mb-2">
                    Como acompanhar meu progresso?
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Acesse seu Dashboard para ver estatísticas detalhadas do seu progresso nos estudos.
                  </p>
                </details>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Outros Canais de Contato
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">suporte@estudaconcurso.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">Seg-Sex: 8h às 18h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}