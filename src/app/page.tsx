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
  X,
  FileText,
  ClipboardList,
  Check,
  XCircle,
  AlertCircle,
  RotateCcw,
  Send,
  Edit3,
  Save,
  Eye,
  ThumbsUp,
  MessageCircle,
  BookMarked,
  Circle,
  Filter,
  Download,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Link2,
  Trash2
} from "lucide-react";

export default function EstudaConcurso() {
  const [currentPage, setCurrentPage] = useState<"login" | "dashboard" | "catalog" | "study" | "schedule" | "forum" | "profile" | "questions" | "simulado" | "redacoes" | "mapas" | "leis">("login");
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
      { icon: FileText, label: "Questões", page: "questions" as const },
      { icon: ClipboardList, label: "Simulado", page: "simulado" as const },
      { icon: Edit3, label: "Redações", page: "redacoes" as const },
      { icon: Circle, label: "Mapas Mentais", page: "mapas" as const },
      { icon: FileText, label: "Legislação", page: "leis" as const },
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
          transform transition-transform duration-300 ease-in-out overflow-y-auto
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

  // Catalog Page (mantido igual)
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

  // Study Page (mantido igual - código muito longo, mantendo original)
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

  // Questions Page (mantido - código muito longo)
  const QuestionsPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    const questions = [
      {
        id: 1,
        subject: "Direito Constitucional",
        difficulty: "Média",
        question: "Segundo a Constituição Federal de 1988, são Poderes da União, independentes e harmônicos entre si:",
        options: [
          "O Executivo, o Legislativo e o Judiciário",
          "O Executivo Federal, o Legislativo Estadual e o Judiciário Municipal",
          "O Presidente, o Congresso e o Supremo",
          "O Federal, o Estadual e o Municipal",
          "O Executivo, o Legislativo e o Ministerial"
        ],
        correctAnswer: 0,
        explanation: "De acordo com o Art. 2º da CF/88, são Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário."
      },
      {
        id: 2,
        subject: "Português",
        difficulty: "Fácil",
        question: "Assinale a alternativa em que todas as palavras estão grafadas corretamente:",
        options: [
          "Excessão, privilégio, beneficiente",
          "Exceção, previlégio, beneficente",
          "Exceção, privilégio, beneficente",
          "Excessão, previlégio, beneficiente",
          "Exceção, privilégio, beneficiente"
        ],
        correctAnswer: 2,
        explanation: "A grafia correta é: exceção (com ç), privilégio (com i) e beneficente (terminado em ente)."
      },
      {
        id: 3,
        subject: "Raciocínio Lógico",
        difficulty: "Difícil",
        question: "Se todo A é B, e algum B é C, então:",
        options: [
          "Todo A é C",
          "Algum A é C",
          "Nenhum A é C",
          "Não é possível concluir",
          "Todo C é A"
        ],
        correctAnswer: 3,
        explanation: "Não é possível tirar uma conclusão definitiva apenas com essas premissas. Seria necessário saber a relação entre A e C diretamente."
      }
    ];

    const currentQ = questions[currentQuestion];

    const handleAnswer = (index: number) => {
      if (showResult) return;
      setSelectedAnswer(index);
      setShowResult(true);
      
      if (index === currentQ.correctAnswer) {
        setScore({ correct: score.correct + 1, total: score.total + 1 });
      } else {
        setScore({ ...score, total: score.total + 1 });
      }
    };

    const nextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    };

    const resetQuiz = () => {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore({ correct: 0, total: 0 });
    };

    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Resolução de Questões</h1>
          <button 
            onClick={resetQuiz}
            className="px-6 py-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl font-semibold hover:border-[#00FF00] transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Reiniciar
          </button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#00FF00]" />
              <div>
                <p className="text-sm text-gray-400">Questão</p>
                <p className="text-xl font-bold">{currentQuestion + 1}/{questions.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-[#00FF00]" />
              <div>
                <p className="text-sm text-gray-400">Acertos</p>
                <p className="text-xl font-bold">{score.correct}/{score.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-[#00FF00]" />
              <div>
                <p className="text-sm text-gray-400">Taxa</p>
                <p className="text-xl font-bold">
                  {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-[#00FF00]" />
              <div>
                <p className="text-sm text-gray-400">Dificuldade</p>
                <p className="text-xl font-bold">{currentQ.difficulty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#00FF00]/10 text-[#00FF00] text-sm font-semibold rounded-full">
              {currentQ.subject}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-8 leading-relaxed">
            {currentQ.question}
          </h2>

          <div className="space-y-4">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQ.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                    showCorrect
                      ? 'bg-[#00FF00]/10 border-[#00FF00] text-white'
                      : showWrong
                      ? 'bg-red-500/10 border-red-500 text-white'
                      : isSelected
                      ? 'bg-[#00FF00]/5 border-[#00FF00]/50'
                      : 'bg-[#0D0D0D] border-[#2A2A2A] hover:border-[#00FF00]/30'
                  } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                      showCorrect
                        ? 'bg-[#00FF00] text-[#0D0D0D]'
                        : showWrong
                        ? 'bg-red-500 text-white'
                        : 'bg-[#2A2A2A] text-gray-400'
                    }`}>
                      {showCorrect ? (
                        <Check className="w-5 h-5" />
                      ) : showWrong ? (
                        <XCircle className="w-5 h-5" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className={`mt-8 p-6 rounded-xl border-2 ${
              selectedAnswer === currentQ.correctAnswer
                ? 'bg-[#00FF00]/10 border-[#00FF00]'
                : 'bg-red-500/10 border-red-500'
            }`}>
              <div className="flex items-start gap-4">
                {selectedAnswer === currentQ.correctAnswer ? (
                  <CheckCircle2 className="w-6 h-6 text-[#00FF00] flex-shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                )}
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {selectedAnswer === currentQ.correctAnswer ? 'Parabéns! Resposta Correta!' : 'Resposta Incorreta'}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{currentQ.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          {showResult && (
            <div className="mt-8 flex justify-end">
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="px-8 py-4 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center gap-2"
                >
                  Próxima Questão
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Fazer Novamente
                </button>
              )}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Desempenho por Matéria</h3>
            <div className="space-y-3">
              {[
                { subject: "Direito Constitucional", correct: 45, total: 50 },
                { subject: "Português", correct: 38, total: 45 },
                { subject: "Raciocínio Lógico", correct: 32, total: 40 },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{stat.subject}</span>
                    <span className="font-semibold text-[#00FF00]">
                      {Math.round((stat.correct / stat.total) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#00FF00] rounded-full transition-all"
                      style={{ width: `${(stat.correct / stat.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Questões Recentes</h3>
            <div className="space-y-3">
              {[
                { subject: "Dir. Constitucional", result: "correct", time: "2 min" },
                { subject: "Português", result: "correct", time: "3 min" },
                { subject: "Raciocínio Lógico", result: "wrong", time: "5 min" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-[#0D0D0D] rounded-xl">
                  <div className="flex items-center gap-3">
                    {item.result === "correct" ? (
                      <CheckCircle2 className="w-5 h-5 text-[#00FF00]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="text-sm">{item.subject}</span>
                  </div>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Metas Diárias</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Questões Resolvidas</span>
                  <span className="text-sm font-semibold text-[#00FF00]">12/20</span>
                </div>
                <div className="w-full h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <div className="h-full bg-[#00FF00] rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Taxa de Acerto</span>
                  <span className="text-sm font-semibold text-[#00FF00]">85%</span>
                </div>
                <div className="w-full h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <div className="h-full bg-[#00FF00] rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Simulado Page (mantido - código muito longo)
  const SimuladoPage = () => {
    const [simuladoStarted, setSimuladoStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(7200);

    const formatTime = (seconds: number) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Simulados</h1>
          <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all">
            + Novo Simulado
          </button>
        </div>

        {!simuladoStarted ? (
          <>
            {/* Available Simulados */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "TRF - Simulado Completo",
                  questions: 80,
                  duration: "4 horas",
                  difficulty: "Média",
                  subjects: ["Dir. Constitucional", "Português", "Raciocínio Lógico", "Informática"],
                  attempts: 3,
                  bestScore: 72
                },
                {
                  title: "Polícia Federal - Prova Objetiva",
                  questions: 120,
                  duration: "5 horas",
                  difficulty: "Difícil",
                  subjects: ["Dir. Constitucional", "Dir. Administrativo", "Português", "Informática", "Atualidades"],
                  attempts: 2,
                  bestScore: 68
                },
                {
                  title: "Receita Federal - Auditor",
                  questions: 100,
                  duration: "4.5 horas",
                  difficulty: "Muito Difícil",
                  subjects: ["Dir. Tributário", "Contabilidade", "Português", "Raciocínio Lógico"],
                  attempts: 1,
                  bestScore: 55
                },
              ].map((simulado, i) => (
                <div key={i} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
                      <ClipboardList className="w-6 h-6 text-[#00FF00]" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      simulado.difficulty === "Muito Difícil"
                        ? "bg-red-500/10 text-red-500"
                        : simulado.difficulty === "Difícil"
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-[#00FF00]/10 text-[#00FF00]"
                    }`}>
                      {simulado.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {simulado.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Questões</span>
                      <span className="font-semibold">{simulado.questions}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duração</span>
                      <span className="font-semibold">{simulado.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Tentativas</span>
                      <span className="font-semibold">{simulado.attempts}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Melhor Nota</span>
                      <span className="font-semibold text-[#00FF00]">{simulado.bestScore}%</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Disciplinas:</p>
                    <div className="flex flex-wrap gap-2">
                      {simulado.subjects.map((subject, j) => (
                        <span key={j} className="px-2 py-1 bg-[#0D0D0D] text-xs rounded-lg">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSimuladoStarted(true)}
                    className="w-full py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Iniciar Simulado
                  </button>
                </div>
              ))}
            </div>

            {/* Recent Results */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Resultados Recentes</h2>
              <div className="space-y-4">
                {[
                  { name: "TRF - Simulado Completo", date: "15/01/2025", score: 72, time: "3h 45min", status: "Aprovado" },
                  { name: "Polícia Federal - Prova Objetiva", date: "10/01/2025", score: 68, time: "4h 30min", status: "Aprovado" },
                  { name: "Receita Federal - Auditor", date: "05/01/2025", score: 55, time: "4h 15min", status: "Reprovado" },
                ].map((result, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#0D0D0D] rounded-xl border border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        result.status === "Aprovado" ? "bg-[#00FF00]/10" : "bg-red-500/10"
                      }`}>
                        {result.status === "Aprovado" ? (
                          <CheckCircle2 className="w-6 h-6 text-[#00FF00]" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{result.name}</h3>
                        <p className="text-sm text-gray-400">{result.date} • {result.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${
                        result.status === "Aprovado" ? "text-[#00FF00]" : "text-red-500"
                      }`}>
                        {result.score}%
                      </p>
                      <p className="text-xs text-gray-400">{result.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ClipboardList className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Simulados</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Realizados</p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Média Geral</p>
                    <p className="text-2xl font-bold">68%</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Todas as provas</p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Evolução</p>
                    <p className="text-2xl font-bold">+12%</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Último mês</p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Tempo Médio</p>
                    <p className="text-2xl font-bold">4h 10min</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Por simulado</p>
              </div>
            </div>
          </>
        ) : (
          /* Simulado Started View */
          <div className="space-y-6">
            {/* Timer and Progress Bar */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1">TRF - Simulado Completo</h2>
                  <p className="text-gray-400">80 questões • 4 horas</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">Tempo Restante</p>
                  <p className="text-3xl font-bold text-[#00FF00]">{formatTime(timeRemaining)}</p>
                </div>
              </div>
              <div className="w-full h-3 bg-[#2A2A2A] rounded-full overflow-hidden">
                <div className="h-full bg-[#00FF00] rounded-full transition-all" style={{ width: '25%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
                <span>Questão 20 de 80</span>
                <span>25% concluído</span>
              </div>
            </div>

            {/* Question Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Questions Navigator */}
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <h3 className="font-bold mb-4">Navegação</h3>
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {Array.from({ length: 80 }, (_, i) => {
                    const answered = i < 20;
                    const current = i === 19;
                    return (
                      <button
                        key={i}
                        className={`aspect-square rounded-lg text-sm font-semibold transition-all ${
                          current
                            ? 'bg-[#00FF00] text-[#0D0D0D]'
                            : answered
                            ? 'bg-[#00FF00]/20 text-[#00FF00] border border-[#00FF00]/30'
                            : 'bg-[#0D0D0D] text-gray-400 hover:bg-[#2A2A2A]'
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00FF00] rounded"></div>
                    <span className="text-gray-400">Atual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00FF00]/20 border border-[#00FF00]/30 rounded"></div>
                    <span className="text-gray-400">Respondida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#0D0D0D] rounded"></div>
                    <span className="text-gray-400">Não respondida</span>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Finalizar Prova
                </button>
              </div>

              {/* Current Question */}
              <div className="lg:col-span-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8">
                <div className="mb-6">
                  <span className="px-4 py-2 bg-[#00FF00]/10 text-[#00FF00] text-sm font-semibold rounded-full">
                    Direito Constitucional
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-8 leading-relaxed">
                  Questão 20: Segundo a Constituição Federal de 1988, são Poderes da União, independentes e harmônicos entre si:
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    "O Executivo, o Legislativo e o Judiciário",
                    "O Executivo Federal, o Legislativo Estadual e o Judiciário Municipal",
                    "O Presidente, o Congresso e o Supremo",
                    "O Federal, o Estadual e o Municipal",
                    "O Executivo, o Legislativo e o Ministerial"
                  ].map((option, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-5 rounded-xl border-2 bg-[#0D0D0D] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold bg-[#2A2A2A] text-gray-400">
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="px-6 py-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl font-semibold hover:border-[#00FF00] transition-all">
                    ← Anterior
                  </button>
                  <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all">
                    Próxima →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Redações Page (mantido - código muito longo, incluindo todo o código original)
  const RedacoesPage = () => {
    const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
    const [essayText, setEssayText] = useState("");
    const [showFeedback, setShowFeedback] = useState(false);

    const themes = [
      {
        id: 1,
        title: "A importância da educação digital no Brasil",
        category: "Educação",
        difficulty: "Média",
        description: "Discuta sobre a necessidade de inclusão digital nas escolas públicas brasileiras e seus impactos na formação dos cidadãos.",
        keywords: ["educação", "tecnologia", "inclusão digital", "cidadania"],
        concursos: ["TRF", "Polícia Federal", "TCU"],
        attempts: 3
      },
      {
        id: 2,
        title: "Desafios da segurança pública no Brasil contemporâneo",
        category: "Segurança",
        difficulty: "Difícil",
        description: "Analise os principais desafios enfrentados pelas forças de segurança e proponha soluções viáveis para a redução da criminalidade.",
        keywords: ["segurança pública", "criminalidade", "políticas públicas", "sociedade"],
        concursos: ["Polícia Federal", "Polícia Civil", "PRF"],
        attempts: 1
      },
      {
        id: 3,
        title: "O papel da sustentabilidade ambiental no desenvolvimento econômico",
        category: "Meio Ambiente",
        difficulty: "Média",
        description: "Discorra sobre como conciliar crescimento econômico com preservação ambiental no contexto brasileiro.",
        keywords: ["sustentabilidade", "meio ambiente", "economia", "desenvolvimento"],
        concursos: ["IBAMA", "Receita Federal", "Banco Central"],
        attempts: 2
      },
      {
        id: 4,
        title: "Fake news e seus impactos na democracia brasileira",
        category: "Política",
        difficulty: "Difícil",
        description: "Analise como a disseminação de notícias falsas afeta o processo democrático e proponha medidas de combate.",
        keywords: ["fake news", "democracia", "informação", "cidadania"],
        concursos: ["TRF", "TCU", "Senado Federal"],
        attempts: 0
      },
      {
        id: 5,
        title: "A reforma tributária e seus efeitos na economia nacional",
        category: "Economia",
        difficulty: "Muito Difícil",
        description: "Discuta os principais pontos da reforma tributária brasileira e seus impactos na economia e na sociedade.",
        keywords: ["tributação", "economia", "reforma", "impostos"],
        concursos: ["Receita Federal", "Banco Central", "TCU"],
        attempts: 1
      },
      {
        id: 6,
        title: "Saúde pública no Brasil: desafios e perspectivas",
        category: "Saúde",
        difficulty: "Média",
        description: "Analise os principais desafios do Sistema Único de Saúde (SUS) e proponha melhorias para sua efetivação.",
        keywords: ["saúde pública", "SUS", "políticas públicas", "cidadania"],
        concursos: ["Ministério da Saúde", "INSS", "TRF"],
        attempts: 2
      }
    ];

    const myEssays = [
      {
        id: 1,
        theme: "A importância da educação digital no Brasil",
        date: "15/01/2025",
        score: 850,
        maxScore: 1000,
        status: "Corrigida",
        feedback: "Ótima argumentação e estrutura textual. Pontos a melhorar: coesão entre parágrafos."
      },
      {
        id: 2,
        theme: "Desafios da segurança pública no Brasil contemporâneo",
        date: "10/01/2025",
        score: 780,
        maxScore: 1000,
        status: "Corrigida",
        feedback: "Bom desenvolvimento do tema. Sugestão: aprofundar mais nas propostas de intervenção."
      },
      {
        id: 3,
        theme: "O papel da sustentabilidade ambiental",
        date: "05/01/2025",
        score: 920,
        maxScore: 1000,
        status: "Corrigida",
        feedback: "Excelente redação! Argumentação sólida e propostas bem fundamentadas."
      }
    ];

    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Redações para Concursos</h1>
          <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center gap-2">
            <BookMarked className="w-5 h-5" />
            Meus Temas Salvos
          </button>
        </div>

        {!selectedTheme ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Edit3 className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Redações Feitas</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Nota Média</p>
                    <p className="text-2xl font-bold">850</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Evolução</p>
                    <p className="text-2xl font-bold">+15%</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Melhor Nota</p>
                    <p className="text-2xl font-bold">920</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Themes Grid */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Temas Disponíveis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {themes.map((theme) => (
                  <div key={theme.id} className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs font-semibold rounded-full">
                        {theme.category}
                      </span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        theme.difficulty === "Muito Difícil"
                          ? "bg-red-500/10 text-red-500"
                          : theme.difficulty === "Difícil"
                          ? "bg-orange-500/10 text-orange-500"
                          : "bg-blue-500/10 text-blue-500"
                      }`}>
                        {theme.difficulty}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 group-hover:text-[#00FF00] transition-colors leading-tight">
                      {theme.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {theme.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Palavras-chave:</p>
                      <div className="flex flex-wrap gap-2">
                        {theme.keywords.slice(0, 3).map((keyword, i) => (
                          <span key={i} className="px-2 py-1 bg-[#1A1A1A] text-xs rounded-lg text-gray-400">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Concursos relacionados:</p>
                      <div className="flex flex-wrap gap-2">
                        {theme.concursos.map((concurso, i) => (
                          <span key={i} className="px-2 py-1 bg-[#00FF00]/5 border border-[#00FF00]/20 text-xs rounded-lg text-[#00FF00]">
                            {concurso}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-gray-400">Suas tentativas:</span>
                      <span className="font-semibold">{theme.attempts}</span>
                    </div>

                    <button
                      onClick={() => setSelectedTheme(theme.id)}
                      className="w-full py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center justify-center gap-2"
                    >
                      <Edit3 className="w-5 h-5" />
                      Escrever Redação
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* My Essays */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Minhas Redações</h2>
              <div className="space-y-4">
                {myEssays.map((essay) => (
                  <div key={essay.id} className="flex items-center justify-between p-4 bg-[#0D0D0D] rounded-xl border border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-[#00FF00]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-[#00FF00] transition-colors">{essay.theme}</h3>
                        <p className="text-sm text-gray-400">{essay.date} • {essay.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#00FF00]">{essay.score}</p>
                        <p className="text-xs text-gray-400">de {essay.maxScore}</p>
                      </div>
                      <button className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">
                        <Eye className="w-5 h-5 text-gray-400 group-hover:text-[#00FF00]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <BookMarked className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Estrutura Ideal</h3>
                <p className="text-sm text-gray-400">
                  Introdução, desenvolvimento (2-3 parágrafos) e conclusão com proposta de intervenção.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Competências Avaliadas</h3>
                <p className="text-sm text-gray-400">
                  Domínio da norma culta, compreensão do tema, argumentação, coesão e proposta de intervenção.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Dicas de Ouro</h3>
                <p className="text-sm text-gray-400">
                  Use repertório sociocultural, evite clichês e sempre proponha soluções viáveis e detalhadas.
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Essay Writing View */
          <div className="space-y-6">
            <button
              onClick={() => {
                setSelectedTheme(null);
                setEssayText("");
                setShowFeedback(false);
              }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar aos temas
            </button>

            {!showFeedback ? (
              <>
                {/* Theme Info */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs font-semibold rounded-full">
                          {themes.find(t => t.id === selectedTheme)?.category}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold rounded-full">
                          {themes.find(t => t.id === selectedTheme)?.difficulty}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {themes.find(t => t.id === selectedTheme)?.title}
                      </h2>
                      <p className="text-gray-400 mb-4">
                        {themes.find(t => t.id === selectedTheme)?.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {themes.find(t => t.id === selectedTheme)?.keywords.map((keyword, i) => (
                          <span key={i} className="px-3 py-1 bg-[#0D0D0D] text-sm rounded-lg text-gray-400">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Writing Area */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Escreva sua redação</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-400">
                        Palavras: <span className="text-white font-semibold">{essayText.split(/\s+/).filter(w => w).length}</span>
                      </span>
                      <span className="text-gray-400">
                        Caracteres: <span className="text-white font-semibold">{essayText.length}</span>
                      </span>
                    </div>
                  </div>

                  <textarea
                    value={essayText}
                    onChange={(e) => setEssayText(e.target.value)}
                    placeholder="Comece a escrever sua redação aqui... Lembre-se de seguir a estrutura: introdução, desenvolvimento e conclusão com proposta de intervenção."
                    className="w-full h-96 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-6 focus:outline-none focus:border-[#00FF00] transition-colors resize-none text-base leading-relaxed"
                  />

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all flex items-center gap-2">
                        <Save className="w-5 h-5" />
                        Salvar Rascunho
                      </button>
                    </div>
                    <button
                      onClick={() => setShowFeedback(true)}
                      disabled={essayText.split(/\s+/).filter(w => w).length < 50}
                      className="px-8 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      Enviar para Correção
                    </button>
                  </div>

                  {essayText.split(/\s+/).filter(w => w).length < 50 && (
                    <p className="text-sm text-orange-500 mt-2">
                      Mínimo de 50 palavras necessário para enviar (atual: {essayText.split(/\s+/).filter(w => w).length})
                    </p>
                  )}
                </div>

                {/* Writing Tips */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Dicas para esta redação</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-[#0D0D0D] rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-[#00FF00] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        Apresente dados e estatísticas para fundamentar seus argumentos
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#0D0D0D] rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-[#00FF00] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        Utilize conectivos para garantir a coesão entre os parágrafos
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#0D0D0D] rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-[#00FF00] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        Na conclusão, apresente uma proposta de intervenção detalhada e viável
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Feedback View */
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#00FF00]/10 to-transparent border border-[#00FF00]/20 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#00FF00] rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-[#0D0D0D]" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#00FF00]">850 pontos</h2>
                      <p className="text-gray-400">de 1000 pontos possíveis</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    Parabéns! Sua redação demonstra boa compreensão do tema e argumentação consistente.
                  </p>
                </div>

                {/* Competencies */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Avaliação por Competências</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Domínio da norma culta", score: 180, max: 200 },
                      { name: "Compreensão do tema", score: 190, max: 200 },
                      { name: "Argumentação", score: 170, max: 200 },
                      { name: "Coesão e coerência", score: 160, max: 200 },
                      { name: "Proposta de intervenção", score: 150, max: 200 }
                    ].map((comp, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{comp.name}</span>
                          <span className="text-sm font-bold text-[#00FF00]">{comp.score}/{comp.max}</span>
                        </div>
                        <div className="w-full h-3 bg-[#2A2A2A] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#00FF00] rounded-full transition-all"
                            style={{ width: `${(comp.score / comp.max) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Feedback */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Feedback Detalhado</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ThumbsUp className="w-5 h-5 text-[#00FF00]" />
                        <h4 className="font-bold text-[#00FF00]">Pontos Fortes</h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        <li className="text-gray-300">✓ Excelente introdução com contextualização do tema</li>
                        <li className="text-gray-300">✓ Uso adequado de repertório sociocultural</li>
                        <li className="text-gray-300">✓ Argumentação bem fundamentada com dados</li>
                        <li className="text-gray-300">✓ Boa estrutura geral do texto</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-5 h-5 text-orange-500" />
                        <h4 className="font-bold text-orange-500">Pontos a Melhorar</h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        <li className="text-gray-300">• Aprofundar mais a proposta de intervenção</li>
                        <li className="text-gray-300">• Melhorar a coesão entre o 2º e 3º parágrafos</li>
                        <li className="text-gray-300">• Evitar repetição de palavras (use sinônimos)</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="w-5 h-5 text-blue-500" />
                        <h4 className="font-bold text-blue-500">Sugestões</h4>
                      </div>
                      <div className="ml-7 space-y-3">
                        <p className="text-gray-300">
                          Na proposta de intervenção, detalhe mais os agentes responsáveis e os meios de execução. 
                          Por exemplo, especifique qual órgão governamental seria responsável e como a medida seria implementada.
                        </p>
                        <p className="text-gray-300">
                          Para melhorar a coesão, utilize mais conectivos de transição entre os parágrafos, 
                          como "Além disso", "Por outro lado", "Nesse sentido", etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      setShowFeedback(false);
                      setEssayText("");
                    }}
                    className="flex-1 px-6 py-4 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center justify-center gap-2"
                  >
                    <Edit3 className="w-5 h-5" />
                    Escrever Nova Redação
                  </button>
                  <button className="flex-1 px-6 py-4 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl font-semibold hover:border-[#00FF00] transition-all flex items-center justify-center gap-2">
                    <Save className="w-5 h-5" />
                    Salvar Feedback
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // NEW: Mapas Mentais Page
  const MapasMentaisPage = () => {
    const [selectedMapa, setSelectedMapa] = useState<number | null>(null);
    const [expandedNodes, setExpandedNodes] = useState<number[]>([]);

    const mapas = [
      {
        id: 1,
        title: "Direito Constitucional - Princípios Fundamentais",
        subject: "Direito Constitucional",
        nodes: 24,
        lastUpdate: "15/01/2025",
        difficulty: "Média",
        views: 1250
      },
      {
        id: 2,
        title: "Português - Classes Gramaticais",
        subject: "Português",
        nodes: 18,
        lastUpdate: "12/01/2025",
        difficulty: "Fácil",
        views: 890
      },
      {
        id: 3,
        title: "Raciocínio Lógico - Proposições e Conectivos",
        subject: "Raciocínio Lógico",
        nodes: 32,
        lastUpdate: "10/01/2025",
        difficulty: "Difícil",
        views: 2100
      },
      {
        id: 4,
        title: "Direito Administrativo - Atos Administrativos",
        subject: "Direito Administrativo",
        nodes: 28,
        lastUpdate: "08/01/2025",
        difficulty: "Média",
        views: 1580
      },
      {
        id: 5,
        title: "Informática - Redes de Computadores",
        subject: "Informática",
        nodes: 22,
        lastUpdate: "05/01/2025",
        difficulty: "Média",
        views: 950
      },
      {
        id: 6,
        title: "Atualidades - Política Internacional 2024",
        subject: "Atualidades",
        nodes: 16,
        lastUpdate: "03/01/2025",
        difficulty: "Fácil",
        views: 720
      }
    ];

    const mapaExample = {
      central: "Direito Constitucional",
      branches: [
        {
          id: 1,
          title: "Princípios Fundamentais",
          color: "#00FF00",
          subnodes: [
            { id: 11, text: "Soberania" },
            { id: 12, text: "Cidadania" },
            { id: 13, text: "Dignidade da pessoa humana" },
            { id: 14, text: "Valores sociais do trabalho" }
          ]
        },
        {
          id: 2,
          title: "Direitos e Garantias",
          color: "#00DDDD",
          subnodes: [
            { id: 21, text: "Direitos individuais" },
            { id: 22, text: "Direitos coletivos" },
            { id: 23, text: "Direitos sociais" },
            { id: 24, text: "Direitos políticos" }
          ]
        },
        {
          id: 3,
          title: "Organização do Estado",
          color: "#FFAA00",
          subnodes: [
            { id: 31, text: "União" },
            { id: 32, text: "Estados" },
            { id: 33, text: "Municípios" },
            { id: 34, text: "Distrito Federal" }
          ]
        },
        {
          id: 4,
          title: "Poderes",
          color: "#FF00FF",
          subnodes: [
            { id: 41, text: "Executivo" },
            { id: 42, text: "Legislativo" },
            { id: 43, text: "Judiciário" }
          ]
        }
      ]
    };

    const toggleNode = (id: number) => {
      setExpandedNodes(prev => 
        prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]
      );
    };

    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Mapas Mentais</h1>
          <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Criar Novo Mapa
          </button>
        </div>

        {!selectedMapa ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Circle className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Mapas Criados</p>
                    <p className="text-2xl font-bold">18</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Circle className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Total de Nós</p>
                    <p className="text-2xl font-bold">432</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Visualizações</p>
                    <p className="text-2xl font-bold">8.5k</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Bookmark className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Favoritos</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapas Grid */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Meus Mapas Mentais</h2>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filtrar
                  </button>
                  <button className="px-4 py-2 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Buscar
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mapas.map((mapa) => (
                  <div key={mapa.id} className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
                        <Circle className="w-6 h-6 text-[#00FF00]" />
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        mapa.difficulty === "Difícil"
                          ? "bg-red-500/10 text-red-500"
                          : mapa.difficulty === "Média"
                          ? "bg-orange-500/10 text-orange-500"
                          : "bg-blue-500/10 text-blue-500"
                      }`}>
                        {mapa.difficulty}
                      </span>
                    </div>

                    <span className="px-3 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs font-semibold rounded-full">
                      {mapa.subject}
                    </span>

                    <h3 className="text-lg font-bold mt-3 mb-4 group-hover:text-[#00FF00] transition-colors leading-tight">
                      {mapa.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Nós</span>
                        <span className="font-semibold">{mapa.nodes}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Visualizações</span>
                        <span className="font-semibold">{mapa.views}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Atualizado</span>
                        <span className="font-semibold">{mapa.lastUpdate}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedMapa(mapa.id)}
                        className="flex-1 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center justify-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        Visualizar
                      </button>
                      <button className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <Circle className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Organização Visual</h3>
                <p className="text-sm text-gray-400">
                  Mapas mentais facilitam a memorização através da organização visual hierárquica de conceitos.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <Link2 className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Conexões</h3>
                <p className="text-sm text-gray-400">
                  Estabeleça conexões entre conceitos para criar uma rede de conhecimento interligado.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <Edit3 className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Personalização</h3>
                <p className="text-sm text-gray-400">
                  Use cores, ícones e palavras-chave para tornar seus mapas únicos e memoráveis.
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Mapa Viewer */
          <div className="space-y-6">
            <button
              onClick={() => setSelectedMapa(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar aos mapas
            </button>

            {/* Mapa Header */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="px-3 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs font-semibold rounded-full">
                    Direito Constitucional
                  </span>
                  <h2 className="text-2xl font-bold mt-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Direito Constitucional - Princípios Fundamentais
                  </h2>
                  <p className="text-gray-400 mt-2">24 nós • Atualizado em 15/01/2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mapa Visual */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8">
              <div className="flex items-center justify-center min-h-[600px]">
                <div className="relative w-full max-w-5xl">
                  {/* Central Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-48 h-48 bg-gradient-to-br from-[#00FF00] to-[#00CC00] rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-2xl font-bold text-[#0D0D0D] text-center px-4">
                        {mapaExample.central}
                      </span>
                    </div>
                  </div>

                  {/* Branches */}
                  {mapaExample.branches.map((branch, index) => {
                    const angle = (index * 360) / mapaExample.branches.length;
                    const radius = 280;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const isExpanded = expandedNodes.includes(branch.id);

                    return (
                      <div key={branch.id}>
                        {/* Connection Line */}
                        <svg className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
                          <line
                            x1="0"
                            y1="0"
                            x2={x}
                            y2={y}
                            stroke={branch.color}
                            strokeWidth="3"
                            opacity="0.5"
                          />
                        </svg>

                        {/* Branch Node */}
                        <div
                          className="absolute top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                          }}
                          onClick={() => toggleNode(branch.id)}
                        >
                          <div
                            className="w-36 h-36 rounded-2xl flex items-center justify-center shadow-xl border-4"
                            style={{
                              backgroundColor: `${branch.color}20`,
                              borderColor: branch.color
                            }}
                          >
                            <div className="text-center px-3">
                              <span className="font-bold text-sm block mb-1">{branch.title}</span>
                              <span className="text-xs text-gray-400">{branch.subnodes.length} itens</span>
                            </div>
                          </div>

                          {/* Subnodes */}
                          {isExpanded && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 space-y-2 w-48">
                              {branch.subnodes.map((subnode) => (
                                <div
                                  key={subnode.id}
                                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-3 hover:border-[#00FF00]/50 transition-all"
                                  style={{ borderLeftColor: branch.color, borderLeftWidth: '4px' }}
                                >
                                  <span className="text-sm">{subnode.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 text-center text-sm text-gray-400">
                <p>Clique nos nós coloridos para expandir e ver os subitens</p>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Legenda</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mapaExample.branches.map((branch) => (
                  <div key={branch.id} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-lg"
                      style={{ backgroundColor: branch.color }}
                    ></div>
                    <span className="text-sm">{branch.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // NEW: Legislação Page
  const LeisPage = () => {
    const [selectedLei, setSelectedLei] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedArticles, setExpandedArticles] = useState<number[]>([]);

    const leis = [
      {
        id: 1,
        number: "CF/88",
        title: "Constituição Federal de 1988",
        category: "Constitucional",
        articles: 250,
        lastUpdate: "EC 132/2023",
        importance: "Essencial",
        views: 15200
      },
      {
        id: 2,
        number: "Lei 8.112/90",
        title: "Regime Jurídico dos Servidores Públicos",
        category: "Administrativo",
        articles: 253,
        lastUpdate: "2023",
        importance: "Alta",
        views: 8900
      },
      {
        id: 3,
        number: "Lei 9.784/99",
        title: "Processo Administrativo Federal",
        category: "Administrativo",
        articles: 69,
        lastUpdate: "2023",
        importance: "Alta",
        views: 6700
      },
      {
        id: 4,
        number: "Lei 8.666/93",
        title: "Licitações e Contratos",
        category: "Administrativo",
        articles: 126,
        lastUpdate: "2023",
        importance: "Alta",
        views: 9500
      },
      {
        id: 5,
        number: "Lei 14.133/21",
        title: "Nova Lei de Licitações",
        category: "Administrativo",
        articles: 193,
        lastUpdate: "2023",
        importance: "Essencial",
        views: 12300
      },
      {
        id: 6,
        number: "Código Penal",
        title: "Decreto-Lei 2.848/40",
        category: "Penal",
        articles: 361,
        lastUpdate: "2024",
        importance: "Essencial",
        views: 18500
      },
      {
        id: 7,
        number: "CPP",
        title: "Código de Processo Penal",
        category: "Processual Penal",
        articles: 811,
        lastUpdate: "2024",
        importance: "Alta",
        views: 11200
      },
      {
        id: 8,
        number: "Lei 13.709/18",
        title: "Lei Geral de Proteção de Dados (LGPD)",
        category: "Digital",
        articles: 65,
        lastUpdate: "2023",
        importance: "Alta",
        views: 7800
      }
    ];

    const leiExample = {
      number: "CF/88",
      title: "Constituição Federal de 1988",
      articles: [
        {
          id: 1,
          number: "Art. 1º",
          text: "A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:",
          incisos: [
            "I - a soberania;",
            "II - a cidadania;",
            "III - a dignidade da pessoa humana;",
            "IV - os valores sociais do trabalho e da livre iniciativa;",
            "V - o pluralismo político."
          ],
          paragrafo: "Parágrafo único. Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição."
        },
        {
          id: 2,
          number: "Art. 2º",
          text: "São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.",
          incisos: [],
          paragrafo: ""
        },
        {
          id: 3,
          number: "Art. 3º",
          text: "Constituem objetivos fundamentais da República Federativa do Brasil:",
          incisos: [
            "I - construir uma sociedade livre, justa e solidária;",
            "II - garantir o desenvolvimento nacional;",
            "III - erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;",
            "IV - promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação."
          ],
          paragrafo: ""
        },
        {
          id: 5,
          number: "Art. 5º",
          text: "Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:",
          incisos: [
            "I - homens e mulheres são iguais em direitos e obrigações, nos termos desta Constituição;",
            "II - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei;",
            "III - ninguém será submetido a tortura nem a tratamento desumano ou degradante;",
            "IV - é livre a manifestação do pensamento, sendo vedado o anonimato;",
            "V - é assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem;"
          ],
          paragrafo: "§ 1º As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata."
        }
      ]
    };

    const toggleArticle = (id: number) => {
      setExpandedArticles(prev =>
        prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
      );
    };

    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Legislação Completa</h1>
          <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Adicionar Lei
          </button>
        </div>

        {!selectedLei ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Leis Cadastradas</p>
                    <p className="text-2xl font-bold">156</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Artigos</p>
                    <p className="text-2xl font-bold">12.5k</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Bookmark className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Favoritas</p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8 text-[#00FF00]" />
                  <div>
                    <p className="text-sm text-gray-400">Consultas</p>
                    <p className="text-2xl font-bold">3.2k</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por número, título ou palavra-chave..."
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl pl-14 pr-4 py-4 text-lg focus:outline-none focus:border-[#00FF00] transition-colors"
                />
              </div>
            </div>

            {/* Leis Grid */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Legislação por Categoria</h2>
                <button className="px-4 py-2 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filtrar
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leis.map((lei) => (
                  <div key={lei.id} className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-[#00FF00]" />
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        lei.importance === "Essencial"
                          ? "bg-[#00FF00]/10 text-[#00FF00]"
                          : "bg-orange-500/10 text-orange-500"
                      }`}>
                        {lei.importance}
                      </span>
                    </div>

                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold rounded-full">
                      {lei.category}
                    </span>

                    <div className="mt-3">
                      <h3 className="text-lg font-bold text-[#00FF00] mb-1">{lei.number}</h3>
                      <h4 className="text-base font-semibold mb-4 group-hover:text-[#00FF00] transition-colors leading-tight">
                        {lei.title}
                      </h4>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Artigos</span>
                        <span className="font-semibold">{lei.articles}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Visualizações</span>
                        <span className="font-semibold">{lei.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Atualização</span>
                        <span className="font-semibold">{lei.lastUpdate}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedLei(lei.id)}
                        className="flex-1 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center justify-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        Consultar
                      </button>
                      <button className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Access */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Mais Consultadas</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Acesse rapidamente as leis mais consultadas por concurseiros.
                </p>
                <button className="text-[#00FF00] text-sm font-semibold hover:underline">
                  Ver lista completa →
                </button>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Atualizações Recentes</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Fique por dentro das últimas alterações legislativas importantes.
                </p>
                <button className="text-[#00FF00] text-sm font-semibold hover:underline">
                  Ver atualizações →
                </button>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-4">
                  <Bookmark className="w-6 h-6 text-[#00FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Minhas Favoritas</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Organize e acesse rapidamente suas leis favoritas.
                </p>
                <button className="text-[#00FF00] text-sm font-semibold hover:underline">
                  Ver favoritas →
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Lei Viewer */
          <div className="space-y-6">
            <button
              onClick={() => setSelectedLei(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Voltar à lista
            </button>

            {/* Lei Header */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold rounded-full">
                      Constitucional
                    </span>
                    <span className="px-3 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs font-semibold rounded-full">
                      Essencial
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#00FF00] mb-2">{leiExample.number}</h2>
                  <h3 className="text-xl font-semibold mb-2">{leiExample.title}</h3>
                  <p className="text-gray-400">250 artigos • Atualizada: EC 132/2023</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl hover:border-[#00FF00] transition-all">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Artigos</h3>
              <div className="space-y-4">
                {leiExample.articles.map((article) => {
                  const isExpanded = expandedArticles.includes(article.id);
                  return (
                    <div key={article.id} className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleArticle(article.id)}
                        className="w-full flex items-center justify-between p-5 hover:bg-[#1A1A1A] transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#00FF00]/10 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-[#00FF00]" />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-[#00FF00]">{article.number}</h4>
                            <p className="text-sm text-gray-400 line-clamp-1">{article.text}</p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 space-y-4">
                          <div className="pl-14">
                            <p className="text-gray-300 leading-relaxed mb-4">{article.text}</p>

                            {article.incisos.length > 0 && (
                              <div className="space-y-2 mb-4">
                                {article.incisos.map((inciso, i) => (
                                  <div key={i} className="flex gap-3 text-gray-300">
                                    <span className="text-[#00FF00] font-semibold">{inciso.split(' ')[0]}</span>
                                    <span>{inciso.substring(inciso.indexOf(' ') + 1)}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {article.paragrafo && (
                              <div className="mt-4 p-4 bg-[#1A1A1A] border-l-4 border-[#00FF00] rounded">
                                <p className="text-gray-300 leading-relaxed">{article.paragrafo}</p>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-2 pl-14">
                            <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#00FF00] transition-all text-sm flex items-center gap-2">
                              <Bookmark className="w-4 h-4" />
                              Favoritar
                            </button>
                            <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#00FF00] transition-all text-sm flex items-center gap-2">
                              <MessageCircle className="w-4 h-4" />
                              Comentar
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl font-semibold hover:border-[#00FF00] transition-all flex items-center gap-2">
                <ChevronRight className="w-5 h-5 rotate-180" />
                Artigos Anteriores
              </button>
              <span className="text-gray-400">Mostrando artigos 1-4 de 250</span>
              <button className="px-6 py-3 bg-[#00FF00] text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#00DD00] transition-all flex items-center gap-2">
                Próximos Artigos
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Schedule, Forum, Profile Pages (mantidos iguais - código muito longo)
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
          {currentPage === "questions" && <QuestionsPage />}
          {currentPage === "simulado" && <SimuladoPage />}
          {currentPage === "redacoes" && <RedacoesPage />}
          {currentPage === "mapas" && <MapasMentaisPage />}
          {currentPage === "leis" && <LeisPage />}
          {currentPage === "schedule" && <SchedulePage />}
          {currentPage === "forum" && <ForumPage />}
          {currentPage === "profile" && <ProfilePage />}
        </main>
      </div>
    </div>
  );
}
