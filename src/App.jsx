import React, { useState, useEffect, useCallback, memo } from 'react';
import {
  Leaf,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Heart,
  Target,
  Users,
  ChevronDown,
  Lock,
  Sparkles
} from 'lucide-react';

/* ===========================
   CONSTANTES DE CONTEÚDO
=========================== */

const PAINS = [
  "Cansaço que não passa com o descanso",
  "Mente sempre ligada em mil tarefas",
  "Corpo que já não acompanha o seu ritmo",
  "Fé que existe, mas anda distante das decisões"
];

const RESULTS = [
  "Decisões mais claras e seguras",
  "Energia estável durante o dia",
  "Disciplina sem esforço excessivo",
  "Espiritualidade prática e real",
  "Controlo total da sua própria vida",
  "Resultados sem custar a sua paz"
];

const FOR_WHO = [
  "Mulheres entre 28 e 50 anos",
  "Líderes, empreendedoras ou empresárias",
  "Mães e esposas com múltiplos papéis",
  "Mulheres inteligentes e exigentes consigo mesmas",
  "Quem quer crescer sem se afastar da fé e da família"
];

const NOT_FOR = [
  "Procura motivação passageira",
  "Busca fórmulas prontas e superficiais",
  "Não está disposta a olhar para dentro",
  "Está confortável a viver no automático"
];

/* ===========================
   COMPONENTES REUTILIZÁVEIS
=========================== */

const Button = memo(({ children, className = "", onClick }) => (
  <button
    onClick={onClick}
    aria-label="Call to action"
    className={`px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl ${className}`}
  >
    {children}
  </button>
));

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const PillarCard = memo(({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6">
      <Icon className="text-emerald-700" size={26} />
    </div>
    <h3 className="text-xl font-bold text-stone-800 mb-3">{title}</h3>
    <p className="text-stone-600 leading-relaxed">{description}</p>
  </div>
));

/* ===========================
   APP
=========================== */

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = useCallback(() => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-stone-800 selection:bg-emerald-100 overflow-x-hidden">

      {/* NAV */}
      <nav
        aria-label="Navegação principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-emerald-700" size={24} />
            <span className="font-bold tracking-tighter text-xl uppercase">
              Energize-se
            </span>
          </div>
          <button
            onClick={scrollToOffer}
            className="hidden md:block text-sm font-semibold text-emerald-800 border-b-2 border-emerald-800 hover:text-emerald-600"
          >
            QUERO VOLTAR A FLUIR
          </button>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section className="pt-40 pb-32 text-center px-6 relative">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50/50 rounded-full blur-[120px]" />

          <div className="max-w-4xl mx-auto relative">
            <div className="inline-flex items-center gap-2 bg-emerald-100/50 text-emerald-800 px-5 py-2 rounded-full text-xs font-black mb-8 uppercase">
              <Sparkles size={14} /> Método Cristão de Realinhamento
            </div>

            <h1 className="text-5xl md:text-7xl font-serif mb-8">
              🌿 ENERGIZE-SE
            </h1>

            <p className="text-2xl md:text-3xl font-serif text-stone-700 mb-10">
              Para mulheres que cresceram, conquistaram — e agora precisam{" "}
              <span className="italic text-emerald-800">se alinhar</span>.
            </p>

            <Button
              onClick={scrollToOffer}
              className="bg-emerald-800 text-white hover:bg-emerald-900 min-w-[320px]"
            >
              QUERO ME ALINHAR AGORA
            </Button>

            <p className="mt-4 text-sm text-stone-400 flex justify-center gap-2">
              <Lock size={14} /> Pagamento seguro • Acesso imediato
            </p>
          </div>

          <div className="mt-20 animate-bounce text-emerald-800/30">
            <ChevronDown size={32} />
          </div>
        </section>
      </main>

      {/* DOR */}
      <Section className="bg-stone-50 border-y border-stone-100">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              Talvez você esteja sentindo:
            </h2>
            <ul className="space-y-5">
              {PAINS.map((pain, i) => (
                <li key={i} className="flex gap-4">
                  <ArrowRight className="text-emerald-700 mt-1" size={16} />
                  <span className="text-lg">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PILARES */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-700 uppercase mb-4">
            A Estrutura
          </h2>
          <h3 className="text-4xl font-serif">
            O método por trás da transformação
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <PillarCard icon={Target} title="Corpo" description="Energia é base." />
          <PillarCard icon={Heart} title="Mente" description="Clareza emocional." />
          <PillarCard icon={ShieldCheck} title="Espírito" description="Fé aplicada." />
          <PillarCard icon={Zap} title="Ação" description="Disciplina alinhada." />
        </div>
      </Section>

      {/* RESULTADOS */}
      <Section className="bg-emerald-900 text-white rounded-[3rem] mx-6 my-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESULTS.map((res, i) => (
            <div key={i} className="flex gap-3 bg-emerald-800/30 p-6 rounded-2xl">
              <CheckCircle2 className="text-emerald-400" />
              <span>{res}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* OFERTA */}
      <Section id="offer" className="scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center bg-white p-14 rounded-[3rem] shadow-2xl">
          <h2 className="text-4xl font-serif mb-6">
            O seu próximo nível começa agora
          </h2>

          <p className="uppercase text-sm tracking-widest text-stone-500 mb-2">
            Acesso vitalício por apenas
          </p>

          <div className="flex justify-center gap-4 items-center mb-8">
            <span className="text-xl line-through text-stone-300">R$ 197</span>
            <span className="text-6xl font-black text-emerald-900">R$ 67</span>
          </div>

          <Button
            className="w-full bg-emerald-800 text-white hover:bg-emerald-900 py-6"
            onClick={() =>
              window.open(
                'https://checkout.exemplo.com',
                '_blank',
                'noopener'
              )
            }
          >
            QUERO ME ALINHAR AGORA
          </Button>

          <p className="mt-4 text-sm text-stone-500">
            Você tem 7 dias para testar.  
            Se não sentir clareza e energia, devolvemos 100%.
          </p>

          <div className="mt-6 flex justify-center gap-6 text-sm text-stone-400">
            <span className="flex gap-2 items-center">
              <ShieldCheck size={16} /> Garantia 7 dias
            </span>
            <span className="flex gap-2 items-center">
              <Lock size={16} /> Compra segura
            </span>
          </div>
        </div>
      </Section>

      {/* MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t z-50">
        <Button
          className="w-full bg-emerald-800 text-white py-4"
          onClick={scrollToOffer}
        >
          QUERO ME ALINHAR — R$ 67
        </Button>
      </div>
    </div>
  );
}
