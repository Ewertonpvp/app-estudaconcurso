"use client";

import { useState } from "react";
import { 
  Home, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  User, 
  Trophy,
  TrendingUp,
  Clock,
  Target,
  Award,
  Flame,
  ChevronRight,
  Play,
  CheckCircle2,
  Star,
  Users,
  BarChart3,
  Search,
  Bell,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function EstudaConcurso() {
  const [currentPage, setCurrentPage] = useState<"login" | "dashboard" | "catalog" | "study" | "schedule" | "forum" | "profile">("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Login/Register Page
  const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00FF00] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00FF00] opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00FF00] rounded-2xl mb-4">
              <Trophy className="w-8 h-8 text-[#0D0D0D]" />
            </div>
            <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              EstudaConcurso
            </h1>
            <p className="text-gray-400">Sua aprovação começa aqui</p>
          </div>

          {/* Form Card */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-8 shadow-2xl">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isLogin 
                    ? 'bg-[#00FF00] text-[#0D0D0D]' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
                  !isLogin 
                    ? 'bg-[#00FF00] text-[#0D0D0D]' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                Registrar
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              setIsAuthenticated(true);
              setCurrentPage("dashboard");
            }}>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF00] transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF00] transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Senha</label>
                <input
                  type="password"
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF00] transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-400">
                    <input type="checkbox" className="rounded" />
                    Lembrar-me
                  </label>
                  <a href="#" className="text-[#00FF00] hover:underline">Esqueceu a senha?</a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#00FF00] text-[#0D0D0D] py-3 rounded-xl font-semibold hover:bg-[#00DD00] transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isLogin ? 'Entrar' : 'Criar Conta'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#00FF00] ml-1 hover:underline"
              >
                {isLogin ? 'Registre-se' : 'Faça login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Navigation Sidebar
  const Sidebar = () => {
    const menuItems = [
      { icon: Home, label: "Dashboard", page: "dashboard" as const },
      { icon: BookOpen, label: "Concursos", page: "catalog" as const },
      { icon: Play, label: "Estudos", page: "study" as const },
      { icon: Calendar, label: "Revisões", page: "schedule" as const },
      { icon: MessageSquare, label: "Fórum", page: "forum" as const },
      { icon: User, label: "Perfil", page: "profile" as const },
    ];

    return (
      <>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-[#1A1A1A] border border-[#2A2A2A] p-3 rounded-xl"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 bg-[#1A1A1A] border-r border-[#2A2A2A] p-6
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#00FF00] rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-[#0D0D0D]" />
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>EstudaConcurso</span>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  currentPage === item.page
                    ? 'bg-[#00FF00] text-[#0D0D0D]'
                    : 'text-gray-400 hover:bg-[#2A2A2A] hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#2A2A2A] hover:text-white transition-all">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Configurações</span>
            </button>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setCurrentPage("login");
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#2A2A2A] hover:text-red-400 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sair</span>
            </button>
          </div>
        </aside>
      </>
    );
  };

  // Top Header
  const Header = () => (
    <header className="bg-[#1A1A1A] border-b border-[#2A2A2A] px-6 py-4 flex items-center justify-between">
      <div className="flex-1 max-w-xl ml-0 lg:ml-0">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar concursos, aulas, materiais..."
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-[#00FF00] transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-4">
        <button className="relative p-2 hover:bg-[#2A2A2A] rounded-xl transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#00FF00] rounded-full"></span>
        </button>
        <div className="w-10 h-10 bg-gradient-to-br from-[#00FF00] to-[#00CC00] rounded-xl flex items-center justify-center font-bold text-[#0D0D0D]">
          JD
        </div>
      </div>
    </header>
  );

  // Dashboard Page
  const DashboardPage = () => (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#00FF00]/10 to-transparent border border-[#00FF00]/20 rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Bem-vindo de volta! 👋
        </h1>
        <p className="text-gray-400">Continue sua jornada rumo à aprovação</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-[#00FF00]" />
            </div>
            <span className="text-2xl font-bold text-[#00FF00]">15</span>
          </div>
          <h3 className="font-semibold mb-1">Dias de Streak</h3>
          <p className="text-sm text-gray-400">Continue assim!</p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#00FF00]" />
            </div>
            <span className="text-2xl font-bold text-[#00FF00]">24h</span>
          </div>
          <h3 className="font-semibold mb-1">Horas Estudadas</h3>
          <p className="text-sm text-gray-400">Esta semana</p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-[#00FF00]" />
            </div>
            <span className="text-2xl font-bold text-[#00FF00]">87%</span>
          </div>
          <h3 className="font-semibold mb-1">Taxa de Acerto</h3>
          <p className="text-sm text-gray-400">Últimos simulados</p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-[#00FF00]" />
            </div>
            <span className="text-2xl font-bold text-[#00FF00]">12</span>
          </div>
          <h3 className="font-semibold mb-1">Conquistas</h3>
          <p className="text-sm text-gray-400">Badges desbloqueados</p>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Evolução de Estudos</h2>
            <button className="text-sm text-[#00FF00] hover:underline">Ver detalhes</button>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-[#00FF00]/20 rounded-t-lg relative overflow-hidden" style={{ height: `${height}%` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00FF00] to-[#00FF00]/50"></div>
                </div>
                <span className="text-xs text-gray-400">
                  {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Conquistas Recentes</h2>
          <div className="space-y-4">
            {[
              { icon: "🔥", title: "Streak Master", desc: "15 dias consecutivos" },
              { icon: "⭐", title: "Top Student", desc: "87% de acertos" },
              { icon: "🎯", title: "Focado", desc: "24h esta semana" },
            ].map((achievement, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-[#0D0D0D] rounded-xl border border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{achievement.title}</h3>
                  <p className="text-xs text-gray-400">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Studying */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Continue Estudando</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Direito Constitucional", progress: 65, time: "2h 30min" },
            { title: "Português", progress: 45, time: "1h 45min" },
            { title: "Raciocínio Lógico", progress: 80, time: "3h 15min" },
          ].map((course, i) => (
            <div key={i} className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-4 hover:border-[#00FF00]/50 transition-all group cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{course.title}</h3>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#00FF00] transition-colors" />
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Progresso</span>
                  <span className="text-[#00FF00] font-semibold">{course.progress}%</span>
                </div>
                <div className="w-full h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <div className="h-full bg-[#00FF00] rounded-full transition-all" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{course.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Catalog Page
  const CatalogPage = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Catálogo de Concursos</h1>
        <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all">
          Filtrar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "TRF - Técnico Judiciário", org: "Tribunal Regional Federal", vagas: 150, salary: "R$ 8.500", deadline: "30 dias" },
          { title: "Polícia Federal - Agente", org: "Polícia Federal", vagas: 500, salary: "R$ 12.500", deadline: "45 dias" },
          { title: "Receita Federal - Auditor", org: "Receita Federal", vagas: 200, salary: "R$ 21.000", deadline: "60 dias" },
          { title: "TCU - Auditor Federal", org: "Tribunal de Contas da União", vagas: 80, salary: "R$ 18.000", deadline: "25 dias" },
          { title: "INSS - Técnico", org: "Instituto Nacional do Seguro Social", vagas: 1000, salary: "R$ 5.900", deadline: "40 dias" },
          { title: "Banco Central - Analista", org: "Banco Central do Brasil", vagas: 120, salary: "R$ 19.500", deadline: "50 dias" },
        ].map((concurso, i) => (
          <div key={i} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-[#00FF00]" />
              </div>
              <span className="px-3 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs font-semibold rounded-full">
                {concurso.deadline}
              </span>
            </div>
            
            <h3 className="text-lg font-bold mb-2 group-hover:text-[#00FF00] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {concurso.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{concurso.org}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Vagas</span>
                <span className="font-semibold">{concurso.vagas}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Salário</span>
                <span className="font-semibold text-[#00FF00]">{concurso.salary}</span>
              </div>
            </div>

            <button className="w-full py-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl font-semibold hover:bg-[#00FF00] hover:text-[#0D0D0D] hover:border-[#00FF00] transition-all">
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Study Page
  const StudyPage = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Área de Estudos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Subjects List */}
        <div className="lg:col-span-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-4">Disciplinas</h2>
          <div className="space-y-2">
            {[
              "Direito Constitucional",
              "Português",
              "Raciocínio Lógico",
              "Direito Administrativo",
              "Informática",
              "Atualidades"
            ].map((subject, i) => (
              <button key={i} className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#0D0D0D] transition-all text-gray-400 hover:text-white">
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Video Player */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden">
            <div className="aspect-video bg-[#0D0D0D] flex items-center justify-center relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#00FF00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-[#0D0D0D] ml-1" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Princípios Fundamentais da Constituição
              </h2>
              <p className="text-gray-400 mb-4">Prof. João Silva • 45 minutos</p>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Assistir Aula
                </button>
                <button className="px-6 py-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl font-semibold hover:border-[#00FF00] transition-all">
                  Baixar Material
                </button>
              </div>
            </div>
          </div>

          {/* Lessons List */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Próximas Aulas</h2>
            <div className="space-y-3">
              {[
                { title: "Direitos e Garantias Fundamentais", duration: "38 min", completed: true },
                { title: "Organização do Estado", duration: "42 min", completed: true },
                { title: "Organização dos Poderes", duration: "50 min", completed: false },
                { title: "Defesa do Estado e das Instituições", duration: "35 min", completed: false },
              ].map((lesson, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[#0D0D0D] rounded-xl border border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all cursor-pointer group">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${lesson.completed ? 'bg-[#00FF00]' : 'bg-[#2A2A2A]'}`}>
                    {lesson.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-[#0D0D0D]" />
                    ) : (
                      <Play className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-[#00FF00] transition-colors">{lesson.title}</h3>
                    <p className="text-sm text-gray-400">{lesson.duration}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#00FF00] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Schedule Page
  const SchedulePage = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Agendamento de Revisões</h1>
        <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all">
          + Nova Revisão
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Janeiro 2025</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">←</button>
              <button className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">→</button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2;
              const hasEvent = [5, 12, 18, 25].includes(day);
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center rounded-xl text-sm cursor-pointer transition-all ${
                    day < 1 || day > 31
                      ? 'text-gray-600'
                      : hasEvent
                      ? 'bg-[#00FF00] text-[#0D0D0D] font-bold hover:bg-[#00DD00]'
                      : 'hover:bg-[#2A2A2A]'
                  }`}
                >
                  {day > 0 && day <= 31 ? day : ''}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Reviews */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Próximas Revisões</h2>
          <div className="space-y-3">
            {[
              { subject: "Direito Constitucional", date: "Hoje", time: "14:00" },
              { subject: "Português", date: "Amanhã", time: "10:00" },
              { subject: "Raciocínio Lógico", date: "18 Jan", time: "16:00" },
              { subject: "Direito Administrativo", date: "25 Jan", time: "09:00" },
            ].map((review, i) => (
              <div key={i} className="p-4 bg-[#0D0D0D] rounded-xl border border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-[#00FF00]" />
                  <span className="font-semibold">{review.subject}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{review.date}</span>
                  <span>{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Study Plan */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Plano de Estudos Semanal</h2>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, i) => (
            <div key={i} className="bg-[#0D0D0D] rounded-xl p-4 border border-[#2A2A2A]">
              <h3 className="font-semibold mb-3 text-center">{day}</h3>
              <div className="space-y-2">
                {i < 5 ? (
                  <>
                    <div className="p-2 bg-[#00FF00]/10 border border-[#00FF00]/30 rounded-lg text-xs text-center">
                      Manhã<br/>Português
                    </div>
                    <div className="p-2 bg-[#00FF00]/10 border border-[#00FF00]/30 rounded-lg text-xs text-center">
                      Tarde<br/>Dir. Const.
                    </div>
                  </>
                ) : (
                  <div className="p-2 bg-[#2A2A2A] rounded-lg text-xs text-center text-gray-400">
                    Descanso
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Forum Page
  const ForumPage = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Fórum de Discussão</h1>
        <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all">
          + Nova Discussão
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-4">Categorias</h2>
          <div className="space-y-2">
            {[
              { name: "Dúvidas", count: 234 },
              { name: "Dicas de Estudo", count: 156 },
              { name: "Materiais", count: 89 },
              { name: "Motivação", count: 178 },
              { name: "Editais", count: 45 },
            ].map((category, i) => (
              <button key={i} className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#0D0D0D] transition-all text-left">
                <span>{category.name}</span>
                <span className="text-sm text-gray-400">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Discussions */}
        <div className="lg:col-span-3 space-y-4">
          {[
            {
              title: "Melhor método para memorizar artigos da CF?",
              author: "Maria Silva",
              replies: 23,
              likes: 45,
              time: "2h atrás",
              category: "Dúvidas"
            },
            {
              title: "Compartilhando meu cronograma de estudos",
              author: "João Santos",
              replies: 67,
              likes: 120,
              time: "5h atrás",
              category: "Dicas de Estudo"
            },
            {
              title: "Resumo completo de Direito Administrativo",
              author: "Ana Costa",
              replies: 89,
              likes: 234,
              time: "1 dia atrás",
              category: "Materiais"
            },
            {
              title: "Como manter a motivação nos estudos?",
              author: "Pedro Lima",
              replies: 156,
              likes: 289,
              time: "2 dias atrás",
              category: "Motivação"
            },
          ].map((discussion, i) => (
            <div key={i} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00FF00] to-[#00CC00] rounded-xl flex items-center justify-center font-bold text-[#0D0D0D] flex-shrink-0">
                  {discussion.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs font-semibold rounded-full">
                      {discussion.category}
                    </span>
                    <span className="text-sm text-gray-400">{discussion.time}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#00FF00] transition-colors">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">por {discussion.author}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>{discussion.replies} respostas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>{discussion.likes} curtidas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Profile Page
  const ProfilePage = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Meu Perfil</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-[#00FF00] to-[#00CC00] rounded-2xl flex items-center justify-center font-bold text-3xl text-[#0D0D0D] mx-auto mb-4">
              JD
            </div>
            <h2 className="text-xl font-bold mb-1">João da Silva</h2>
            <p className="text-gray-400">joao@email.com</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-3 bg-[#0D0D0D] rounded-xl">
              <span className="text-gray-400">Membro desde</span>
              <span className="font-semibold">Jan 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0D0D0D] rounded-xl">
              <span className="text-gray-400">Nível</span>
              <span className="font-semibold text-[#00FF00]">Avançado</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0D0D0D] rounded-xl">
              <span className="text-gray-400">Pontos</span>
              <span className="font-semibold">2.450</span>
            </div>
          </div>

          <button className="w-full py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all">
            Editar Perfil
          </button>
        </div>

        {/* Stats & Achievements */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Estatísticas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Horas Totais", value: "156h", icon: Clock },
                { label: "Aulas Completas", value: "89", icon: CheckCircle2 },
                { label: "Streak Atual", value: "15 dias", icon: Flame },
                { label: "Taxa de Acerto", value: "87%", icon: Target },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0D0D0D] rounded-xl p-4 text-center">
                  <stat.icon className="w-8 h-8 text-[#00FF00] mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Conquistas Desbloqueadas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: "🔥", title: "Streak Master", desc: "15 dias" },
                { emoji: "⭐", title: "Top Student", desc: "87% acertos" },
                { emoji: "🎯", title: "Focado", desc: "100h estudadas" },
                { emoji: "🏆", title: "Campeão", desc: "1º lugar" },
                { emoji: "📚", title: "Estudioso", desc: "50 aulas" },
                { emoji: "💪", title: "Persistente", desc: "30 dias" },
                { emoji: "🚀", title: "Rápido", desc: "10 aulas/dia" },
                { emoji: "🎓", title: "Mestre", desc: "Nível 10" },
              ].map((badge, i) => (
                <div key={i} className="bg-[#0D0D0D] rounded-xl p-4 text-center hover:border hover:border-[#00FF00]/50 transition-all cursor-pointer">
                  <div className="text-4xl mb-2">{badge.emoji}</div>
                  <div className="font-semibold text-sm mb-1">{badge.title}</div>
                  <div className="text-xs text-gray-400">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Atividade Recente</h2>
            <div className="space-y-4">
              {[
                { action: "Completou aula", subject: "Direito Constitucional", time: "2h atrás" },
                { action: "Conquistou badge", subject: "Streak Master", time: "5h atrás" },
                { action: "Comentou no fórum", subject: "Dicas de Estudo", time: "1 dia atrás" },
                { action: "Completou simulado", subject: "Português", time: "2 dias atrás" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[#0D0D0D] rounded-xl">
                  <div className="w-10 h-10 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF00]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{activity.action}</p>
                    <p className="text-sm text-gray-400">{activity.subject}</p>
                  </div>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main Render
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          {currentPage === "dashboard" && <DashboardPage />}
          {currentPage === "catalog" && <CatalogPage />}
          {currentPage === "study" && <StudyPage />}
          {currentPage === "schedule" && <SchedulePage />}
          {currentPage === "forum" && <ForumPage />}
          {currentPage === "profile" && <ProfilePage />}
        </main>
      </div>
    </div>
  );
}
