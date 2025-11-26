'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  category: string;
}

const sampleCourses: Course[] = [
  {
    id: 1,
    title: "Direito Constitucional",
    description: "Fundamentos do direito constitucional brasileiro",
    progress: 75,
    totalLessons: 20,
    completedLessons: 15,
    category: "Direito"
  },
  {
    id: 2,
    title: "Matemática Básica",
    description: "Conceitos fundamentais de matemática para concursos",
    progress: 60,
    totalLessons: 15,
    completedLessons: 9,
    category: "Matemática"
  },
  {
    id: 3,
    title: "Português",
    description: "Gramática e interpretação de texto",
    progress: 40,
    totalLessons: 25,
    completedLessons: 10,
    category: "Português"
  },
  {
    id: 4,
    title: "Administração Pública",
    description: "Princípios e práticas da administração pública",
    progress: 20,
    totalLessons: 18,
    completedLessons: 4,
    category: "Administração"
  }
];

export default function Study() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

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
          <p className="text-gray-600 dark:text-gray-400 mb-4">Você precisa estar logado para acessar os estudos.</p>
          <a href="/" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
            Voltar ao Início
          </a>
        </div>
      </div>
    );
  }

  const categories = ['Todos', ...Array.from(new Set(sampleCourses.map(course => course.category)))];

  const filteredCourses = sampleCourses.filter(course => {
    const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Biblioteca de Estudos
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore nossos cursos e acelere sua preparação para concursos.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {course.title}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                      {course.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {course.progress}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      concluído
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {course.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>{course.completedLessons} de {course.totalLessons} aulas</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  {course.progress === 100 ? 'Revisar Curso' : 'Continuar Estudando'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.978-5.709-2.709M12 4v2m0 12v2m8-10h2m-2 4h2m-16-4h-2m2 4h-2" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Nenhum curso encontrado
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tente ajustar os filtros ou termos de busca.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}